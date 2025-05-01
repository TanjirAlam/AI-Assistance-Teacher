const axios = require("axios");

const askGemini = async (question) => {
  const endpoint = "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent";
  const headers = {
    "Content-Type": "application/json",
    "x-goog-api-key": process.env.GEMINI_API_KEY,
  };

  const body = {
    contents: [
      {
        parts: [{ text: question }],
      },
    ],
  };

  try {
    const response = await axios.post(endpoint, body, { headers });
    const answer = response.data.candidates[0].content.parts[0].text;
    return answer;
  } catch (error) {
    console.error("Gemini API Error:", error.response?.data || error.message);
    return "Sorry, an error occurred while fetching the answer.";
  }
};

module.exports = askGemini;
