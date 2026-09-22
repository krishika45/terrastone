import express from "express";
import path from "path";
import { GoogleGenAI } from "@google/genai";

let genAIClient: GoogleGenAI | null = null;

function getGenAI(): GoogleGenAI {
  if (!genAIClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error(
        "GEMINI_API_KEY is not set. Please attach an API key in the AI Studio Settings > Secrets panel."
      );
    }
    genAIClient = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return genAIClient;
}

function formatErrorMessage(error: any, defaultMsg: string): string {
  let msg = error?.message || defaultMsg;
  try {
    const parsed = JSON.parse(msg);
    if (parsed?.error?.message) {
      return parsed.error.message;
    }
  } catch {}
  return msg;
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json({ limit: "10mb" }));

  // API Health Check
  app.get("/api/health", (_req, res) => {
    res.json({
      status: "ok",
      service: "TerraStone International API",
      timestamp: new Date().toISOString(),
    });
  });

  // Search Grounded AI Stone Advisor (using gemini-3.5-flash with googleSearch tool)
  app.post("/api/ai/search-consult", async (req, res) => {
    try {
      const { prompt, stoneCategory, application } = req.body;
      if (!prompt || typeof prompt !== "string") {
        return res.status(400).json({ error: "Missing or invalid prompt string." });
      }

      const ai = getGenAI();

      const contextIntro = `You are TerraStone International's Senior Architectural Stone Consultant & Global Sourcing Specialist based at our manufacturing base in Bhilwara, Rajasthan, India.
TerraStone International specializes in premium Indian & Italian Marble (Makrana, Carrara, Statuario, Rainforest), Granite (Rajasthan Black, Tan Brown, Imperial Gold), Sandstone (Dholpur Beige, Teakwood, Rainbow, Kandla Grey), Limestone (Kota Stone, Jaisalmer Yellow), Quartzite, and custom CNC bookmatched mega-slabs.
You have access to Google Search for live global stone market specifications, architectural trends, ASTM/EN durability standards (water absorption C97, compressive strength C170, slip resistance D2047/ANSI A326.3), recent quarry output, and export logistics (Mundra Port, JNPT).

When answering:
1. Provide accurate, professional, authoritative natural stone engineering & aesthetic advice.
2. Cite real architectural standards and live market data when applicable.
3. Include practical guidance on finishes (Flamed, Honed, Leathered, Polished, Bush Hammered), thickness sizing (18mm, 20mm, 30mm, 40mm, 50mm), sealing protocols, and maintenance.
4. Conclude with tailored recommendations matching TerraStone's capabilities in Bhilwara, Rajasthan.`;

      let modelName = "gemini-3.5-flash";
      let response;
      try {
        response = await ai.models.generateContent({
          model: modelName,
          contents: `${contextIntro}\n\nContext: Stone Category: ${stoneCategory || "General Natural Stone"}, Application: ${application || "Architectural Project"}\n\nUser Question: ${prompt}`,
          config: {
            tools: [{ googleSearch: {} }],
          },
        });
      } catch (err: any) {
        // Fallback to gemini-3.8-flash if gemini-3.5-flash encounters temporary issue
        console.warn(`Fallback from ${modelName} to gemini-3.8-flash:`, err?.message);
        modelName = "gemini-3.8-flash";
        response = await ai.models.generateContent({
          model: modelName,
          contents: `${contextIntro}\n\nContext: Stone Category: ${stoneCategory || "General Natural Stone"}, Application: ${application || "Architectural Project"}\n\nUser Question: ${prompt}`,
          config: {
            tools: [{ googleSearch: {} }],
          },
        });
      }

      const text = response.text || "No response generated.";
      const candidate = response.candidates?.[0];
      const groundingMetadata = candidate?.groundingMetadata;

      // Extract search grounding web sources
      const rawChunks = groundingMetadata?.groundingChunks || [];
      const searchSources = rawChunks
        .filter((chunk: any) => chunk.web && chunk.web.uri)
        .map((chunk: any) => ({
          title: chunk.web.title || chunk.web.uri,
          uri: chunk.web.uri,
        }));

      const searchQueries = groundingMetadata?.webSearchQueries || [];

      res.json({
        text,
        searchSources,
        searchQueries,
        modelUsed: modelName,
      });
    } catch (error: any) {
      console.error("Error in /api/ai/search-consult:", error);
      res.status(500).json({
        error: formatErrorMessage(error, "Failed to generate search-grounded stone advice."),
      });
    }
  });

  // Maps Grounded Quarry & Logistics Locator (using gemini-3.5-flash with googleMaps tool)
  app.post("/api/ai/maps-locate", async (req, res) => {
    try {
      const { prompt, latitude, longitude } = req.body;
      if (!prompt || typeof prompt !== "string") {
        return res.status(400).json({ error: "Missing or invalid prompt string." });
      }

      const ai = getGenAI();

      const contextIntro = `You are TerraStone International's Geographic Stone Sourcing & Freight Logistics Specialist based in Bhilwara, Rajasthan, India.
You provide precise geographic intelligence on natural stone quarries (e.g. Bhilwara granite belts, Makrana marble deposits, Kishangarh marble hub, Jodhpur/Dholpur sandstone beds, Kota limestone quarries, Carrara Italy basins), international export corridors (direct highway access to Mundra Port, Gujarat and Nhava Sheva JNPT, Mumbai), stone processing clusters, and architectural stone supply points.
Leverage Google Maps to identify real geographic entities, distances, landmarks, and route logistics.`;

      const hasCoordinates =
        typeof latitude === "number" &&
        typeof longitude === "number" &&
        !isNaN(latitude) &&
        !isNaN(longitude);

      let modelName = "gemini-3.5-flash";
      let response;
      try {
        response = await ai.models.generateContent({
          model: modelName,
          contents: `${contextIntro}\n\nUser Geographic Request: ${prompt}`,
          config: {
            tools: [{ googleMaps: {} }],
            ...(hasCoordinates
              ? {
                  toolConfig: {
                    retrievalConfig: {
                      latLng: {
                        latitude,
                        longitude,
                      },
                    },
                  },
                }
              : {}),
          },
        });
      } catch (err: any) {
        console.warn(`Fallback from ${modelName} to gemini-3.8-flash for maps:`, err?.message);
        modelName = "gemini-3.8-flash";
        response = await ai.models.generateContent({
          model: modelName,
          contents: `${contextIntro}\n\nUser Geographic Request: ${prompt}`,
          config: {
            tools: [{ googleMaps: {} }],
            ...(hasCoordinates
              ? {
                  toolConfig: {
                    retrievalConfig: {
                      latLng: {
                        latitude,
                        longitude,
                      },
                    },
                  },
                }
              : {}),
          },
        });
      }

      const text = response.text || "No geographic information generated.";
      const candidate = response.candidates?.[0];
      const groundingMetadata = candidate?.groundingMetadata;

      // Extract map place sources, URIs, and review snippets
      const rawChunks = groundingMetadata?.groundingChunks || [];
      const mapSources: any[] = [];

      for (const chunk of rawChunks) {
        if (chunk.maps) {
          const mapObj: any = {
            title: chunk.maps.title || "Google Maps Location",
            uri: chunk.maps.uri || "",
          };

          if (chunk.maps.placeAnswerSources?.reviewSnippets) {
            mapObj.placeAnswerSources = {
              reviewSnippets: chunk.maps.placeAnswerSources.reviewSnippets.map((r: any) => ({
                reviewText: r.reviewText,
                authorAttribution: r.authorAttribution,
              })),
            };
          }

          mapSources.push(mapObj);
        }
      }

      res.json({
        text,
        mapSources,
        modelUsed: modelName,
      });
    } catch (error: any) {
      console.error("Error in /api/ai/maps-locate:", error);
      res.status(500).json({
        error: formatErrorMessage(error, "Failed to locate stone quarries or freight routes via Maps."),
      });
    }
  });

  // Vite middleware setup
  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`TerraStone server active on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error("Server startup error:", err);
  process.exit(1);
});
