import axios from "axios"
const axiosInstance = axios.create({
    baseURL: "http://localhost:5000/api/auth",
    headers: {
        "Content-Type": "application/json",
    },
});
axiosInstance.interceptors.request.use(config => {
    config.headers["Authorization"] = localStorage.getItem("token");
    return config;
})
export default axiosInstance;