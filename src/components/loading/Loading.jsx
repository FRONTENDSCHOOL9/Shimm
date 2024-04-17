import Lottie from 'react-lottie';
import animationData from './loading.json';
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LoadingText = styled.p`
  font-size: 1.4rem;
  flex-grow: 1;
  width: 100%;
  flex-shrink: 0;
  text-align: center;
`

function Loading() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <StyledDiv>
      <LoadingText>로딩중입니다 🏃🏻‍♀️‍➡️</LoadingText>
      <Lottie options={defaultOptions} width={150} height={150}/>
    </StyledDiv>
  );
}

export default Loading;
