import { Request, Response } from "express";
import { promptAI } from "../services/aiConfig";
import { StaticPrompt } from "../prompts/Static_Prompt";

export async function getResponse(req: Request, res: Response): Promise<any> {
  const { prompt } = await req.body;
  if (prompt == undefined) {
    return res.json({ error: "error" });
  }

  const response = await promptAI(StaticPrompt, prompt);

  if (response != undefined) {
    const fixed = response
      .replace(/(\w+):/g, '"$1":') // add quotes around keys
      .replace(/,\s*}/g, "}") // remove trailing commas
      .replace(/,\s*]/g, "]"); // remove trailing commas in arrays

    const finRes = JSON.parse(fixed);
    return res.json(finRes);
  }
}
