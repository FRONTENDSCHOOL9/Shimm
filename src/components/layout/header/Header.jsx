// import { StyledHeader } from '@components/layout/header/Header.style';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const StyledHeader = styled.header`
  height: 60px;
  border-bottom: 2px solid #d4d4d4;
  padding: 10px 20px;
  box-shadow: inset 0 0 5px red;
  font-size: 2rem;

  display: flex;
  gap: 10px;
  align-items: center;
`;

const Logo = styled(Link)`
  box-shadow: inset 0 0 5px purple;
`;

const StyledNav = styled.nav`
  box-shadow: inset 0 0 5px blue;
  margin-left: auto;

  display: flex;
  gap: 10px;
`;

function Header() {
  return (
    <StyledHeader>
      <Logo to="/">Shimm</Logo>
      <StyledNav>
        <Link to="/">명상하기</Link>
        <Link to="/">커뮤니티</Link>
        <Link to="/">마이페이지</Link>
        <button type="button">버튼</button>
      </StyledNav>
    </StyledHeader>
  );
}

export default Header;
