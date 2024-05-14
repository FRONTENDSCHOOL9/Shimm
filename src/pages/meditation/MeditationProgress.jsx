import Animation from '@components/animation/Animation';
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
import { useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import { useNavigate } from 'react-router-dom';

function MeditationProgress() {
  const { selectedTime } = useSelectedTimeStore();
  const { selectedTheme } = useSelectedThemeStore();
  const playerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [duration, setDuration] = useState(0);
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

  function handleProgress(state) {
    const { playedSeconds } = state;
    const remainingTime = duration - playedSeconds;
    const threshold = 3;

    if (remainingTime <= threshold) {
      setIsPlaying(false);
      playerRef.current.seekTo(0);
      setIsPlaying(true);
    }
  }

  function handleReady() {
    const trackDuration = playerRef.current.getDuration();
    setDuration(trackDuration);
    setIsPlaying(true);
  }

  return (
    <StyledMain $bgColor={selectedTheme.background}>
      <Animation />
      <Player>
        <ReactPlayer
          ref={playerRef}
          url={selectedTheme.music}
          loop={true}
          playing={isPlaying}
          controls={false}
          onReady={handleReady}
          onProgress={handleProgress}
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
