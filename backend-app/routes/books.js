const express = require("express");
const { getDB } = require("../db/mongoClient");
const router = express.Router();

// Получить все книги
router.get("/", async (req, res) => {
    const books = await getDB().collection("books").find().project({ title: 1, author: 1, cover: 1 }).toArray();
    res.json(books);
});

module.exports = router;
