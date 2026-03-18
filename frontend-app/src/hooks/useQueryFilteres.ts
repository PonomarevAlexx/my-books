import { useCallback } from "react";
import { useSearchParams } from "react-router-dom";

export function useQueryFilteres() {
    const [searchParams, setSearchParams] = useSearchParams();

    const search = searchParams.get("search") || "";
    const limit = Number(searchParams.get("limit") || 20);
    const page = Number(searchParams.get("page") || 1);

    const getSearchParams = useCallback(() => Object.fromEntries(searchParams.entries()), [searchParams]);

    // Устанавливаем поисковый запрос в URL
    const setSearch = useCallback(
        (value: string): void => {
            const params = getSearchParams();

            if (value) {
                params.search = value;
            } else {
                delete params.search;
            }
            params.page = "1";
            params.limit = "20";

            setSearchParams(params);
        },
        [getSearchParams, setSearchParams],
    );

    // Устанавливаем лимит в URL из селектора
    const setLimit = useCallback(
        (value: number): void => {
            const params = getSearchParams();
            params.limit = String(value);
            params.page = "1";
            setSearchParams(params);
        },
        [getSearchParams, setSearchParams],
    );

    // Увеличиваем страницу в URL после нажатия на кнопку ЕЩЕ
    const nextPage = useCallback((): void => {
        const params = getSearchParams();
        const currentPage = Number(params.page) || 1;
        params.page = String(currentPage + 1);
        setSearchParams(params);
    }, [getSearchParams, setSearchParams]);

    // Очищаем поисковый запрос
    const resetFilters = useCallback((): void => {
        const params = getSearchParams();
        delete params.search;
        params.limit = "20";
        params.page = "1";
        setSearchParams(params);
    }, [getSearchParams, setSearchParams]);

    return {
        search,
        limit,
        page,
        setSearch,
        setLimit,
        nextPage,
        resetFilters,
    };
}
