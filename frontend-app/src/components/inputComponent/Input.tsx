import { useLocation } from "react-router";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import useDebouncedValue from "../../hooks/useDebouncedValue";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "./style.css";
import {
    resetSearchQueryAndLimit,
    selectLimit,
    selectSearchQuery,
    setSearchQuery,
} from "../../store/slices/filters-slice";
import { fetchAuthors } from "../../store/slices/authors-slice";
import { fetchBooks } from "../../store/slices/books-slice";

export const InputComponent = () => {
    const location = useLocation();
    const pathName = location.pathname;
    const dispatch = useAppDispatch();
    const searchQuery = useAppSelector(selectSearchQuery);
    const debouncedQuery = useDebouncedValue(searchQuery, 500);
    const limit = useAppSelector(selectLimit);

    useEffect(() => {
        dispatch(resetSearchQueryAndLimit());
    }, [pathName, dispatch]);

    useEffect(() => {
        if (pathName === "/books") {
            dispatch(fetchBooks({ searchQuery: debouncedQuery, limit }));
        } else if (pathName === "/authors") {
            dispatch(fetchAuthors({ searchQuery: debouncedQuery, limit }));
        }
    }, [debouncedQuery, dispatch, limit, pathName]);

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearchQuery(e.target.value));
    };

    const handleResetFilteres = () => {
        dispatch(resetSearchQueryAndLimit());
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
                    value={searchQuery}
                    onChange={handleChange}
                />
                {searchQuery && (
                    <button className="InputComponent-clear" onClick={handleResetFilteres}>
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                )}
            </form>
        );
    }
};
