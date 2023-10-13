import axios from "axios"
import ipConfig from "../ipConfig.json";

const axiosApi = axios.create({
    baseURL: ipConfig.workspaceIp,
    withCredentials: true
})

export default axiosApi