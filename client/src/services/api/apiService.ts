import axios from "axios";

const instance = axios.create({
  baseURL: `http://127.0.0.1:3000`,
  headers: {
    "Content-Type": "application/json",
    Authorization: "",
  },
});

const requestInterceptor = async (config: any) => {
  const token = localStorage.getItem("idToken");
  config.headers.Authorization = `Bearer ${token}`;
  return config;
};

instance.interceptors.request.use(requestInterceptor);

// todo missing error response interceptor
instance.interceptors.response.use((response: any) => response);

export default instance;
