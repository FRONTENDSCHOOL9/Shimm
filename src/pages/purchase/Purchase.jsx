import Button from '@components/button/Button';
import {
  Info,
  Image,
  ImageDiv,
  Preview,
  StyledMain,
  StyledSection,
  PageTitle,
  Description,
  Container,
  CheckBox,
  ButtonContainer,
  CheckBoxContainer,
  StyledLabel,
} from '@pages/purchase/Purchase.style';
import { useSelectedThemeStore } from '@zustand/themeSelection.mjs';
import { useState } from 'react';

function Purchase() {
  const selectedTheme = useSelectedThemeStore(state => state.selectedTheme);
  const [isChecked, setIsChecked] = useState(false);

  function handleCheck() {
    setIsChecked(!isChecked);
  }

  function handlePay() {
    console.log('결제하기');
  }

  return (
    <StyledMain>
      <StyledSection>
        <ImageDiv>
          <Image src="/src/assets/icon-buy.svg" alt="테마 구매" />
        </ImageDiv>
        <PageTitle>테마 구매</PageTitle>
        <Container>
          <Description>테마 정보</Description>
          <Info>
            <ul>
              <li>{`테마명: ${selectedTheme}`}</li>
              <li>테마 가격: 1000원</li>
              <li>유효기간: 제한 없음</li>
            </ul>
          </Info>
        </Container>

        <Container>
          <Description>테마 미리듣기</Description>
          <Preview></Preview>
        </Container>

        <CheckBoxContainer>
          <CheckBox
            type="checkbox"
            id="agree"
            checked={isChecked}
            onChange={handleCheck}
          />
          <StyledLabel htmlFor="agree">
            주문 내용 및 결제 조건을 확인했으며, 결제 진행에 동의합니다.
          </StyledLabel>
        </CheckBoxContainer>

        {isChecked && (
          <ButtonContainer>
            <Button size="full" bgColor="primary" handleClick={handlePay}>
              결제하기
            </Button>
          </ButtonContainer>
        )}
      </StyledSection>
    </StyledMain>
  );
}

export default Purchase;
