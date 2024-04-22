import useModalStore from '@zustand/modal';
import useUserStore from '@zustand/user';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

const REFRESH_URL = '/auth/refresh';

function useCustomAxios() {
  const { setShowModal, setModalData } = useModalStore();
  const navigate = useNavigate();
  const location = useLocation();

  // 로그인 된 사용자 정보
  const { user } = useUserStore();

  const instance = axios.create({
    baseURL: import.meta.env.VITE_API_SERVER,
    // timeout: 1000 * 10,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'client-id': '02-Shimm',
    },
  });

  // 요청 인터셉터(성공, err)
  instance.interceptors.request.use(config => {
    if (user) {
      let token = user.token.accessToken;
      if (config.url === REFRESH_URL) {
        token = user.token.refreshToken;
      }
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  });

  // 응답 인터셉터(성공, err)
  instance.interceptors.response.use(
    res => res,
    async err => {
      const { config, response } = err;
      if (response?.status === 401) {
        // refresh 토큰도 만료된 경우
        if (!user || config.url === REFRESH_URL) {
          setShowModal(true);
          setModalData({
            children: '다시 로그인하셔야 합니다. 로그인하시겠습니까?',
            button: 2,
            handleClose() {
              setShowModal(false);
            },
            handleOk() {
              setShowModal(false);
              navigate('/users/login', { state: { from: location.pathname } });
            },
          });
        } else {
          // access 토큰 재발급 요청
          const accessToken = await getAccessToken(instance);
          if (accessToken) {
            setUser({ ...user, token: { accessToken } });
            config.headers.Authorization = `Bearer ${accessToken}`;
            return axios(config);
          }
        }
      } else {
        return Promise.reject(err);
      }
    },
  );

  async function getAccessToken(instance) {
    try {
      const {
        data: { accessToken },
      } = await instance.get(REFRESH_URL);
      return accessToken;
    } catch (err) {
      console.error(err);
    }
  }

  return instance;
}

export default useCustomAxios;
