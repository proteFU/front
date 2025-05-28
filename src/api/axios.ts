import axios from 'axios';

const api = axios.create({
  baseURL: 'https://lazy-shaylah-guhyunwoo-777b581b.koyeb.app',
  withCredentials: true
});

export default api; 