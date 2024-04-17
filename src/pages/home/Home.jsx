import Footer from '@components/layout/footer/Footer';
import HomeCarousel from './HomeCarousel';
import { useNavigate } from 'react-router-dom';
import useUserStore from '@zustand/user';
import {
  StyledMain,
  SectionLink,
  LeftBox,
  RightBox,
  TextSection,
  SectionUser,
} from '@pages/home/Home.style';
import Button from '@components/button/Button';

function Home() {
  const { user } = useUserStore();
  const navigate = useNavigate();

  function handleLogin() {
    navigate('/users/login');
  }

  function handleSignup() {
    console.log('회원가입');
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
              <Button size="medium">명상하기</Button>
            </TextSection>
          </RightBox>
          <LeftBox>
            <TextSection>
              <p>
                서로의 경험을 나누고 소통하면서
                <br />더 큰 가치를 발견해 보세요.
              </p>
              <Button size="medium" bgColor="secondary">
                커뮤니티
              </Button>
            </TextSection>
          </LeftBox>
        </SectionLink>
        {!user && (
          <SectionUser>
            <button onClick={handleLogin}>로그인</button>
            <button onClick={handleSignup}>회원가입</button>
          </SectionUser>
        )}
      </StyledMain>
      <Footer />
    </>
  );
}

export default Home;
