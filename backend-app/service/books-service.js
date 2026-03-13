import { BookModel } from "../models/book-model.js";
import { AuthorModel } from "../models/author-model.js";
import { BookSeriesModel } from "../models/series-model.js";
import { ObjectId } from "mongodb";

export async function getBooks(limit, search) {
    const pipeline = [
        {
            $lookup: {
                from: "authors",
                localField: "author",
                foreignField: "_id",
                as: "author",
            },
        },
    ];

    if (search) {
        pipeline.push({
            $match: {
                $or: [
                    { titles: { $elemMatch: { $regex: search, $options: "i" } } },
                    { "author.name": { $regex: search, $options: "i" } },
                ],
            },
        });
    }

    pipeline.push({
        $facet: {
            books: [
                {
                    $project: {
                        titles: 1,
                        cover: 1,
                        author: { name: 1 },
                    },
                },
                { $limit: Number(limit) },
            ],
            total: [{ $count: "count" }],
        },
    });

    const result = await BookModel.aggregate(pipeline);
    const books = result[0].books;
    const length = result[0].total[0]?.count || 0;

    return { books, length };
}

export async function getOneBook(id) {
    if (!ObjectId.isValid(id)) {
        return res.status(400).json({ error: "Invalid ID format" });
    }
    const book = await BookModel.findById(id).populate("bookSeries", "name").populate("author", "name");
    return book;
}
