import styled from 'styled-components';

const aligns = {
  left: 'left',
  center: 'center',
  right: 'right',
};

export const StyledMain = styled.main`
  flex-grow: 1;
  display: flex;
`;

export const Cover = styled.section`
  flex-grow: 1;
  background-image: url('/meditation.jpeg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: none;

  @media (min-width: 740px) {
    display: block;
    flex-grow: 0;
    width: 50%;
  }
`;

export const StyledSection = styled.section`
  flex-grow: 1;
  margin: 0 auto;
  max-width: 500px;
  padding: 30px 20px;
  box-sizing: border-box;

  @media (min-width: 740px) {
    padding: 80px 60px;
  }
`;

export const PageTitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 30px;

  @media (min-width: 740px) {
    font-size: 3.6rem;
    margin-bottom: 60px;
  }
`;

export const Description = styled.h3`
  font-size: 1.4rem;
  font-weight: 200;
  text-align: ${props => aligns[props.$align]};
  margin-bottom: 15px;

  @media (min-width: 740px) {
    font-size: 2.4rem;
    margin-bottom: 30px;
  }
`;

export const StyledDiv = styled.div`
  margin-top: 15px;
  text-align: center;

  @media (min-width: 740px) {
    margin-top: 30px;
  }
`;

export const StyledLabel = styled.label`
  display: block;
  font-size: 2rem;
  font-weight: 200;
  margin-bottom: 10px;
`;

export const StyledInput = styled.input`
  display: block;
  width: 100%;
  height: 40px;
  border: 1px solid #000;
  border-radius: 5px;
  font-size: 1.4rem;
  padding: 10px;
  box-sizing: border-box;
`;

export const StyledError = styled.div`
  font-size: 1.2rem;
  font-weight: 200;
  color: red;
  margin: 10px 0;
`;

export const SaveButtonContainer = styled.div`
  text-align: center;
  margin-top: 30px;
`;
