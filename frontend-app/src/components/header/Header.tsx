import { NavLink } from "react-router";
import "./style.css";
import { InputComponent } from "../inputComponent/Input";
import { useAppSelector } from "../../hooks/hooks";
import { selectCurrentPage } from "../../store/slices/filters-slice";

export const Header = () => {
    const currentPage = useAppSelector(selectCurrentPage);

    return (
        <div className="Header">
            <div className="Header-wrapper">
                <div className="Header-logo">
                    <NavLink className="Header-logo-link" to="/books">
                        My Books
                    </NavLink>
                </div>
                <InputComponent />
                <nav className="Header-nav">
                    <NavLink
                        className={currentPage === "books" ? "Header-nav-item active" : "Header-nav-item"}
                        to="/books"
                    >
                        Книги
                    </NavLink>
                    <NavLink
                        className={currentPage === "authors" ? "Header-nav-item active" : "Header-nav-item"}
                        to="/authors"
                    >
                        Авторы
                    </NavLink>
                    {/* <NavLink className="Header-nav-item" to="/books">
                        Серии
                    </NavLink> */}
                </nav>
            </div>
        </div>
    );
};
