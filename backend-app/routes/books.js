const express = require("express");
const { getDB } = require("../db/mongoClient");
const { ObjectId } = require("mongodb");
const router = express.Router();

// Получить все книги
router.get("/books/:limit", async (req, res) => {
    const { limit } = req.params;
    const search = req.query.search || "";
    let query = {};

    if (search) {
        query = {
            $or: [
                { title: { $regex: search, $options: "i" } },
                { "author.name": { $regex: search, $options: "i" } },
                // { "bookSeries.name": { $regex: search, $options: "i" } },
            ],
        };
    }

    const length = await getDB().collection("books").countDocuments(query);
    const books = await getDB()
        .collection("books")
        .find(query)
        .project({ title: 1, author: 1, cover: 1, isRead: 1 })
        .limit(Number(limit))
        .toArray();

    res.json({ books, length });
});

// Получить книгу по ID
router.get("/book/:id", async (req, res) => {
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
router.get("/authors/:limit", async (req, res) => {
    const { limit } = req.params;
    const search = req.query.search || "";
    let query = {};

    if (search) {
        query = {
            name: { $regex: search, $options: "i" },
        };
    }

    const length = await getDB().collection("authors").countDocuments(query);
    const authors = await getDB()
        .collection("authors")
        .find(query)
        .project({ name: 1, photo: 1 })
        .limit(Number(limit))
        .toArray();

    res.json({ length, authors });
});

// Получить автора по ID
router.get("/author/:id", async (req, res) => {
    const { id } = req.params;

    const query = {
        "author._id": { $regex: id, $options: "i" },
    };

    const books = await getDB().collection("books").find(query).project({ title: 1, author: 1, cover: 1 }).toArray();
    const length = await getDB().collection("books").countDocuments(query);
    const author = await getDB()
        .collection("authors")
        .findOne({ _id: new ObjectId(id) });

    res.json({ author, books, length });
});

module.exports = router;
