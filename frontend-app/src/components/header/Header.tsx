import { NavLink } from "react-router";
import "./style.css";

export const Header = () => {
    return (
        <div className="Header">
            <div className="Header-wrapper">
                <div className="Header-logo">
                    <NavLink className="Header-logo-link" to="/books">
                        MyLibrary
                    </NavLink>
                </div>
                <nav className="Header-nav">
                    <NavLink className="Header-nav-item" to="/books">
                        Книги
                    </NavLink>
                    <NavLink className="Header-nav-item" to="/books">
                        Авторы
                    </NavLink>
                    <NavLink className="Header-nav-item" to="/books">
                        Серии
                    </NavLink>
                </nav>
            </div>
        </div>
    );
};
