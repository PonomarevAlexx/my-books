import { selectAllBooks } from "../../store/slices/books-slice";
import { useAppSelector } from "../../hooks/hooks";
import { BookItem } from "../bookItem/BookItem";
import "./style.css";

const BookList: React.FC = () => {
    const bookList = useAppSelector(selectAllBooks);

    return (
        <div className="bookList">
            {bookList.map((el) => (
                <BookItem
                    id={el._id}
                    key={el._id}
                    cover={el.cover}
                    title={el.title.map((el) => "«" + el + "»").join(", ")}
                    author={el.author[0].name}
                />
            ))}
        </div>
    );
};

export default BookList;
