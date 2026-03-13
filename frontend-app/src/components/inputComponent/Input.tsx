import { useLocation } from "react-router";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import useDebouncedValue from "../../hooks/useDebouncedValue";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "./style.scss";
import { resetSearchQueryAndLimit, setSearchQuery } from "../../features/filters/model/filtersSlice";
import { selectLimit, selectSearchQuery } from "@/features/filters/model/selectors";
import { fetchAuthors } from "@/features/authors/model/authorsThunk";
import { fetchBooks } from "@/features/books/model/booksThunks";

export const InputComponent = () => {
    const location = useLocation();
    const pathName = location.pathname;
    const dispatch = useAppDispatch();
    const searchQuery = useAppSelector(selectSearchQuery);
    const [query, setQuery] = useState("");
    const debouncedQuery = useDebouncedValue(query, 500);
    const limit = useAppSelector(selectLimit);

    useEffect(() => {
        dispatch(resetSearchQueryAndLimit());
        setQuery("");
    }, [dispatch, pathName]);

    useEffect(() => {
        dispatch(setSearchQuery(debouncedQuery));
    }, [dispatch, debouncedQuery]);

    useEffect(() => {
        if (pathName === "/books") {
            dispatch(fetchBooks({ searchQuery: searchQuery, limit }));
        } else if (pathName === "/authors") {
            dispatch(fetchAuthors({ searchQuery: searchQuery, limit }));
        }
    }, [dispatch, limit, searchQuery, pathName]);

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
                    <button type="button" className="InputComponent-clear" onClick={handleResetFilteres}>
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                )}
            </form>
        );
    }
};
