import $api from "@/http";
import type { IUser } from "@/features/user/model/types";

export async function fetchUsers(): Promise<IUser[]> {
    return $api.get("/users");
}
