import { NavLink } from "react-router-dom";
import "./style.scss";
import { Search } from "../search/Search";
import { useState } from "react";

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="Header">
            <div className="Header-wrapper">
                <div className="Header-logo">
                    <NavLink className="Header-logo-link" to="/books">
                        My Books
                    </NavLink>
                </div>
                <Search />
                <nav className={!isOpen ? "Header-nav" : "Header-nav Header-nav-active"}>
                    <NavLink
                        onClick={() => {
                            setIsOpen(false);
                        }}
                        className={({ isActive }) => (isActive ? "Header-nav-item active" : "Header-nav-item")}
                        to="/books"
                    >
                        Книги
                    </NavLink>
                    <NavLink
                        onClick={() => {
                            setIsOpen(false);
                        }}
                        className={({ isActive }) => (isActive ? "Header-nav-item active" : "Header-nav-item")}
                        to="/authors"
                    >
                        Авторы
                    </NavLink>
                    <NavLink
                        onClick={() => {
                            setIsOpen(false);
                        }}
                        className={({ isActive }) => (isActive ? "Header-nav-item active" : "Header-nav-item")}
                        to="/login"
                    >
                        Вход
                    </NavLink>
                </nav>
                <div className="Header-burgerBtn" onClick={() => setIsOpen(!isOpen)}>
                    <span />
                </div>
            </div>
        </div>
    );
};
