export interface State {
    searchQuery: string;
    limit: number;
    currentPage: "authors" | "books" | null;
    perPage: number;
}