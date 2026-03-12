import { getBooks, getOneBook } from "../service/books-service.js";

export async function getAllBooks(req, res, next) {
    try {
        const { limit } = req.params;
        const search = req.query.search || "";

        const data = await getBooks(limit, search);

        return res.json(data);
    } catch (error) {
        next(error);
    }
}

export async function getBookById(req, res, next) {
    try {
        const { id } = req.params;

        const data = await getOneBook(id);

        return res.json(data);
    } catch (error) {
        next(error);
    }
}
