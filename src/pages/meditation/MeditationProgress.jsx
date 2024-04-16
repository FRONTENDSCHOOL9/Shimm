import Button from '@components/button/Button';
import Timer from '@pages/meditation/timer/Timer';
import { useNavigate } from 'react-router-dom';
import { useSelectedTimeStore } from '@zustand/timeSelection';
import { useSelectedThemeStore } from '@zustand/themeSelection';
import {
  PageTitle,
  StyledSection,
  StyledMain,
  StyledDiv,
} from '@pages/meditation/Meditation.style';

function MeditationProgress() {
  const { selectedTime } = useSelectedTimeStore();
  const { selectedTheme } = useSelectedThemeStore();
  const navigate = useNavigate();

  let time = 0;
  switch (selectedTime) {
    case '5분':
      time = 5;
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

  return (
    <StyledMain $bgColor={selectedTheme.background}>
      <StyledSection>
        <PageTitle>명상하기</PageTitle>
        <Timer selectedTime={time} />
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
