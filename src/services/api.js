import axios from "axios";

const api = axios.create({
    baseURL: "https://api-cognitive.onrender.com"
})

export default api