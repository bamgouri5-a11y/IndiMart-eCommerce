const getClient = () => {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

  if (!apiKey) {
    console.warn("Gemini API key missing");
    return null;
  }

  return new GoogleGenAI({ apiKey });
};export const generateProductImage = async (prompt: string) => {
  // अभी image generation नहीं कर रहे, placeholder दे रहे हैं
  // ताकि Netlify build fail ना हो
  return "https://picsum.photos/600/400";
};