import { AuthorModel } from "../models/author-model.js";
import { BookModel } from "../models/book-model.js";
import { BookSeriesModel } from "../models/series-model.js";
import { ObjectId } from "mongodb";

export async function getAuthors(limit, search) {
    let query = {};

    if (search) {
        query = {
            name: { $regex: search, $options: "i" },
        };
    }

    const length = await AuthorModel.countDocuments(query);
    const authors = await AuthorModel.find(query).select("name photo").limit(Number(limit));
    return { length, authors };
}

export async function getOneAuthor(id) {
    if (!ObjectId.isValid(id)) {
        return res.status(400).json({ error: "Invalid ID format" });
    }

    const books = await BookModel.find({ author: id }).select("titles author cover").populate("author", "name");
    const length = await BookModel.find({ author: id }).countDocuments();
    const author = await AuthorModel.findById(id);

    return { books, length, author };
}
