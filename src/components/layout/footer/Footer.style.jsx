import styled from 'styled-components';

export const StyledFooter = styled.footer`
  text-align: center;
  font-size: 1.2rem;
  background: linear-gradient(329deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 50%),
    linear-gradient(6deg, rgba(255, 206, 31, 0.6), rgba(0, 0, 0, 0) 60%),
    linear-gradient(358deg, rgba(169, 241, 145, 0.9), rgba(0, 0, 0, 0) 70%);
  
 
  background-repeat: no-repeat;
  background-position: center bottom;
  min-height: 100px;
  padding: 30px;
  box-sizing: border-box;
`;

export const FooterHeader = styled.header`
  height: 40px;
  margin-top: 60px;
  margin-bottom: 50px;
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
