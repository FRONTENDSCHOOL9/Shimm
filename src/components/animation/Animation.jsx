import Lottie from 'react-lottie';
import animation from './meditation-animation01.json';
import styled from 'styled-components';

const AnimationWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%);
  z-index: -1;
`;

function Animation() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <AnimationWrapper>
      <Lottie options={defaultOptions} speed={0.5} />
    </AnimationWrapper>
  );
}

export default Animation;
