const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const askGemini = require("./gemini");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// API Endpoint to handle doubt input
app.post("/ask-doubt", async (req, res) => {
  const { question } = req.body;

  if (!question || typeof question !== "string") {
    return res.status(400).json({ error: "Invalid question format" });
  }

  const answer = await askGemini(question);
  res.json({ question, answer });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
