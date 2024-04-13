import Button from '@components/button/Button';
import Timer from '@components/timer/Timer';
import {
  PageTitle,
  StyledSection,
  StyledMain,
  StyledDiv,
} from '@pages/meditation/Meditation.style';
import { useSelectedTimeStore } from '@zustand/timeSelection.mjs';
import { useNavigate } from 'react-router-dom';

function MeditationProgress() {
  const selectedTime = useSelectedTimeStore(state => state.selectedTime);
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
    navigate(-1);
  }

  function handleFinish() {
    navigate('/meditation/record');
  }

  return (
    <StyledMain>
      <StyledSection>
        <PageTitle>명상하기</PageTitle>
        <Timer selectedTime={time} handleFinish={handleFinish} />
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
