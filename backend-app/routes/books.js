const express = require("express");
const { getDB } = require("../db/mongoClient");
const router = express.Router();

// Получить все книги
router.get("/", async (req, res) => {
    const books = await getDB().collection("books").find().toArray();
    res.json(books);
});

module.exports = router;
