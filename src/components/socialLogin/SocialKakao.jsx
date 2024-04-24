import iconKakao from '@assets/images/icon-kakao.png';
import SocialButtons from '@components/socialButton/SocialButton';

function SocialKakao() {
  const REST_API_KEY = import.meta.env.VITE_KAKAO_REST_API_KEY;
  const REDIRECT_URI = import.meta.env.VITE_REDIRECT_URI;
  const KAKAO_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const handleLogin = () => {
    window.location.href = KAKAO_URL;
  };

  return (
    <>
      <SocialButtons bgColor="yellow" handleClick={handleLogin}>
        <img src={iconKakao} alt="카카오로 로그인하기" />
        카카오로 로그인 하기
      </SocialButtons>
    </>
  );
}
export default SocialKakao;
