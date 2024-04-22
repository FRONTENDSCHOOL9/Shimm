import SocialButtons from '@components/socialButton/SocialButton';

const SocialNaver = () => {
  const CLIENT_ID = import.meta.env.VITE_NAVER_CLIENT_ID; //REST API KEY
  const STATE = 'false';
  const REDIRECT_URI = import.meta.env.VITE_REDIRECT_URI; //Redirect URI
  // oauth 요청 URL
  const NAVER_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${CLIENT_ID}&state=${STATE}&redirect_uri=${REDIRECT_URI}
    `;
  const handleLogin = () => {
    window.location.href = NAVER_URL;
  };

  // const code = new URL(window.location.href).searchParams.get("code");
  return (
    <>
      <SocialButtons bgColor="green" handleClick={handleLogin}>
        네이버로 로그인 하기
      </SocialButtons>
    </>
  );
};
export default SocialNaver;
