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
