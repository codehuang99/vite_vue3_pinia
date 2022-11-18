import axios from "axios";

const request = axios.create({
  baseURL: "http://123.207.32.32:1888/api/",
  timeout: 3000,
});

//请求拦截器
request.interceptors.request.use((config) => {
  return config;
});

request.interceptors.response.use((res) => {
  return res.data;
});

export default request;
