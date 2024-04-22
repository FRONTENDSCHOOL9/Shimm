import Button from '@components/button/Button';
import Footer from '@components/layout/footer/Footer';
import GoogleLoginButton from '@components/socialLogin/SocialGoogle';
import SocialKakao from '@components/socialLogin/SocialKakao';
import SocialNaver from '@components/socialLogin/SocialNaver';
import {
  LeftBox,
  RightBox,
  SectionLink,
  SectionUser,
  StyledMain,
  TextSection,
} from '@pages/home/Home.style';
import HomeCarousel from '@pages/home/HomeCarousel';
import useModalStore from '@zustand/modal';
import useUserStore from '@zustand/user';
import { useNavigate } from 'react-router-dom';

function Home() {
  const { user } = useUserStore();
  const navigate = useNavigate();
  const { setShowModal, setModalData } = useModalStore();

  function handleLogin() {
    navigate('/users/login');
  }

  function handleSignupModal() {
    setShowModal(true);
    setModalData({
      children: (
        <section>
          <div>
            <GoogleLoginButton />
            <SocialKakao />
            <SocialNaver />
          </div>
          <p>또는</p>
          <div>
            <Button size="full" bgColor="dark" handleClick={handleSignUp}>
              이메일로 회원가입
            </Button>
          </div>
        </section>
      ),
      button: 0,
      handleOk() {
        setShowModal(false);
      },
      handleClose() {
        setShowModal(false);
      },
    });
  }

  function handleSignUp() {
    navigate('/signup');
  }

  function handleMeditation() {
    navigate('/meditation');
  }

  function handleCommunity() {
    navigate('/community');
  }

  return (
    <>
      <StyledMain>
        <HomeCarousel></HomeCarousel>
        <SectionLink>
          <RightBox>
            <TextSection>
              <p>
                고단했던 하루에
                <br />
                고요함을 선물해 보세요.
              </p>
              <Button
                type="button"
                size="medium"
                handleClick={handleMeditation}
              >
                명상하기
              </Button>
            </TextSection>
          </RightBox>
          <LeftBox>
            <TextSection>
              <p>
                서로의 경험을 나누고 소통하면서
                <br />더 큰 가치를 발견해 보세요.
              </p>
              <Button
                type="button"
                size="medium"
                bgColor="secondary"
                handleClick={handleCommunity}
              >
                커뮤니티
              </Button>
            </TextSection>
          </LeftBox>
        </SectionLink>
        {!user && (
          <SectionUser>
            <button type="button" onClick={handleLogin}>
              로그인
            </button>
            <button type="button" onClick={handleSignupModal}>
              회원가입
            </button>
          </SectionUser>
        )}
      </StyledMain>
      <Footer />
    </>
  );
}

export default Home;
