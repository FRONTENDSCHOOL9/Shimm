import {
  NavItem,
  Post,
  StyledMain,
  StyledNav,
  StyledSection,
} from '@pages/mypage/myactivity/MyActivity.style';
import { Outlet } from 'react-router-dom';

function MyActivity() {
  return (
    <>
      <StyledMain>
        <StyledSection>
          <StyledNav>
            <NavItem
              to="/mypage/activity/myposts"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              내가 쓴 글
            </NavItem>
            <NavItem
              to="/mypage/activity/bookmarkedposts"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              북마크한 글
            </NavItem>
          </StyledNav>
          <Post>
            <Outlet />
          </Post>
        </StyledSection>
      </StyledMain>
    </>
  );
}

export default MyActivity;
