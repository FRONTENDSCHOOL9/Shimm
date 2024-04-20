import styled from 'styled-components';
import iconGithub from '@assets/images/icon-github.svg'


export const StyledFooter = styled.footer`
    text-align: center; 
    font-size: 1.2rem;
    background: 
    linear-gradient(329deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 50%), 
    linear-gradient(9deg, rgba(255, 206, 31, 0.6), rgba(0, 0, 0, 0) 60%), 
    linear-gradient(355deg, rgba(169, 241, 145, 0.9), rgba(0, 0, 0, 0) 70%);
    background-repeat: no-repeat;
    background-position: center bottom;
    min-height: 100px;
`

export const FooterHeader = styled.header`
    background-image: url(${iconGithub});
    background-repeat: no-repeat;
    background-position: center;
    height: 40px;
    padding-top: 90px;

`

export const FooterContents = styled.div`
    width: 100%;
    padding: 2rem 0;
    display: flex;
    justify-content: center;
    gap: 4rem;

    & {
        text-decoration: underline;
    }
    `