"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const chatRoutes_1 = __importDefault(require("./routes/chatRoutes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send("Hello, Miracle 👋 — Express + TypeScript setup complete!");
});
app.use("/c", chatRoutes_1.default);
if (process.env.NODE_ENV !== "production") {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
}
// ✅ For Vercel
exports.default = app;
//# sourceMappingURL=index.js.map