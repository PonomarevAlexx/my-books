import { BookModel } from "../models/book-model.js";
import { AuthorModel } from "../models/author-model.js";
import { BookSeriesModel } from "../models/series-model.js";
import { ObjectId } from "mongodb";

export async function getBooks(limit, search) {
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

    const length = await BookModel.countDocuments(query);
    const books = await BookModel.find(query)
        .select("titles author cover")
        .populate("author", "name")
        .limit(Number(limit));

    return { length, books };
}

export async function getOneBook(id) {
    if (!ObjectId.isValid(id)) {
        return res.status(400).json({ error: "Invalid ID format" });
    }
    const book = await BookModel.findById(id).populate("bookSeries", "name").populate("author", "name");
    return book;
}
