// src/services/axiosService.js
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://creativecommons.org/licenses/by-nc-sa/3.0/",
  timeout: 5000,
});

export default axiosInstance;
