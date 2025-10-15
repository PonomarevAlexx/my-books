import { Link } from "react-router";
import imgNotCover from "../../img/Not_image_book.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

type Book = {
    id: string;
    cover: string;
    title: string;
    author: string;
    isRead: boolean;
};

export const BookItem: React.FC<Book> = ({ cover, title, author, id, isRead }) => {
    return (
        <Link to={`/book/${id}`}>
            <div className="bookItem">
                {isRead && (
                    <div className="bookItem-icon">
                        <FontAwesomeIcon icon={faCircleCheck} />
                    </div>
                )}
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
