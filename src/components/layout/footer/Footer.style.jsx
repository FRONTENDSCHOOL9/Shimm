import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledFooter = styled.footer`
  text-align: center;
  font-size: 1.2rem;
  background: linear-gradient(329deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 50%),
    linear-gradient(6deg, rgba(255, 206, 31, 0.6), rgba(0, 0, 0, 0) 60%),
    linear-gradient(358deg, rgba(169, 241, 145, 0.9), rgba(0, 0, 0, 0) 70%);

  background-repeat: no-repeat;
  background-position: center bottom;
  padding: 30px;
  box-sizing: border-box;
`;

export const FooterHeader = styled.header`
  height: 40px;
  margin-top: 60px;
  margin-bottom: 50px;

  & a {
    width: 40px;
    height: 40px;

    & img {
      width: 40px;
      height: 40px;
      aspect-ratio: 1/1;
      object-fit: cover;
    }

    &:focus img {
      box-shadow: inset 0 0 0 2px #55a25a;
      border-radius: 4px;
    }
  }
`;

export const FooterContents = styled.div`
  & div {
    display: flex;
    justify-content: center;
    gap: 40px;
    margin-bottom: 30px;
    text-decoration: underline;
  }
`;

export const StyledLink = styled(Link)`
  &:focus {
    box-shadow: 0 0 0 2px #55a25a;
    border-radius: 4px;
  }
`;
