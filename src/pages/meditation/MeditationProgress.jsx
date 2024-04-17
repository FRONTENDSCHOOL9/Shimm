import Button from '@components/button/Button';
import {
  PageTitle,
  Player,
  StyledDiv,
  StyledMain,
  StyledSection,
} from '@pages/meditation/Meditation.style';
import Timer from '@pages/meditation/timer/Timer';
import { useSelectedThemeStore } from '@zustand/themeSelection';
import { useSelectedTimeStore } from '@zustand/timeSelection';
import { useState } from 'react';
import ReactPlayer from 'react-player';
import { useNavigate } from 'react-router-dom';

function MeditationProgress() {
  const { selectedTime } = useSelectedTimeStore();
  const { selectedTheme } = useSelectedThemeStore();
  const [isPlaying, setIsPlaying] = useState(true);
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
    setIsPlaying(value);
  }

  return (
    <StyledMain $bgColor={selectedTheme.background}>
      <Player>
        <ReactPlayer
          url={`${import.meta.env.VITE_API_SERVER}${selectedTheme.music}`}
          loop={true}
          playing={isPlaying}
        />
      </Player>
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
