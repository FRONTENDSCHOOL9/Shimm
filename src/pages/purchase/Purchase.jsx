import iconBuy from '@assets/images/icon-buy.svg';
import iconPlay from '@assets/images/icon-play.svg';
import iconPause from '@assets/images/icon-pause.svg';
import Button from '@components/button/Button';
import Loading from '@components/loading/Loading';
import useCustomAxios from '@hooks/useCustomAxios';
import {
  ButtonContainer,
  CheckBoxContainer,
  Container,
  Description,
  Image,
  ImageDiv,
  Info,
  PageTitle,
  PlayButton,
  PlayIcon,
  Player,
  Preview,
  StyledMain,
  StyledSection,
} from '@pages/purchase/Purchase.style';
import useModalStore from '@zustand/modal';
import { useSelectedThemeStore } from '@zustand/themeSelection';
import useUserStore from '@zustand/user';
import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { useLocation, useNavigate } from 'react-router-dom';

function Purchase() {
  const { user } = useUserStore();
  const { selectedTheme } = useSelectedThemeStore();
  const { setShowModal, setModalData } = useModalStore();
  const [isChecked, setIsChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [data, setData] = useState();
  const [playTime, setPlayTime] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const axios = useCustomAxios();

  useEffect(() => {
    if (!user) {
      handleLogin();
    } else {
      fetchOrders();
      fetchTheme();
    }
  }, []);

  async function fetchOrders() {
    try {
      const res = await axios('/orders');

      let orderArr = [];
      res.data?.item.map(order => {
        order.products.map(product => {
          orderArr.push(product._id);
        });
      });

      if (orderArr.includes(selectedTheme.id)) {
        handlePaid();
      }
    } catch (err) {
      console.error(err);
    }
  }

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

  function handleLogin() {
    setShowModal(true);
    setModalData({
      children: (
        <span>
          테마 구매는 로그인 후 가능합니다.
          <br />
          로그인 하시겠습니까?
        </span>
      ),
      button: 2,
      handleClose() {
        setShowModal(false);
        navigate(-1);
      },
      handleOk() {
        setShowModal(false);
        navigate('/users/login', { state: { from: location.pathname } });
      },
    });
  }

  function handlePaid() {
    setShowModal(true);
    setModalData({
      children: (
        <span>
          이미 구매한 테마입니다. <br />
          명상을 시작하시겠습니까?
        </span>
      ),
      button: 2,
      handleClose() {
        setShowModal(false);
        navigate('/meditation');
      },
      handleOk() {
        setShowModal(false);
        navigate('/meditation/progress');
      },
    });
  }

  function handleCheck() {
    setIsChecked(!isChecked);
  }

  function handlePay() {
    setIsPlaying(false);
    const { IMP } = window;
    IMP.init(import.meta.env.VITE_MERCHANT_CODE);
    IMP.request_pay(
      {
        pg: 'kcp',
        pay_method: 'card',
        merchant_uid:
          new Date().getTime() + Math.floor(Math.random() * 1000000),
        name: '테마 결제',
        amount: 1000,
        buyer_name: user.name,
        buyer_tel: user.phone,
        buyer_email: user.email,
      },
      async res => {
        try {
          if (res.success) {
            await axios.post('/orders', {
              products: [
                {
                  _id: JSON.parse(sessionStorage.getItem('theme')).state
                    .selectedTheme.id,
                  quantity: 1,
                  extra: { ...res },
                },
              ],
            });

            setShowModal(true);
            setModalData({
              children: (
                <span>
                  테마 구매가 완료되었습니다. <br />
                  구매하신 테마로 명상을 시작할까요?
                </span>
              ),
              button: 2,
              handleClose() {
                setShowModal(false);
                navigate('/meditation');
              },
              handleOk() {
                setShowModal(false);
                navigate('/meditation/progress');
              },
            });
          } else {
            setShowModal(true);
            setModalData({
              children: <span>결제를 취소하셨습니다.</span>,
              button: 1,
              handleOk() {
                setShowModal(false);
              },
            });
          }
        } catch (err) {
          console.error(err);
          setShowModal(true);
          setModalData({
            children: <span>결제에 실패했습니다. 다시 시도해주세요.</span>,
            button: 1,
            handleOk() {
              setShowModal(false);
            },
          });
        }
      },
    );
  }

  function handlePlay() {
    setIsPlaying(!isPlaying);
  }

  function handleProgress(state) {
    const { playedSeconds } = state;
    setPlayTime(playedSeconds);

    if (playTime >= 60) {
      setIsPlaying(false);
      setPlayTime(0);
    }
  }

  const item = data?.item;

  return (
    <>
      {user && (
        <StyledMain>
          <StyledSection>
            <ImageDiv>
              <Image src={iconBuy} alt="테마 구매" />
            </ImageDiv>
            <PageTitle>테마 구매</PageTitle>
            {isLoading ? (
              <Loading />
            ) : (
              <>
                <Container>
                  <Description>테마 정보</Description>
                  <Info>
                    <ul>
                      <li>{`테마명: ${selectedTheme.name}`}</li>
                      {item?.price && (
                        <>
                          <li>{`테마 가격: ${Number(item.price).toLocaleString()}원`}</li>
                          <li>유효기간: 제한 없음</li>
                        </>
                      )}
                    </ul>
                  </Info>
                </Container>

                <Container>
                  <Description>테마 미리듣기</Description>
                  <Player>
                    <ReactPlayer
                      url={`${import.meta.env.VITE_API_SERVER}${selectedTheme.music}`}
                      // url="https://soundcloud.com/marogobran/vivaldi?in=hanangobran/sets/classic&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
                      loop={false}
                      playing={isPlaying}
                      onProgress={handleProgress}
                    />
                  </Player>

                  <Preview
                    $bgColor={selectedTheme.background}
                    $url={`${import.meta.env.VITE_API_SERVER}${item?.mainImages[0]['path']}`}
                  >
                    <PlayButton type="button" onClick={handlePlay}>
                      {isPlaying ? (
                        <PlayIcon src={iconPause} alt="재생" />
                      ) : (
                        <PlayIcon src={iconPlay} alt="중지" />
                      )}
                    </PlayButton>
                  </Preview>
                </Container>

                <CheckBoxContainer>
                  <input
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
                    <Button
                      size="full"
                      bgColor="primary"
                      handleClick={handlePay}
                    >
                      결제하기
                    </Button>
                  </ButtonContainer>
                )}
              </>
            )}
          </StyledSection>
        </StyledMain>
      )}
    </>
  );
}

export default Purchase;
