import type { Author } from "../../types/types";
import { ReadMoreDescription } from "../readMoreDescription/ReadMoreDescription";
import "./style.css";
import noPhoto from "../../img/noPhoto.png";
import BookList from "../bookList/BookList";
import { useAppSelector } from "../../hooks/hooks";
import { selectLength, selectListBooksOfAuthor } from "../../store/slices/author-slice";
import { Button } from "../button/Button";
import { useState } from "react";

interface AuthorInfo {
    author: Author;
}

const AuthorInfo: React.FC<AuthorInfo> = ({ author }) => {
    const bookList = useAppSelector(selectListBooksOfAuthor);
    const length = useAppSelector(selectLength);
    const bookListShort = bookList.slice(0, 4);

    const [isShowAll, setIsShowAll] = useState(false);

    const handleIsShow = () => {
        setIsShowAll(!isShowAll);
    };

    return (
        <div className="authorInfo">
            <h3 className="authorInfo-name">{author.name}</h3>
            <div className="authorInfo-row">
                <div className="authorInfo-img">
                    <img src={author.photo ? author.photo : noPhoto} alt={author.name} />
                </div>
                <div className="authorInfo-characteristics">
                    <h4>Характеристики</h4>
                    <div className="authorInfo-characteristics-item">
                        <div>Имя: </div>
                        <div className="authorInfo-characteristics-item-text">{author.name}</div>
                    </div>
                    <div className="authorInfo-characteristics-item">
                        <div>Место и дата рождения: </div>
                        <div className="authorInfo-characteristics-item-text">{author.birth}</div>
                    </div>
                    <div className="authorInfo-characteristics-item">
                        <div>Место и дата смерти: </div>
                        <div className="authorInfo-characteristics-item-text">{author.death}</div>
                    </div>
                    <div className="authorInfo-characteristics-item">
                        <div>Страна: </div>
                        <div className="authorInfo-characteristics-item-text">{author.country}</div>
                    </div>
                    <div className="authorInfo-characteristics-item">
                        <div>Язык: </div>
                        <div className="authorInfo-characteristics-item-text">{author.language}</div>
                    </div>
                </div>
            </div>
            <div className="authorInfo-info">
                <h4>Об Авторе</h4>
                <ReadMoreDescription description={author.info} />
            </div>
            <BookList bookList={isShowAll && length > 4 ? bookList : bookListShort} />
            {length > 4 && (
                <Button
                    style="Button Button_center"
                    text={isShowAll ? "Показать меньше" : "Показать больше"}
                    handler={handleIsShow}
                />
            )}
        </div>
    );
};

export default AuthorInfo;
