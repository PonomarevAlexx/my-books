import { getDB } from "../db/mongoClient.js";
import { ObjectId } from "mongodb";

export async function getAllAuthors(req, res) {
    try {
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
    } catch (error) {
        console.log(error);
    }
}

export async function getAuthorById(req, res) {
    try {
        const { id } = req.params;

        const query = {
            "author._id": { $regex: id, $options: "i" },
        };

        const books = await getDB()
            .collection("books")
            .find(query)
            .project({ title: 1, author: 1, cover: 1, isRead: 1 })
            .toArray();
        const length = await getDB().collection("books").countDocuments(query);
        const author = await getDB()
            .collection("authors")
            .findOne({ _id: new ObjectId(id) });

        res.json({ author, books, length });
    } catch (error) {
        console.log(error);
    }
}
