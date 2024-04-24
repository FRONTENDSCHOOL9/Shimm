import { Link } from 'react-router-dom';
import {
  FooterContents,
  FooterHeader,
  StyledFooter,
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
          <Link>개인정보처리방침</Link>
          <Link>이용약관</Link>
        </div>
        <p>&copy; Shimm All rights reserved.</p>
      </FooterContents>
    </StyledFooter>
  );
}

export default Footer;
