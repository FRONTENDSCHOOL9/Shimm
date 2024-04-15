import Button from '@components/button/Button';
import iconPlay from '@assets/icon-play.svg';
import {
  Info,
  Image,
  ImageDiv,
  Preview,
  PlayButton,
  PlayIcon,
  StyledMain,
  StyledSection,
  PageTitle,
  Description,
  Container,
  CheckBox,
  ButtonContainer,
  CheckBoxContainer,
} from '@pages/purchase/Purchase.style';
import { useSelectedThemeStore } from '@zustand/themeSelection.mjs';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ModalWindow from '@components/modal/ModalWindow';

function Purchase() {
  const selectedTheme = useSelectedThemeStore(state => state.selectedTheme);
  const [isChecked, setIsChecked] = useState(false);
  const [isPaid, setIsPaid] = useState(false);
  const navigate = useNavigate();

  function handleCheck() {
    setIsChecked(!isChecked);
  }

  function handlePay() {
    setIsPaid(true);
  }

  function handleClose() {
    navigate('/meditation');
  }

  function handleOk() {
    navigate('/meditation/progress');
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
          <Preview>
            <PlayButton>
              <PlayIcon src={iconPlay} alt="음악 재생" />
            </PlayButton>
          </Preview>
        </Container>

        <CheckBoxContainer>
          <CheckBox
            type="checkbox"
            id="agree"
            checked={isChecked}
            onChange={handleCheck}
          />
          <label htmlFor="agree">
            주문 내용 및 결제 조건을 확인했으며, 결제 진행에 동의합니다.
          </label>
        </CheckBoxContainer>

        {isChecked && (
          <ButtonContainer>
            <Button size="full" bgColor="primary" handleClick={handlePay}>
              결제하기
            </Button>
          </ButtonContainer>
        )}

        {isPaid && (
          <ModalWindow handleClose={handleClose} handleOk={handleOk}>
            테마 구매가 완료되었습니다. <br />
            구매하신 테마로 명상을 시작할까요?
          </ModalWindow>
        )}
      </StyledSection>
    </StyledMain>
  );
}

export default Purchase;
