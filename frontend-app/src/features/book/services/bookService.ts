import $api from "@/http";
import type { Book } from "../model/types";

export async function getBook(id: string): Promise<Book> {
    const response = await $api.get<Book>(`/book/${id}`);

    return response.data;
}
