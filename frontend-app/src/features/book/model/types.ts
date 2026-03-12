import type { AuthorFromBook, BookSeries } from "@/types/types";

export type State = {
    book: Book | null;
    status: string;
    error: string;
};

export interface Book {
    _id: string;
    titles: string[];
    author: AuthorFromBook[];
    year: number;
    bookSeries: BookSeries;
    quantityOfPages: number;
    publisher: string;
    ISBN: string;
    cover: string;
    section: string;
    bookBinding: string;
    paper: string;
    weight: number;
    description: string;
}

export interface FetchBookArgs {
    id: string;
}
