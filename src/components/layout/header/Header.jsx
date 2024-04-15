import useWindowWide from '@hooks/useWindowWide.mjs';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  StyledHeader,
  Logo,
  Img,
  StyledNav,
  HeaderLink,
  NavButton,
  LoginContainer,
} from '@components/layout/header/Header.style';
import useUserStore from '@zustand/user.mjs';
import Button from '@components/button/Button';

function Header() {
  const wide = useWindowWide(740);
  const [isClicked, setIsClicked] = useState(false);
  const { user, setUser } = useUserStore();
  const navigate = useNavigate();

  useEffect(() => {
    setIsClicked(false);
  }, [wide]);

  function handleClick() {
    setIsClicked(!isClicked);
  }

  function handleLogout() {
    setUser(null);
    navigate('/');
  }

  function handleLogin() {
    navigate('/users/login');
  }

  function handleSignup() {
    console.log('회원가입');
  }

  return (
    <StyledHeader>
      <Logo to="/home">
        <Img src="/logo.png" alt="쉼" />
      </Logo>
      <StyledNav $clicked={isClicked}>
        <HeaderLink to="/meditation" onClick={handleClick}>
          명상하기
        </HeaderLink>
        <HeaderLink to="/community" onClick={handleClick}>
          커뮤니티
        </HeaderLink>
        {/* user 정보가 sessionStorage에 존재할 때만 보여주기 */}
        {user && (
          <HeaderLink to="/mypage" onClick={handleClick}>
            마이페이지
          </HeaderLink>
        )}
        {user && (
          <Button size="medium" bgColor="dark" handleClick={handleLogout}>
            로그아웃
          </Button>
        )}
        {!user && (
          <LoginContainer>
            <Button size="medium" bgColor="dark" handleClick={handleLogin}>
              로그인
            </Button>
            <Button size="medium" bgColor="dark" handleClick={handleSignup}>
              회원가입
            </Button>
          </LoginContainer>
        )}
      </StyledNav>
      <NavButton onClick={handleClick} $clicked={isClicked}>
        <i>버튼</i>
      </NavButton>
    </StyledHeader>
  );
}

export default Header;
