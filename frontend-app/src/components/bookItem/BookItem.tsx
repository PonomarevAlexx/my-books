import { Link } from "react-router";
import "./style.css";
import imgNotCover from "../../img/Not_image_book.png";

type Book = {
    id: string;
    cover: string;
    title: string;
    author: string;
};

export const BookItem: React.FC<Book> = ({ cover, title, author, id }) => {
    return (
        <Link to={`/books/${id}`}>
            <div className="bookItem">
                <div className="bookItem-img">
                    <img src={cover || imgNotCover} alt={title} loading="lazy"></img>
                </div>
                <div className="bookItem-text">
                    <p className="bookItem-author">{author}</p>
                    <p className="bookItem-title">{title}</p>
                </div>
            </div>
        </Link>
    );
};
