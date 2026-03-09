import { NavLink } from "react-router";
import "./style.scss";
import { InputComponent } from "../inputComponent/Input";
import { useAppSelector } from "../../hooks/hooks";
import { selectCurrentPage } from "@/features/filters/model/selectors";
import { useState } from "react";

export const Header = () => {
    const currentPage = useAppSelector(selectCurrentPage);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="Header">
            <div className="Header-wrapper">
                <div className="Header-logo">
                    <NavLink className="Header-logo-link" to="/books">
                        My Books
                    </NavLink>
                </div>
                <InputComponent />
                <nav className={!isOpen ? "Header-nav" : "Header-nav Header-nav-active"}>
                    <NavLink
                        onClick={() => setIsOpen(false)}
                        className={currentPage === "books" ? "Header-nav-item active" : "Header-nav-item"}
                        to="/books"
                    >
                        Книги
                    </NavLink>
                    <NavLink
                        onClick={() => setIsOpen(false)}
                        className={currentPage === "authors" ? "Header-nav-item active" : "Header-nav-item"}
                        to="/authors"
                    >
                        Авторы
                    </NavLink>
                    {/* <NavLink className="Header-nav-item" to="/books">
                        Серии
                    </NavLink> */}
                </nav>
                <div className="Header-burgerBtn" onClick={() => setIsOpen(!isOpen)}>
                    <span />
                </div>
            </div>
        </div>
    );
};
