import dotenv from "dotenv/config";
import express from "express";
import cookieParser from "cookie-parser";
import path from "path";
import cors from "cors";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { connectDB } from "./lib/db.js";

// dotenv.config();
const app = express();
const __dirname = path.resolve();

const PORT = process.env.PORT || 3000;

app.use(express.json({ limit: "5mb" })); //req.body

app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));

app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);

// make ready for deployment
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("/*splat", (_, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}
app.listen(PORT, () => {
  console.log("Server is listening at port: " + PORT);
  connectDB();
});
