import axios from 'axios';

const api = axios.create({
  baseURL: 'https://lazy-shaylah-guhyunwoo-777b581b.koyeb.app',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }
});

// 요청 인터셉터
api.interceptors.request.use(
  (config) => {
    // 모든 요청에 withCredentials 설정 강제
    config.withCredentials = true;
    // CORS 관련 헤더 추가
    config.headers['Access-Control-Allow-Credentials'] = true;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 응답 인터셉터
api.interceptors.response.use(
  (response) => {
    // 응답 헤더 로깅
    console.log('Response Headers:', response.headers);
    console.log('Response Cookies:', document.cookie);
    return response;
  },
  (error) => {
    console.error('API Error:', error);
    if (error.response?.status === 401) {
      // 401 에러 처리
      console.error('인증 에러:', error.response);
    }
    return Promise.reject(error);
  }
);

export default api; 