import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import axios from '@hooks/useCustomAxios.mjs';
import Loading from '@components/loading/Loading';

const Kakao = () => {
  const [kakaoAccessToken, setKakaoAccessToken] = useState('');
  const searchParams = useSearchParams();
  const code = searchParams.get('code');

  const GetKakaoOauthToken = async () => {
    const makeFormData = key => {
      const searchParams = new URLSearchParams();
      Object.keys(params).forEach(key => {
        searchParams.append(key, params[key]);
      });

      return searchParams;
    };

    try {
      const res = await axios({
        method: 'POST',
        headers: {
          'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
        },
        url: 'https://kauth.kakao.com/oauth/token',
        data: makeFormData({
          grant_type: 'authorization_code',
          client_id: CLIENT_ID,
          redirect_uri: REDIRECT_URI + '/kakao',
          code, // 인가 코드
        }),
      });

      Data.set('kakaoLogin', res.data.access_token);
    } catch (err) {
      console.warn(err);
    }
  };

  const GetKakaoUserInfo = async () => {
    try {
      const res = await axios({
        method: 'GET',
        headers: {
          Authorization: `Bearer ${kakaoAccessToken}`,
        },
        url: 'https://kapi.kakao.com/v2/user/me',
      });

      Data.set('userInfo', res.data.kakao_account.profile.nickname);
    } catch (e) {
      console.log('e : ', e);
    }
  };

  const UserLogin = async ($nickname, $existing) => {
    const res = await axios({
        method: 'POST',
        headers: {
          Authorization: `Bearer ${kakaoAccessToken}`,
        },
        url: 'https://kapi.kakao.com/v2/user/me',
        user: {

        }
    })
      if (res !== 'FAIL') {
        Data.set('login', res.accessToken);

        // 쿠키 세팅 : 10시간
        setCookie('CRT', res.refreshTokenId, {
          expires: 36000000,
          SameSite: 'Strict',
        });

        sAlert({
          icon: 'success',
          html: `CINEMATE ${$existing ? '로그인' : '회원가입'}이<br>성공적으로 완료 되었습니다.`,
          didClose: () => {
            router.replace('/');
          },
        });
      }
    })
  };

  useEffect(() => {
    if (code !== null) fnGetKakaoOauthToken();
  }, [code]);

  useEffect(() => {
    if (kakaoAccessToken !== '') fnGetKakaoUserInfo();
  }, [kakaoAccessToken]);

  return;
};

export default Kakao;
