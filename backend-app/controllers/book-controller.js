import { getDB } from "../db/mongoClient.js";
import { ObjectId } from "mongodb";

export async function getAllBooks(req, res) {
    try {
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
    } catch (error) {
        console.log(error);
    }
}

export async function getBookById(req, res) {
    try {
        const { id } = req.params;

        if (!ObjectId.isValid(id)) {
            return res.status(400).json({ error: "Invalid ID format" });
        }

        const book = await getDB()
            .collection("books")
            .findOne({ _id: new ObjectId(id) });
        res.json(book);
    } catch (error) {
        console.log(error);
    }
}
