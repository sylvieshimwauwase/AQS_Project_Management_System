import axios from "axios";

const http = axios.create({
    baseURL: import.meta.env.VITE_API_URL, // Access Vite's env variables
  });

const requestHandler = (request) => {
  const token = localStorage.getItem('token');
  if (token) {
    request.headers.Authorization = `Bearer ${token}`;
  }
  return request;
};

const responseHandler = (response) => {
  return response;
};


http.interceptors.request.use(requestHandler);
http.interceptors.response.use(responseHandler);

export default http;