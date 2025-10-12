"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getResponse = getResponse;
const aiConfig_1 = require("../services/aiConfig");
const Static_Prompt_1 = require("../prompts/Static_Prompt");
async function getResponse(req, res) {
    const { prompt } = await req.body;
    if (prompt == undefined) {
        return res.json({ error: "error" });
    }
    const response = await (0, aiConfig_1.promptAI)(Static_Prompt_1.StaticPrompt, prompt);
    if (response != undefined) {
        const fixed = response
            .replace(/(\w+):/g, '"$1":') // add quotes around keys
            .replace(/,\s*}/g, "}") // remove trailing commas
            .replace(/,\s*]/g, "]"); // remove trailing commas in arrays
        const finRes = JSON.parse(fixed);
        return res.json(finRes);
    }
}
//# sourceMappingURL=chatController.js.map