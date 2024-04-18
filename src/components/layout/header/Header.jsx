import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useWindowWide from '@hooks/useWindowWide';
import useUserStore from '@zustand/user';
import iconClose from '@assets/images/icon-close.svg';
import iconMenu from '@assets/images/icon-menu.svg';
import Button from '@components/button/Button';
import {
  StyledHeader,
  Logo,
  Img,
  StyledNav,
  HeaderLink,
  NavButton,
  LoginContainer,
} from '@components/layout/header/Header.style';

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

  function handleSignUp() {
    navigate('/users/signup');
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
        {user?.type === 'seller' && (
          <HeaderLink to="/admin/theme" onClick={handleClick}>
            테마 등록하기
          </HeaderLink>
        )}
        {user && (
          <HeaderLink to="/mypage" onClick={handleClick}>
            마이페이지
          </HeaderLink>
        )}
        {user ? (
          <Button size="medium" bgColor="dark" handleClick={handleLogout}>
            로그아웃
          </Button>
        ) : (
          <LoginContainer>
            <Button size="medium" bgColor="dark" handleClick={handleLogin}>
              로그인
            </Button>
            <Button size="medium" bgColor="dark" handleClick={handleSignUp}>
              회원가입
            </Button>
          </LoginContainer>
        )}
      </StyledNav>
      <NavButton
        onClick={handleClick}
        $clicked={isClicked}
        $iconClose={iconClose}
        $iconMenu={iconMenu}
      >
        <i>버튼</i>
      </NavButton>
    </StyledHeader>
  );
}

export default Header;
