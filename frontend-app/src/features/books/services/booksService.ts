import $api from "@/http";
import type { FetchBooksResponse } from "../model/types";

export async function getBooks(limit?: number, searchQuery?: string) {
    const response = await $api.get<FetchBooksResponse>(`/books/${limit}`, {
        params: {
            search: searchQuery,
        },
    });
    return response.data;
}
