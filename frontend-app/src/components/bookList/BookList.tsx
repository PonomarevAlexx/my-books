import { selectAllBooks } from "../../store/slices/books-slice";
import { useAppSelector } from "../../hooks/hooks";
import { BookItem } from "../bookItem/BookItem";
import "./style.css";

export const BookList: React.FC = () => {
    const bookList = useAppSelector(selectAllBooks);

    return (
        <div className="bookList">
            {bookList.map((el) => (
                <BookItem
                    key={el._id.$oid}
                    cover={el.cover}
                    title={el.title.map((el) => "«" + el + "»").join(", ")}
                    author={el.author[0].name}
                />
            ))}
        </div>
    );
};
