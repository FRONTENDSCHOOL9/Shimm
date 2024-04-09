import { Link } from "react-router-dom";
import styled from "styled-components";
    
const FooterContents = styled.div`
    border: 1px solid black;
    width: 100%;
    background-color: white;
    text-align: center;
    padding: 1.4rem;
    display: flex;
    justify-content: center;
    gap: 4rem;
    position: fixed;
    bottom: 0;
    & span {
        font-size: 1.2rem;
    }
    `

function Footer(){
    return (
        <div>
            <FooterContents>
                <Link>
                    <span>이용약관</span>
                </Link>
                <Link>
                    <span>개인정보처리방침</span>
                </Link>
            </FooterContents>            
        </div>
    )
}

export default Footer;
