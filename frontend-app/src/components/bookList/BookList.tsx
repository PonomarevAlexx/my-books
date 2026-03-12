import { BookItem } from "../bookItem/BookItem";
import type { BookShort } from "@/features/books/model/types";
import "./style.scss";

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
                    title={el.titles.map((el) => "«" + el + "»").join(", ")}
                    author={el.author[0].name}
                />
            ))}
        </div>
    );
};

export default BookList;
