import useWindowWide from '@hooks/useWindowWide.mjs';
import { useEffect, useState } from 'react';
import {
  StyledHeader,
  Logo,
  StyledNav,
  HeaderLink,
  NavButton,
} from '@components/layout/header/Header.style';

function Header() {
  const wide = useWindowWide(740);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    setIsClicked(false);
  }, [wide]);

  function handleClick() {
    setIsClicked(!isClicked);
  }

  return (
    <StyledHeader>
      <Logo to="/home">Shimm</Logo>
      <StyledNav $clicked={isClicked}>
        <HeaderLink to="/meditation">명상하기</HeaderLink>
        <HeaderLink to="/community">커뮤니티</HeaderLink>
        {/* user 정보가 sessionStorage에 존재할 때만 보여주기 */}
        <HeaderLink to="/">마이페이지</HeaderLink>
      </StyledNav>
      <NavButton onClick={handleClick} $clicked={isClicked}>
        <i className="ir">버튼</i>
      </NavButton>
    </StyledHeader>
  );
}

export default Header;
