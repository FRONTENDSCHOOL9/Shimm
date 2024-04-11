import {
  StyledSection,
  StyledMain,
  PageTitle,
  StyledLabel,
  StyledInput,
  StyledError,
  SaveButtonContainer,
} from '@pages/meditation/Meditation.style';
import Result from '@components/result/Result';
import useCompleteTimeStore from '@zustand/timer.mjs';
import { useSelectedTimeStore } from '@zustand/timeSelection.mjs';
import { useForm } from 'react-hook-form';
import Button from '@components/button/Button';

function MeditationRecord() {
  const selectedTime = useSelectedTimeStore(state => state.selectedTime);
  const completeTime = useCompleteTimeStore(state => state.completeTime);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setFocus,
  } = useForm();

  const date = new Date();
  const currentDate =
    date.getFullYear() +
    '년 ' +
    (date.getMonth() + 1) +
    '월 ' +
    date.getDate() +
    '일';

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

  const message =
    time === completeTime
      ? `목표한 ${selectedTime} 명상을 완료했어요!`
      : `${Math.floor(completeTime / 60) ? Math.floor(completeTime / 60) + '분' : ''} ${completeTime % 60}초 동안 명상을 진행했어요.`;

  function onSubmit(formData) {
    try {
      console.log(formData);
      reset();
    } catch (err) {
      console.error(err);
      setFocus();
    }
  }

  return (
    <StyledMain>
      <StyledSection>
        <PageTitle>기록 저장하기</PageTitle>
        <Result width="wide" date={currentDate} message={message} />
        <form onSubmit={handleSubmit(onSubmit)}>
          <StyledLabel htmlFor="comment">한 줄 기록 남기기</StyledLabel>
          <StyledInput
            type="text"
            id="comment"
            placeholder="소감을 입력하세요..."
            {...register('comment', {
              required: '소감을 입력하세요.',
              minLength: {
                value: 2,
                message: '두 글자 이상 입력하세요.',
              },
            })}
          />
          {errors && <StyledError>{errors.comment?.message}</StyledError>}
          <SaveButtonContainer>
            <Button type="submit" color="dark">
              저장하기
            </Button>
          </SaveButtonContainer>
        </form>
      </StyledSection>
    </StyledMain>
  );
}

export default MeditationRecord;
