import { BookItem } from "../bookItem/BookItem";
import type { BookShort } from "../../types/types";
import "./style.css";

interface BookList {
    bookList: BookShort[];
}

const BookList: React.FC<BookList> = ({ bookList }) => {
    return (
        <div className="bookList">
            {bookList.map((el) => (
                <BookItem
                    id={el._id}
                    key={el._id}
                    cover={el.cover}
                    title={el.title.map((el) => "«" + el + "»").join(", ")}
                    author={el.author[0].name}
                    isRead={el.isRead}
                />
            ))}
        </div>
    );
};

export default BookList;
