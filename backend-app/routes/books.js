const express = require("express");
const { getDB } = require("../db/mongoClient");
const { ObjectId } = require("mongodb");
const router = express.Router();

// Получить все книги
router.get("/books", async (req, res) => {
    const books = await getDB().collection("books").find().project({ title: 1, author: 1, cover: 1 }).toArray();
    res.json(books);
});

// Получить книгу по ID
router.get("/books/:id", async (req, res) => {
    const { id } = req.params;

    if (!ObjectId.isValid(id)) {
        return res.status(400).json({ error: "Invalid ID format" });
    }

    const book = await getDB()
        .collection("books")
        .findOne({ _id: new ObjectId(id) });
    res.json(book);
});

// Получить всех авторов
router.get("/authors", async (req, res) => {
    const authors = await getDB().collection("authors").find().project({ name: 1, photo: 1 }).toArray();
    res.json(authors);
});

module.exports = router;
