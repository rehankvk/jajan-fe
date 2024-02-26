import { jwtDecode } from "jwt-decode";

export const getUsername = (token) => {
    const decoded = jwtDecode(token)
    return decoded.username
}