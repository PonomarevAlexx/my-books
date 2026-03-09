import $api from "@/http";
import type { FetchAuthorsResponse } from "../model/types";

export async function getAuthors(limit?: number, searchQuery?: string): Promise<FetchAuthorsResponse> {
    const response = await $api.get<FetchAuthorsResponse>(`/authors/${limit}?search=${searchQuery}`);

    return response.data;
}
