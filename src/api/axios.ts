import axios from 'axios';

const api = axios.create({
  baseURL: 'https://lazy-shaylah-guhyunwoo-777b581b.koyeb.app',
<<<<<<< HEAD
  withCredentials: true
});

=======
  withCredentials: true  // 모든 요청에 쿠키를 포함
});

// HTTP-only 쿠키는 자동으로 포함되므로 인터셉터가 필요 없음
>>>>>>> origin/develop
export default api; 