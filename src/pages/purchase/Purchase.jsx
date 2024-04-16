import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useCustomAxios from '@hooks/useCustomAxios';
import { useSelectedThemeStore } from '@zustand/themeSelection';
import { ReactCsspin } from 'react-csspin';
import 'react-csspin/dist/style.css';
import Button from '@components/button/Button';
import ModalWindow from '@components/modal/ModalWindow';
import iconPlay from '@assets/images/icon-play.svg';
import iconBuy from '@assets/images/icon-buy.svg';
import iconCheck from '@assets/images/icon-check.svg';
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
import useUserStore from '@zustand/user.mjs';

function Purchase() {
  const { user } = useUserStore();
  const { selectedTheme } = useSelectedThemeStore();
  const [isChecked, setIsChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isPaid, setIsPaid] = useState(false);
  const [data, setData] = useState();
  const navigate = useNavigate();
  const location = useLocation();
  const axios = useCustomAxios();

  useEffect(() => {
    fetchTheme();
  }, []);

  async function fetchTheme() {
    try {
      setIsLoading(true);
      const res = await axios(`/products/${selectedTheme.id}`);
      setData(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }

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

  const item = data?.item;

  return (
    <>
      {user ? (
        <StyledMain>
          <StyledSection>
            <ImageDiv>
              <Image src={iconBuy} alt="테마 구매" />
            </ImageDiv>
            <PageTitle>테마 구매</PageTitle>
            <Container>
              <Description>테마 정보</Description>
              <Info>
                <ul>
                  <li>{`테마명: ${selectedTheme.name}`}</li>
                  {item?.price && (
                    <>
                      <li>{`테마 가격: ${item.price.toLocaleString()}원`}</li>
                      <li>유효기간: 제한 없음</li>
                    </>
                  )}
                </ul>
              </Info>
            </Container>

            <Container>
              <Description>테마 미리듣기</Description>
              {isLoading && <ReactCsspin />}
              <Preview
                $bgColor={selectedTheme.background}
                $url={`${import.meta.env.VITE_API_SERVER}${item?.mainImages[0]['path ']}`}
              >
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
                $iconCheck={iconCheck}
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
      ) : (
        <ModalWindow
          handleClose={() => navigate(-1)}
          handleOk={() =>
            navigate('/users/login', { state: { from: location.pathname } })
          }
        >
          테마 구매는 로그인 후 가능합니다.
          <br />
          로그인 하시겠습니까?
        </ModalWindow>
      )}
    </>
  );
}

export default Purchase;
