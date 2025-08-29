export type Status = {
    LOADING: "loading";
    RESOLVED: "resolved";
    REJECTED: "rejected";
};

export interface Author {
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
    author: Author[];
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
