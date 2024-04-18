import SocialButtons from '@components/socialButton/SocialButton';

const SocialKakao = () => {
  const Rest_api_key = import.meta.env.VITE_KAKAO_REST_API_KEY; //REST API KEY
  const redirect_uri = import.meta.env.VITE_REDIRECT_URI; //Redirect URI
  // oauth 요청 URL
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;
  const handleLogin = () => {
    window.location.href = kakaoURL;
  };

  // const code = new URL(window.location.href).searchParams.get("code");
  return (
    <>
      <SocialButtons bgColor="yellow" handleClick={handleLogin}>
        카카오로 로그인 하기
      </SocialButtons>
    </>
  );
};
export default SocialKakao;
