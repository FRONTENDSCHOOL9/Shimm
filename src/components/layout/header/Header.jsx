import Button from '@components/button/Button';
import {
  HeaderLink,
  Img,
  LoginContainer,
  Logo,
  NavButton,
  StyledHeader,
  StyledNav,
} from '@components/layout/header/Header.style';
import useClickOutside from '@hooks/useClickOutside';
import useWindowWide from '@hooks/useWindowWide';
import useUserStore from '@zustand/user';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
  const wide = useWindowWide(740);
  const [isClicked, setIsClicked] = useState(false);
  const { user, setUser } = useUserStore();
  const navigate = useNavigate();
  const headerRef = useRef(null);

  useClickOutside(headerRef, () => {
    if (!isClicked) {
      setIsClicked(false);
    } else {
      setIsClicked(true);
    }
    setIsClicked(false);
  });

  useEffect(() => {
    setIsClicked(false);
  }, [wide]);

  function handleClick() {
    setIsClicked(!isClicked);
  }

  function handleLogout() {
    setIsClicked(!isClicked);
    setUser(null);
    navigate('/');
  }

  function handleLogin() {
    setIsClicked(!isClicked);
    navigate('/users/login');
  }

  return (
    <StyledHeader ref={headerRef} $clicked={isClicked}>
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
          </LoginContainer>
        )}
      </StyledNav>
      <NavButton onClick={handleClick} $isClicked={isClicked}>
        <i>버튼</i>
      </NavButton>
    </StyledHeader>
  );
}

export default Header;
