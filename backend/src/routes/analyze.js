import express from "express";
import groq from "../lib/groqClient.js";
import { buildMisinformationPrompt } from "../lib/prompt.js";

const router = express.Router();

router.post("/analyze-claim", async (req, res) => {
  const { claim } = req.body;

  if (!claim) {
    return res.status(400).json({ error: "Claim is required" });
  }

  try {
    const completion = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [{ role: "user", content: buildMisinformationPrompt(claim) }],
      temperature: 0.2
    });

    const output = JSON.parse(
      completion.choices[0].message.content
    );

    res.json(output);
  } catch (err) {
    res.status(500).json({
      error: err.response?.data || err.message
    });
  }
});

export default router;
