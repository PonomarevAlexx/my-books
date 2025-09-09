import type React from "react";
import "./style.css";
import { Link } from "react-router";

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
                    <img src={cover} alt={name} />
                </div>
                <div className="AuthorItem-text">
                    <p className="AuthorItem-name">{name}</p>
                </div>
            </div>
        </Link>
    );
};
