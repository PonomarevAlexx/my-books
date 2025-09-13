import type { Author } from "../../types/types";
import "./style.css";

interface AuthorInfo {
    author: Author;
}

const AuthorInfo: React.FC<AuthorInfo> = ({ author }) => {
    const info = author.info.split("\n").map((el, i) => <p key={i}>{el}</p>);

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
                <div>{info}</div>
            </div>
        </div>
    );
};

export default AuthorInfo;
