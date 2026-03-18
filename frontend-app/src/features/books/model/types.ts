export interface BookShort {
    _id: string;
    titles: string[];
    author: Author[];
    cover: string;
}

interface Author {
    id: string;
    name: string;
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
    page?: number;
}

export interface FetchBooksResponse {
    books: BookShort[];
    length: number;
}
