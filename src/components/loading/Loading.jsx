import { LoadingText, LoadingWrapper } from '@components/loading/Loading.style';
import animationData from '@components/loading/loading.json';
import { Inside } from '@components/modal/ModalWindow.style';
import Lottie from 'react-lottie';

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
