import styled from 'styled-components';

const StyledMain = styled.main`
  flex-grow: 1;
  display: flex;
`;

const StyledSection = styled.section`
  flex-grow: 1;
  margin: 0 auto;
  max-width: 500px;
  padding: 40px 40px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const PageTitle = styled.h2`
  font-size: 3rem;
  font-weight: 600;
  text-align: center;
`;

const Container = styled.div``;

const Description = styled.h3`
  font-size: 2rem;
  font-weight: 200;
  margin-bottom: 10px;
`;

const Info = styled.div`
  background-color: rgba(240, 245, 237, 1);
  padding: 30px;
  box-sizing: border-box;
  border-radius: 5px;
  font-size: 1.8rem;
  font-weight: 200;
  line-height: 3rem;
`;

const Preview = styled.div`
  height: 170px;
  background-color: rgba(240, 245, 237, 1);
  padding: 20px;
  box-sizing: border-box;
  border-radius: 5px;
`;

const ButtonContainer = styled.div`
  text-align: center;
`;

const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  position: relative;
`;

const StyledLabel = styled.label``;

const CheckBox = styled.input``;

export {
  StyledMain,
  StyledSection,
  PageTitle,
  Description,
  Container,
  Info,
  Preview,
  ButtonContainer,
  CheckBoxContainer,
  CheckBox,
  StyledLabel,
};
