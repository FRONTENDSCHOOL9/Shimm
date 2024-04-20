
import { Link } from 'react-router-dom';
import { StyledFooter, FooterHeader, FooterContents } from './Footer.style';


function Footer(){
    return (
        <StyledFooter>
            <FooterHeader>
                <a href='https://github.com/FRONTENDSCHOOL9/Shimm.git' target='_blank'>Github로 이동</a>
            </FooterHeader>
            <FooterContents>
                <Link>
                    <span>이용약관</span>
                </Link>
                <Link>
                    <span>개인정보처리방침</span>
                </Link>
            </FooterContents>
        </StyledFooter>
    )
}

export default Footer;
