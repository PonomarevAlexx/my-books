const express = require("express");
const cors = require("cors");
const { connectDB } = require("./db/mongoClient");
const booksRouter = require("./routes/books");

const app = express();
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

const PORT = process.env.PORT || 3000;

async function startServer() {
    try {
        await connectDB();
        app.use("/api/books", booksRouter);

        app.listen(PORT, () => {
            console.log(`🚀 Server running at http://localhost:${PORT}/api/books`);
        });
    } catch (err) {
        console.error("❌ Failed to start server:", err);
    }
}

startServer();
