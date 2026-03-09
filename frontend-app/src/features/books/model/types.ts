import type { Author } from "@/types/types";

export interface BookShort {
    _id: string;
    title: string[];
    author: Author[];
    cover: string;
    isRead: boolean;
}

export type State = {
    bookList: BookShort[];
    status: string;
    error: string;
    length: number;
    isPagination: boolean;
};

export interface FetchBookArgs {
    searchQuery?: string;
    limit?: number;
}

export interface FetchBooksResponse {
    books: BookShort[];
    length: number;
}
