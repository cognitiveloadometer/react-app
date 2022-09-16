import axios from "axios";

const api = axios.create({
    baseURL: "http://3.225.9.203:3030"
})

export default api