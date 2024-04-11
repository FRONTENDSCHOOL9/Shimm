import styled from 'styled-components';

const aligns = {
  left: 'left',
  center: 'center',
  right: 'right',
};

const StyledMain = styled.main`
  flex-grow: 1;
  display: flex;
`;

const Cover = styled.section`
  flex-grow: 1;
  background-color: salmon;
  box-shadow: inset 0 0 20px black;
  display: none;

  @media (min-width: 740px) {
    display: block;
    flex-grow: 0;
    width: 50%;
  }
`;

const StyledSection = styled.section`
  flex-grow: 1;
  margin: 0 auto;
  max-width: 500px;
  padding: 40px 40px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const PageTitle = styled.h2`
  font-size: 3rem;
  font-weight: 600;
  text-align: center;
`;

const Description = styled.h3`
  font-size: 2rem;
  font-weight: 200;
  text-align: ${props => aligns[props.$align]};
`;

const StyledDiv = styled.div`
  text-align: center;
`;

export { StyledMain, Cover, StyledSection, PageTitle, Description, StyledDiv };
