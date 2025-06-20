export const CONFIG = {
    API_GATEWAY: process.env.API_GATEWAY_URL || "http://localhost:8888/api/v1",
}

export const API = {
    LOGIN: "/identity/auth/login",
    LOGOUT: "/identity/auth/logout",
    REGISTER: "/identity/auth/register",
    MY_INFO: "/identity/users/my-info",

    MY_POST: "/post/my-posts",
    CREATE_POST: "/post/create",
}
