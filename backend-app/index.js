import "dotenv/config";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { connectDB } from "./db/mongoClient.js";
import router from "./routes/index.js";

const app = express();
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT || 3000;

async function startServer() {
    try {
        await connectDB();
        app.use("/", router);

        app.listen(PORT, () => {
            console.log(`🚀 Server running at http://localhost:${PORT}`);
        });
    } catch (err) {
        console.error("❌ Failed to start server:", err);
    }
}

startServer();
