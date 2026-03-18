import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import useDebouncedValue from "../../hooks/useDebouncedValue";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "./style.scss";
import { useQueryFilteres } from "@/hooks/useQueryFilteres";

export const InputComponent = () => {
    const location = useLocation();
    const pathName = location.pathname;

    const { search, setSearch, resetFilters } = useQueryFilteres();

    const [query, setQuery] = useState(search);

    const debouncedQuery = useDebouncedValue(query, 500);

    useEffect(() => {
        setQuery(search);
    }, [search]);

    useEffect(() => {
        setSearch(debouncedQuery);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debouncedQuery]);

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };

    const handleResetFilteres = () => {
        resetFilters();
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
