import axios from "axios";

const api = axios.create({
    baseURL: "https://api-vc3d.onrender.com/"
})

export default api