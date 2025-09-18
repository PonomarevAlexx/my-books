import type { Author } from "../../types/types";
import { ReadMoreDescription } from "../readMoreDescription/ReadMoreDescription";
import "./style.css";

interface AuthorInfo {
    author: Author;
}

const AuthorInfo: React.FC<AuthorInfo> = ({ author }) => {
    return (
        <div className="authorInfo">
            <h3 className="authorInfo-name">{author.name}</h3>
            <div className="authorInfo-row">
                <div className="authorInfo-img">
                    <img src={author.photo} alt={author.name} />
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
        </div>
    );
};

export default AuthorInfo;
