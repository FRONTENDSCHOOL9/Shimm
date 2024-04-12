import styled from 'styled-components';

const StyledMain = styled.main`
  flex-grow: 1;
  display: flex;
`;

const StyledSection = styled.section`
  flex-grow: 1;
  margin: 0 auto;
  max-width: 500px;
  padding: 0 20px;
  padding-bottom: 20px;
  box-sizing: border-box;

  @media (min-width: 740px) {
    padding: 0 60px;
    padding-bottom: 40px;
  }
`;

export const ImageDiv = styled.div`
  text-align: center;
`;

export const Image = styled.img`
  width: 100px;
  height: 100px;
`;

const PageTitle = styled.h2`
  font-size: 1.6rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 8px;

  @media (min-width: 740px) {
    font-size: 2.2rem;
    margin-bottom: 30px;
  }
`;

const Container = styled.div``;

const Description = styled.h3`
  font-size: 1.4rem;
  font-weight: 500;
  margin-bottom: 6px;

  @media (min-width: 740px) {
    font-size: 1.6;
    margin-bottom: 11px;
  }
`;

const Info = styled.div`
  background-color: #f5f5f5;
  padding: 25px 15px;
  box-sizing: border-box;
  border-radius: 5px;
  font-size: 1.4rem;
  line-height: 2.4rem;
  font-weight: 200;
  letter-spacing: 0.02rem;
  margin-bottom: 20px;

  & li {
    display: flex;
    gap: 10px;
    align-items: center;
  }

  & li:before {
    content: '';
    width: 10px;
    height: 4px;
    border-radius: 2px;
    background-color: #55a25a;
  }
`;

const Preview = styled.div`
  height: 170px;
  background: linear-gradient(45deg, #60e66d 0%, #f6815b 100%);
  padding: 20px;
  box-sizing: border-box;
  border-radius: 8px;
  margin-bottom: 12px;

  @media (min-width: 740px) {
    margin-bottom: 28px;
  }
`;

const ButtonContainer = styled.div`
  text-align: center;
`;

const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  position: relative;

  margin-bottom: 30px;

  @media (min-width: 740px) {
    margin-bottom: 55px;
  }
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
