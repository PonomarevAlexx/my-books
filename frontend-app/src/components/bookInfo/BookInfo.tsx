import type { Book } from "../../types/types";
import "./style.css";

interface BookInfo {
    book: Book;
}

export const BookInfo: React.FC<BookInfo> = ({ book }) => {
    const author = book.author.map((el) => el.name).join(", ");
    const title = book.title.join(", ");
    const bookSeries = book.bookSeries.name;
    const description = book.description.split("\n").map((el) => <p>{el}</p>);

    return (
        <div className="bookInfo">
            <div>
                <div className="bookInfo-characteristic-author">{author}</div>
                <div>{title}</div>
            </div>
            <div className="bookInfo-row">
                <div className="bookInfo-img">
                    <img src={book.cover} alt={title} />
                </div>
                <div className="bookInfo-characteristic">
                    <div>Charecteristic</div>
                    <div>{book.ISBN}</div>
                    <div>{bookSeries}</div>
                    <div>{book.publisher}</div>
                    <div>{book.quantityOfPages}</div>
                    <div>{book.year}</div>
                    <div>{book.bookBinding}</div>
                    <div>{book.weight}</div>
                    <div>{book.section}</div>
                    <div>{book.paper}</div>
                    <div>{book.quantityOfPages}</div>
                </div>
            </div>
            <div className="bookInfo-about">{description}</div>
        </div>
    );
};
