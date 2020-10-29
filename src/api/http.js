import axios from "axios";

const request = axios.create();

request.defaults.timeout = 1000 * 30; // 30s
request.defaults.baseURL = process.env.VUE_APP_REQUEST_URL;

request.interceptors.request.use(
  (config) => {
    // todo
    return config;
  },
  (err) => {
    console.log("request err: ", err);
  }
);

request.interceptors.response.use(
  (res) => {
    const { data } = res;
    // todo
    return data;
  },
  (err) => {
    console.log("response err: ", err);
    return Promise.reject(err);
  }
);
