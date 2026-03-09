import $api from "@/http";
import type { AuthResponse } from "@/models/response/AuthResponse";
import type { AxiosResponse } from "axios";

export async function login(email: string, password: string): Promise<AuthResponse> {
    return $api.post<AuthResponse>("/login", { email, password }).then((response) => response.data);
}

export async function registration(email: string, password: string): Promise<AuthResponse> {
    return $api.post<AuthResponse>("/registration", { email, password }).then((response) => response.data);
}

export async function logout(): Promise<AxiosResponse> {
    return $api.post("/logout");
}
