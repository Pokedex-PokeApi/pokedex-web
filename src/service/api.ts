import axios from "axios";

export function api() {
    return axios.create({
        baseURL: "http://localhost:3333" //process.env.API_BASE_URL
    })
} 