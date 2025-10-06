// import { useLocation, useSearchParams } from "react-router";
import { useLocation } from "react-router";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../../hooks/hooks";
import { setSerchQuery } from "../../store/slices/books-slice";
import useDebouncedValue from "../../hooks/useDebouncedValue";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

export const InputComponent = () => {
    const location = useLocation();
    const pathName = location.pathname;
    const dispatch = useAppDispatch();
    const [query, setQuery] = useState("");
    const debouncedQuery = useDebouncedValue(query, 500);
    // const [searchParams, setSearchParams] = useSearchParams();
    // const limit = searchParams.get("limit") || "16";

    // useEffect(() => {
    //     if (debouncedQuery) {
    //         setSearchParams({ search: debouncedQuery, limit });
    //     } else {
    //         setSearchParams({ limit }); // если строка пустая
    //     }
    // }, [debouncedQuery, limit, setSearchParams]);

    useEffect(() => {
        if (pathName === "/books") {
            dispatch(setSerchQuery(debouncedQuery.trim()));
        }
    }, [debouncedQuery, dispatch, pathName]);

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
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
                    <button className="InputComponent-clear" onClick={() => setQuery("")}>
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                )}
            </form>
        );
    }
};
