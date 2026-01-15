import { GoogleGenerativeAI } from "@google/generative-ai";

const getClient = () => {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

  if (!apiKey) {
    console.warn("Gemini API key missing");
    return null;
  }

  return new GoogleGenerativeAI(apiKey);
};

// ✅ Product description generator
export const generateProductDescription = async (prompt: string) => {
  const client = getClient();
  if (!client) return "Gemini API key missing. Please configure it to use AI features.";

  try {
    const model = client.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Failed to generate description. Please try again.";
  }
};

// ✅ Placeholder image generator (build fail avoid)
export const generateProductImage = async (_prompt: string) => {
  return "https://picsum.photos/600/400";
};