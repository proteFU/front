import axios from 'axios';

const api = axios.create({
  baseURL: 'https://lazy-shaylah-guhyunwoo-777b581b.koyeb.app',
  withCredentials: true,
});

api.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;