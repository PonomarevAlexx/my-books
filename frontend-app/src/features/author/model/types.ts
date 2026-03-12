import type { BookShort } from "@/features/books/model/types";

export interface State {
    author: Author | null;
    status: string;
    error: string;
    length: number;
    booksListAuthor: BookShort[];
}

export interface Author {
    _id: string;
    name: string;
    birth: string;
    death: string;
    country: string;
    language: string;
    photo: string;
    info: string;
}

export interface Work {
    title: string;
    _id: string;
}

export interface FetchAuthorArgs {
    id: string;
}

export interface FetchAuthorResponse {
    author: Author;
    length: number;
    books: BookShort[]
}
