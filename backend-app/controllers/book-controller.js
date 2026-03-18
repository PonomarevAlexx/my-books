import { getBooks, getOneBook } from "../service/books-service.js";

export async function getAllBooks(req, res, next) {
    try {
        const { limit, page, search } = req.query;
        const recordLimit = limit * page;

        const data = await getBooks(recordLimit, search);

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
