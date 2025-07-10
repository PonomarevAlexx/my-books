const express = require("express");
const router = express.Router();
const { getDB } = require("../db/mongoClient");

// Получить все книги
router.get("/", async (req, res) => {
    const books = await getDB().collection("books").find().toArray();
    res.json(books);
});

module.exports = router;
