import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledHeader = styled.header`
  background-color: #fff;
  padding: 20px;
  position: relative;

  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;

  @media (min-width: 740px) {
    flex-wrap: nowrap;
  }
`;

export const Logo = styled(Link)`
  width: 70px;
  height: 16px;
  order: 1;

  &:focus {
    box-shadow: 0 0 0 2px rgba(115, 146, 125, 1);
    border-radius: 4px;
  }

  @media (min-width: 740px) {
    width: 130px;
    height: 30px;
  }
`;

export const Img = styled.img`
  object-fit: cover;
`;

export const StyledNav = styled.nav`
  background-color: #fff;
  width: 100%;
  display: ${props => (props.$clicked === true ? 'block' : 'none')};
  order: 3;

  @media (min-width: 740px) {
    order: 2;
    display: flex;
    gap: 60px;
    align-items: center;
  }
`;

export const HeaderLink = styled(Link)`
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

export const NavButton = styled.button`
  order: 2;
  width: 20px;
  margin-left: auto;

  &:before {
    content: ' ';
    display: block;
    width: 16px;
    height: 12px;
    background-image: ${props =>
      props.$clicked === true
        ? `url('/src/assets/icon-close.svg')`
        : `url('/src/assets/icon-menu.svg')`};
    background-repeat: no-repeat;
    background-size: contain;
  }

  &:focus {
    box-shadow: 0 0 0 2px rgba(115, 146, 125, 1);
    border-radius: 4px;
  }

  @media (min-width: 740px) {
    display: none;
  }
`;

export const LoginContainer = styled.div`
  display: flex;
  gap: 10px;

  @media (min-width: 740px) {
    gap: 20px;
  }
`;
