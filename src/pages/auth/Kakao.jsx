import Loading from '@components/loading/Loading';
import axios from 'axios';
import useCustomAxios from '@hooks/useCustomAxios.mjs';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

function Kakao() {
  const [kakaoAccessToken, setKakaoAccessToken] = useState();
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code');
  const myAxios = useCustomAxios();

  console.log(code);

  useEffect(() => {
    if (code !== null) handleLogin(code);
  }, [code]);

  // useEffect(() => {
  //   if (kakaoAccessToken !== '') getUserInfo();
  // }, [kakaoAccessToken]);

  // async function getKakaoToken() {
  //   try {
  //     const res = await axios({
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
  //       },
  //       url: 'https://kauth.kakao.com/oauth/token',
  //       data: {
  //         grant_type: 'authorization_code',
  //         client_id: `${import.meta.env.VITE_KAKAO_REST_API_KEY}`,
  //         redirect_uri: `${import.meta.env.VITE_REDIRECT_URI}`,
  //         code,
  //       },
  //     });

  //     setKakaoAccessToken(res.data.access_token);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // }

  // async function getUserInfo() {
  //   try {
  //     const res = await axios({
  //       method: 'GET',
  //       headers: {
  //         Authorization: `Bearer ${kakaoAccessToken}`, // 카카오 토큰 api로 얻은 accesstoken 보내기
  //       },
  //       url: 'https://kapi.kakao.com/v2/user/me',
  //     });

  //     handleLogin(res.data);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // }

  // 이미 가입한 유저인지 확인
  async function handleLogin(code) {
    try {
      // const user = {
      //   name: data.kakao_account.profile.nickname,
      //   email: data.kakao_account.email,
      //   profileImage: data.kakao_account.profile.is_default_image
      //     ? 'icon-user-default.png'
      //     : data.kakao_account.profile.profile_image_url,
      // };

      // console.log(user);

      const res = await myAxios.post('users/login/kakao', {
        code,
      });

      console.log(res);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <Loading />
      <h2>로그인 중입니다.</h2>
    </>
  );
}

export default Kakao;
