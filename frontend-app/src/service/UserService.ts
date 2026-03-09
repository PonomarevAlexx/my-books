import $api from "@/http";
import type { IUser } from "@/models/IUser";

export async function fetchUsers(): Promise<IUser[]> {
    return $api.get("/users");
}
