import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.header`
  border-bottom: 2px solid #d4d4d4;
  background-color: #fff;
  padding: 10px 20px;
  position: relative;

  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;

  @media (min-width: 740px) {
    flex-wrap: nowrap;
  }
`;

const Logo = styled(Link)`
  box-shadow: inset 0 0 5px red;
  width: 130px;
  height: 40px;
  order: 1;

  &:focus {
    box-shadow: 0 0 0 2px rgba(115, 146, 125, 1);
    border-radius: 4px;
  }
`;

const StyledNav = styled.nav`
  background-color: #fff;
  width: 100%;
  display: ${props => (props.$clicked === true ? 'block' : 'none')};
  order: 3;

  @media (min-width: 740px) {
    order: 2;
    display: flex;
    gap: 20px;
  }
`;

const HeaderLink = styled(Link)`
  display: block;
  margin-bottom: 20px;
  font-size: 1.8rem;
  line-height: 2rem;
  font-weight: 200;
  color: rgba(51, 86, 53, 1);

  &:last-child {
    margin-bottom: unset;
  }

  &:focus {
    box-shadow: 0 0 0 2px rgba(115, 146, 125, 1);
    border-radius: 4px;
  }

  @media (min-width: 740px) {
    margin-bottom: unset;
    display: unset;

    &:first-child {
      margin-left: auto;
    }
  }
`;

const NavButton = styled.button`
  order: 2;
  width: 20px;
  margin-left: auto;

  &:before {
    content: ' ';
    display: block;
    width: 20px;
    height: 20px;
    background-image: ${props =>
      props.$clicked === true
        ? `url('/src/assets/icon-close.svg')`
        : `url('/src/assets/icon-menu.svg')`};
    background-repeat: no-repeat;
    background-size: cover;
  }

  &:focus {
    box-shadow: 0 0 0 2px rgba(115, 146, 125, 1);
    border-radius: 4px;
  }

  @media (min-width: 740px) {
    display: none;
  }
`;

export { StyledHeader, Logo, StyledNav, HeaderLink, NavButton };
