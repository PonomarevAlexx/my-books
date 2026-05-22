import { getAuthors, getOneAuthor } from "../service/author-service.js";

export async function getAllAuthors(req, res, next) {
    try {
        const { limit, search, page } = req.query;
        const recordLimit = limit * page;

        const data = await getAuthors(recordLimit, search);

        return res.json(data);
    } catch (error) {
        next(error);
    }
}

export async function getAuthorById(req, res, next) {
    try {
        const { id } = req.params;

        const data = await getOneAuthor(id);

        return res.json(data);
    } catch (error) {
        next(error);
    }
}
