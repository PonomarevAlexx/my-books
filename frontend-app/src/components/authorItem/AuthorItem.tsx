import type React from "react";
import { Link } from "react-router";
import "./style.css";
import noPhoto from "../../img/noPhoto.png";

interface AuthorItem {
    id: string;
    cover: string;
    name: string;
}

export const AuthorItem: React.FC<AuthorItem> = ({ id, cover, name }) => {
    return (
        <Link className="AuthorItem-link" to={`/authors/${id}`}>
            <div className="AuthorItem">
                <div className="AuthorItem-image">
                    <img src={cover ? cover : noPhoto} alt={name} loading="lazy" />
                </div>
                <div className="AuthorItem-text">
                    <p className="AuthorItem-name">{name}</p>
                </div>
            </div>
        </Link>
    );
};
