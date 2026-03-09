import type { AuthorFromBook, BookSeries } from "@/types/types";

export type State = {
    book: Book | null;
    status: string;
    error: string;
};

export interface Book {
    _id: string;
    title: string[];
    author: AuthorFromBook[];
    year: number;
    bookSeries: BookSeries;
    quantityOfPages: number;
    publisher: string;
    ISBN: string;
    cover: string;
    isRead: boolean;
    section: string;
    bookBinding: string;
    paper: string;
    weight: number;
    description: string;
}

export interface FetchBookArgs {
    id: string;
}
