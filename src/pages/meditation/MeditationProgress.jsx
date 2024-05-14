import Animation from '@components/animation/Animation';
import Button from '@components/button/Button';
import {
  PageTitle,
  StyledDiv,
  StyledMain,
  StyledSection,
} from '@pages/meditation/Meditation.style';
import Timer from '@pages/meditation/timer/Timer';
import { useSelectedThemeStore } from '@zustand/themeSelection';
import { useSelectedTimeStore } from '@zustand/timeSelection';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function MeditationProgress() {
  const { selectedTime } = useSelectedTimeStore();
  const { selectedTheme } = useSelectedThemeStore();
  const audioRef = useRef(null);
  const navigate = useNavigate();

  let time = 0;
  switch (selectedTime) {
    case '5분':
      time = 5 * 60;
      break;
    case '10분':
      time = 10 * 60;
      break;
    case '30분':
      time = 30 * 60;
      break;
    case '1시간':
      time = 60 * 60;
      break;
    default:
      time = 5 * 60;
      break;
  }

  function handleReset() {
    navigate('/meditation');
  }

  function handleMusic(value) {
    if (value) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }

  return (
    <StyledMain $bgColor={selectedTheme.background}>
      <Animation />
      <div>
        <audio
          ref={audioRef}
          loop
          src={selectedTheme.music}
          type="audio/mpeg"
        ></audio>
      </div>

      <StyledSection>
        <PageTitle>명상하기</PageTitle>
        <Timer selectedTime={time} handleMusic={handleMusic} />
        <StyledDiv>
          <Button size="full" handleClick={handleReset}>
            다시하기
          </Button>
        </StyledDiv>
      </StyledSection>
    </StyledMain>
  );
}

export default MeditationProgress;
