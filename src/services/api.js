import axios from "axios";

const api = axios.create({
    baseURL: "https://cognitive.onrender.com/"
})

export default api