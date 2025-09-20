import { useLocation } from "react-router";
import "./style.css";
import { useAppDispatch } from "../../hooks/hooks";
import { useState } from "react";
import { fetchBooks } from "../../store/slices/books-slice";

export const InputComponent = () => {
    const location = useLocation();
    const pathName = location.pathname;
    const dispatch = useAppDispatch();
    const [query, setQuery] = useState("");

    const search = (text: string) => {
        if (text.trim()) {
            if (pathName === "/books") {
                dispatch(fetchBooks(text));
                setQuery("");
            }
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };

    if (pathName === "/books" || pathName === "/authors") {
        return (
            <div className="InputComponent" onSubmit={() => search(query)}>
                <input
                    className="InputComponent-input"
                    placeholder="Введите автора или название произведения"
                    type="text"
                    value={query}
                    onChange={handleChange}
                />
                <button onClick={() => search(query)} className="InputComponent-btn">
                    Поиск
                </button>
            </div>
        );
    }
};
