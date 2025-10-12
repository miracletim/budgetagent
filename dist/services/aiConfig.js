"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.promptAI = promptAI;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const genai_1 = require("@google/genai");
const ai = new genai_1.GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
async function promptAI(staticPrompt, userPrompt) {
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: `${staticPrompt} ${userPrompt}`,
        config: { thinkingConfig: { thinkingBudget: 0 } },
    });
    return response.text;
}
//# sourceMappingURL=aiConfig.js.map