import axios from "axios";

const api = axios.create({
    baseURL: "https://ai-interview-backend-epg6.onrender.com"
});

export default api;