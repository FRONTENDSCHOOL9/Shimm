import { Link } from 'react-router-dom';
import {
  FooterContents,
  FooterHeader,
  StyledFooter,
  StyledLink,
} from '@components/layout/footer/Footer.style';
import iconGithub from '@assets/images/icon-github.svg';

function Footer() {
  return (
    <StyledFooter>
      <FooterHeader>
        <a href="https://github.com/FRONTENDSCHOOL9/Shimm.git" target="_blank">
          <img src={iconGithub} alt="Github로 이동" />
        </a>
      </FooterHeader>
      <FooterContents>
        <div>
          <StyledLink>개인정보처리방침</StyledLink>
          <StyledLink>이용약관</StyledLink>
        </div>
        <p>&copy; Shimm All rights reserved.</p>
      </FooterContents>
    </StyledFooter>
  );
}

export default Footer;
