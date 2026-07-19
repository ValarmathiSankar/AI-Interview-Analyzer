import axios from "axios";

const API = axios.create({
  baseURL: "https://ai-interview-backend-epg6.onrender.com",
});

export default API;