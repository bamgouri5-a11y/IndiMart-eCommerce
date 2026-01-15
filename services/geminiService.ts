const getClient = () => {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

  if (!apiKey) {
    console.warn("Gemini API key missing");
    return null;
  }

  return new GoogleGenAI({ apiKey });
};