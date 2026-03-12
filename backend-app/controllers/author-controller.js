import { getAuthors, getOneAuthor } from "../service/author-service.js";

export async function getAllAuthors(req, res) {
    try {
        const { limit } = req.params;
        const search = req.query.search || "";

        const data = await getAuthors(limit, search);

        res.json(data);
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
