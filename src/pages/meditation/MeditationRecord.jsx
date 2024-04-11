import {
  StyledSection,
  StyledMain,
  PageTitle,
  Description,
} from '@pages/meditation/Meditation.style';
import Result from '@components/result/Result';
import useCompleteTimeStore from '@zustand/timer.mjs';
import { useSelectedTimeStore } from '@zustand/timeSelection.mjs';

function MeditationRecord() {
  const selectedTime = useSelectedTimeStore(state => state.selectedTime);
  const completeTime = useCompleteTimeStore(state => state.completeTime);
  const date = new Date();
  const currentDate =
    date.getFullYear() +
    '년 ' +
    (date.getMonth() + 1) +
    '월 ' +
    date.getDate() +
    '일';

  console.log(selectedTime, completeTime);

  const message =
    selectedTime === completeTime + '초'
      ? `목표한 ${completeTime}분 명상을 완료했어요.`
      : `${Math.floor(completeTime / 60) ? Math.floor(completeTime / 60) + '분' : ''} ${completeTime % 60}초 동안 명상을 진행했어요.`;

  return (
    <StyledMain>
      <StyledSection>
        <PageTitle>기록 저장하기</PageTitle>
        <Result width="wide" date={currentDate} message={message} />
        <Description>한 줄 기록 남기기</Description>
      </StyledSection>
    </StyledMain>
  );
}

export default MeditationRecord;
