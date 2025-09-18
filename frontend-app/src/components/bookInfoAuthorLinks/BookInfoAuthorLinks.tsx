import type { AuthorFromBook } from "../../types/types";
import { Link } from "react-router";

interface AuthorLinks {
    author: AuthorFromBook[];
}

export const BookInfoAuthorLinks: React.FC<AuthorLinks> = ({ author }) => {
    return author.map((el, i) => (
        <span key={el._id || i}>
            {el._id ? <Link to={`/authors/${el._id}`}>{el.name}</Link> : el.name}
            {i < author.length - 1 && ",\u00A0"}
        </span>
    ));
};
