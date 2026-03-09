import "dotenv/config";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { connectDB } from "./db/mongoClient.js";
import router from "./routes/index.js";
import mongoose from "mongoose";
import errorMiddleware from "./middlewares/error-middleware.js";

const app = express();
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(cookieParser());
app.use("/", router);
app.use(errorMiddleware);

const PORT = process.env.PORT || 3000;

async function startServer() {
    try {
        await connectDB();
        await mongoose.connect(process.env.URL);

        app.listen(PORT, () => {
            console.log(`🚀 Server running at http://localhost:${PORT}`);
        });
    } catch (err) {
        console.error("❌ Failed to start server:", err);
    }
}

startServer();
