export interface State {
    authorsList: Authors[];
    status: string;
    error: string;
    length: number;
    isPagination: boolean;
}

export interface Authors {
    _id: string;
    name: string;
    photo: string;
}

export interface FetchAuthorsResponse {
    authors: Authors[];
    length: number;
}

export interface FetchAuthorsArgs {
    searchQuery?: string;
    limit?: number;
}
