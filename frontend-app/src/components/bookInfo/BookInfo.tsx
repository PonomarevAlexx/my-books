import type { Book } from "../../types/types";
import "./style.css";
import imgNotCover from "../../img/Not_image_book.png";
import { BookInfoAuthorLinks } from "../bookInfoAuthorLinks/BookInfoAuthorLinks";
import { ReadMoreDescription } from "../readMoreDescription/ReadMoreDescription";
interface BookInfo {
    book: Book;
}

const BookInfo: React.FC<BookInfo> = ({ book }) => {
    const firstAuthor = book.author[0].name;
    const title = book.title.map((el) => `"${el}"`).join(", ");
    const bookSeries = book.bookSeries.name;

    return (
        <div className="bookInfo">
            <h3 className="bookInfo-title">{`${firstAuthor}: ${title}`}</h3>
            <div className="bookInfo-row">
                <div className="bookInfo-img">
                    <img src={book.cover || imgNotCover} alt={title} />
                </div>
                <div className="bookInfo-characteristic">
                    <h4>Характеристики</h4>
                    <div className="bookInfo-characteristic-item">
                        <div>Автор:</div>
                        <div className="bookInfo-characteristic-item-text">
                            <div className="bookInfo-characteristic-links">
                                {<BookInfoAuthorLinks author={book.author} />}
                            </div>
                        </div>
                    </div>
                    <div className="bookInfo-characteristic-item">
                        <div>Раздел:</div>
                        <div className="bookInfo-characteristic-item-text">{book.section}</div>
                    </div>
                    <div className="bookInfo-characteristic-item">
                        <div>Серия:</div>
                        <div className="bookInfo-characteristic-item-text">{bookSeries}</div>
                    </div>
                    <div className="bookInfo-characteristic-item">
                        <div>Издатель:</div>
                        <div className="bookInfo-characteristic-item-text">{book.publisher}</div>
                    </div>
                    <div className="bookInfo-characteristic-item">
                        <div>Год:</div>
                        <div className="bookInfo-characteristic-item-text">{book.year}</div>
                    </div>
                    <div className="bookInfo-characteristic-item">
                        <div>Количество страциц:</div>
                        <div className="bookInfo-characteristic-item-text">{book.quantityOfPages}</div>
                    </div>
                    <div className="bookInfo-characteristic-item">
                        <div>Переплет:</div>
                        <div className="bookInfo-characteristic-item-text">{book.bookBinding}</div>
                    </div>

                    <div className="bookInfo-characteristic-item">
                        <div>Бумага:</div>
                        <div className="bookInfo-characteristic-item-text">{book.paper}</div>
                    </div>
                    <div className="bookInfo-characteristic-item">
                        <div>Вес:</div>
                        <div className="bookInfo-characteristic-item-text">{`${book.weight} кг`}</div>
                    </div>
                    <div className="bookInfo-characteristic-item">
                        <div>ISBN:</div>
                        <div className="bookInfo-characteristic-item-text">{book.ISBN}</div>
                    </div>
                </div>
            </div>
            <div className="bookInfo-about">
                <h4>О книге</h4>
                <ReadMoreDescription description={book.description} />
            </div>
        </div>
    );
};

export default BookInfo;
