import { useLocation } from "react-router";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import useDebouncedValue from "../../hooks/useDebouncedValue";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "./style.css";
import {
    resetSearchQueryAndLimit,
    selectCurrentPage,
    selectLimit,
    selectSearchQuery,
    setCurrentPage,
    setSearchQuery,
} from "../../store/slices/filters-slice";
import { fetchAuthors } from "../../store/slices/authors-slice";
import { fetchBooks } from "../../store/slices/books-slice";

export const InputComponent = () => {
    const location = useLocation();
    const pathName = location.pathname;
    const dispatch = useAppDispatch();
    const searchQuery = useAppSelector(selectSearchQuery);
    const [query, setQuery] = useState("");
    const debouncedQuery = useDebouncedValue(query, 500);
    const limit = useAppSelector(selectLimit);
    const currentPage = useAppSelector(selectCurrentPage);

    useEffect(() => {
        dispatch(resetSearchQueryAndLimit());
        setQuery("");

        if (pathName === "/books") {
            dispatch(setCurrentPage("books"));
        } else if (pathName === "/authors") {
            dispatch(setCurrentPage("authors"));
        } else {
            dispatch(setCurrentPage(null));
        }
    }, [dispatch, pathName]);

    useEffect(() => {
        dispatch(setSearchQuery(debouncedQuery));
    }, [dispatch, debouncedQuery]);

    useEffect(() => {
        if (currentPage === "books") {
            dispatch(fetchBooks({ searchQuery: searchQuery, limit }));
        } else if (currentPage === "authors") {
            dispatch(fetchAuthors({ searchQuery: searchQuery, limit }));
        }
    }, [dispatch, limit, searchQuery, currentPage]);

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };

    const handleResetFilteres = () => {
        dispatch(resetSearchQueryAndLimit());
        setQuery("");
    };

    if (pathName === "/books" || pathName === "/authors") {
        return (
            <form className="InputComponent" onSubmit={handleSearch}>
                <input
                    className="InputComponent-input"
                    placeholder={
                        pathName === "/books" ? "Введите имя автора или название произведения" : "Введите имя автора"
                    }
                    type="text"
                    value={query}
                    onChange={handleChange}
                />
                {query && (
                    <button className="InputComponent-clear" onClick={handleResetFilteres}>
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                )}
            </form>
        );
    }
};
