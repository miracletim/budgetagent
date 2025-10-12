import express, { Request, Response } from "express";
import chatRouter from "./routes/chatRoutes";

const app = express();
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, Miracle 👋 — Express + TypeScript setup complete!");
});

app.use("/c", chatRouter);

if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

// ✅ For Vercel
export default app;
