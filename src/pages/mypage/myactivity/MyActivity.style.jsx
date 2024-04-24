import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledMain = styled.main`
  flex-grow: 1;
  padding: 0 20px;
  box-sizing: border-box;
`;

export const StyledSection = styled.section`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
`;

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
`;

export const NavItem = styled(NavLink)`
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
    box-shadow: unset;
  }

  &.active {
    color: #000;
    border-bottom: 2px solid #000;
    box-shadow: unset;
  }
`;

export const Post = styled.div`
  padding: 30px 0;
`;

export const NoPost = styled.div`
  & p {
    margin: 60px auto;
    font-size: 1.4rem;
    font-weight: 500;
    text-align: center;
  }
`;
