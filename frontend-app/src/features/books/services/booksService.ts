import $api from "@/http";
import type { FetchBooksResponse } from "../model/types";

export async function getBooks(limit?: number, searchQuery?: string, page?: number) {
    const response = await $api.get<FetchBooksResponse>(`/books/`, {
        params: {
            search: searchQuery,
            page: page,
            limit: limit
        },
    });
    return response.data;
}
