import { api } from "./api";

export function login() {
    return api.get("/login");
}