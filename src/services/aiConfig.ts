import dotenv from "dotenv";
dotenv.config();

import { ContentListUnion, GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function promptAI(
  staticPrompt: ContentListUnion,
  userPrompt: ContentListUnion
): Promise<String | undefined> {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: `${staticPrompt} ${userPrompt}`,
    config: { thinkingConfig: { thinkingBudget: 0 } },
  });

  return response.text;
}
