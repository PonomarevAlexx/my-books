import { NavLink } from "react-router";
import "./style.css";
import { InputComponent } from "../inputComponent/Input";

export const Header = () => {
    return (
        <div className="Header">
            <div className="Header-wrapper">
                <div className="Header-logo">
                    <NavLink className="Header-logo-link" to="/books">
                        MyLibrary
                    </NavLink>
                </div>
                <InputComponent />
                <nav className="Header-nav">
                    <NavLink className="Header-nav-item" to="/books">
                        Книги
                    </NavLink>
                    <NavLink className="Header-nav-item" to="/authors">
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
