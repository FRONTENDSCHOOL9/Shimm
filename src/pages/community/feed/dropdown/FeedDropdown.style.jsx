import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Menu = styled.ul`
  position: absolute;
  top: 40px;
  right: 0;
  z-index: 1;
  width: 150px;
  border: 1px solid #545956;
  border-radius: 5px;
  background-color: #fff;

  @media (min-width: 740px) {
    width: 200px;
  }
`;

export const MenuItem = styled.li`
  text-align: center;
  padding: 10px 0;
  border-bottom: 1px solid #545956;

  font-size: 1.4rem;
  font-weight: 300;
  color: #545956;

  & img {
    display: none;
    width: 30px;
    height: 30px;
  }

  &:last-child {
    border-bottom: unset;
  }

  @media (min-width: 740px) {
    font-size: 1.6rem;

    & img {
      display: unset;
    }
  }
`;

export const MenuLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const MenuButton = styled.button`
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 10px;
`;
