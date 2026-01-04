import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const client = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

async function listModels() {
  try {
    const models = await client.models.list();
    console.log("✅ Available models:", models);
  } catch (err) {
    console.error(err);
  }
}

listModels();
