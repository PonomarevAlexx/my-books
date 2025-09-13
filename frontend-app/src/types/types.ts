export type Status = {
    LOADING: "loading";
    RESOLVED: "resolved";
    REJECTED: "rejected";
};

export interface AuthorFromBook {
    name: string;
    _id: string;
}

export interface BookSeries {
    name: string;
    _id: string;
}

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

export interface Author {
    _id: string;
    name: string;
    works: Work[];
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
