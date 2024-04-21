import { Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';

const StyledMain = styled.main`
  flex-grow: 1;
  padding: 0 20px;
  box-sizing: border-box;
`;

const StyledSection = styled.section`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
`;

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
`;

const NavItem = styled(Link)`
  text-align: center;
  flex-grow: 1;
  padding-top: 30px;
  padding-bottom: 10px;
  font-size: 1.4rem;
  font-weight: 500;
  color: #6d746e;
  border-bottom: 1px solid #6d746e;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #000;
    border-bottom: 2px solid #000;
    box-shadow: none;
  }

  &:focus {
    box-shadow: inset 0 0 0 1px #55a25a;
    border-radius: 5px;
    color: #000;
  }
`;

function MyActivity() {
  return (
    <>
      <StyledMain>
        <StyledSection>
          <StyledNav>
            <NavItem to="/mypage/activity/myposts">내가 쓴 글</NavItem>
            <NavItem to="/mypage/activity/bookmarkedposts">북마크한 글</NavItem>
          </StyledNav>
          <Outlet />
        </StyledSection>
      </StyledMain>
    </>
  );
}

export default MyActivity;
