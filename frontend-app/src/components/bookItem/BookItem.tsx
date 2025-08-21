import "./style.css";

type Book = {
    cover: string;
    title: string;
    author: string;
};

export const BookItem: React.FC<Book> = ({ cover, title, author }: Book) => {
    return (
        <div className="bookItem">
            <div className="bookItem-img">
                <img src={cover} alt={title}></img>
            </div>
            <div className="bookItem-text">
                <p className="bookItem-author">{author}</p>
                <p className="bookItem-title">{title}</p>
            </div>
        </div>
    );
};