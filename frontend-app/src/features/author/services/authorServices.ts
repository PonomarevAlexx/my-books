import $api from "@/http";
import type { FetchAuthorResponse } from "../model/types";

export async function getAuthor(id: string): Promise<FetchAuthorResponse> {
    const response = await $api.get<FetchAuthorResponse>(`/author/${id}`);

    return response.data;
}
