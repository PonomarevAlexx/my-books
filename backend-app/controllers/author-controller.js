import { getAuthors, getOneAuthor } from "../service/author-service.js";

export async function getAllAuthors(req, res) {
    try {
        const { limit, search, page } = req.query;
        const recordLimit = limit * page;

        const data = await getAuthors(recordLimit, search);

        return res.json(data);
    } catch (error) {
        console.log(error);
    }
}

export async function getAuthorById(req, res) {
    try {
        const { id } = req.params;

        const data = await getOneAuthor(id);

        res.json(data);
    } catch (error) {
        console.log(error);
    }
}
