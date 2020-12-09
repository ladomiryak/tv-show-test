import axios from "axios";

// Set up default Axios headers
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Access-Control-Allow-Headers"] = "Content-Type";

// configure base Axios instance
const baseAxiosInstance = axios.create();
baseAxiosInstance.defaults.baseURL = process.env.REACT_APP_BASE_API_URL;
baseAxiosInstance.interceptors.response.use(
  (response) => response.data,
  (response) => Promise.reject(response)
);

export const baseApi = baseAxiosInstance;
