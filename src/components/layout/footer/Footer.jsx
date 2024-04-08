import styled from "styled-components";

function Footer(){
    const FooterNav = styled.div`
        border: 1px solid black;
        display: flex;
        justify-content: center;
        margin-top: auto;
        gap: 4rem;
    
    
    `
    return (
        <div>
            <FooterNav>
                <p>이용약관</p>
                <p>개인정보처리방침</p>
            </FooterNav>            
        </div>
    )
}

export default Footer;
