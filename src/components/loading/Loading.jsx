import Lottie from 'react-lottie';
import animationData from './loading.json';
import styled from 'styled-components';

const LoadingWrapper = styled.div`
  width: 100%;
  height: 100vh;
  /* background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(20px); */
  display: flex;
  justify-content: center;
`;

const Inside = styled.div``;

const LoadingText = styled.p`
  font-size: 1.4rem;
  flex-grow: 1;
  width: 100%;
  flex-shrink: 0;
  text-align: center;
`;

function Loading() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <LoadingWrapper>
      <Inside>
        <LoadingText>로딩중입니다 🏃🏻‍♀️</LoadingText>
        <Lottie options={defaultOptions} width={130} height={130} />
      </Inside>
    </LoadingWrapper>
  );
}

export default Loading;
