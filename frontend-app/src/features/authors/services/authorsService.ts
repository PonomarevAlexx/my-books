import $api from "@/http";
import type { FetchAuthorsResponse } from "../model/types";

export async function getAuthors(limit?: number, searchQuery?: string, page?: number): Promise<FetchAuthorsResponse> {
    const response = await $api.get<FetchAuthorsResponse>(`/authors/`, {
        params: {
            limit: limit,
            page: page,
            search: searchQuery,
        },
    });

    return response.data;
}
