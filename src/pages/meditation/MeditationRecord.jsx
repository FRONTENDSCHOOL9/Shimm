import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import useCustomAxios from '@hooks/useCustomAxios';
import useUserStore from '@zustand/user';
import useCompleteTimeStore from '@zustand/timer';
import { useSelectedTimeStore } from '@zustand/timeSelection';
import { useSelectedThemeStore } from '@zustand/themeSelection';
import Result from '@components/result/Result';
import Button from '@components/button/Button';
import ModalWindow from '@components/modal/ModalWindow';
import {
  Form,
  StyledSection,
  StyledMain,
  PageTitle,
  StyledLabel,
  StyledInput,
  StyledError,
  SaveButtonContainer,
} from '@pages/meditation/Meditation.style';

function MeditationRecord() {
  const { selectedTime, selectedTimeSet } = useSelectedTimeStore();
  const { selectedTheme, selectedThemeSet } = useSelectedThemeStore();
  const { completeTime, completeTimeSet } = useCompleteTimeStore();
  const { user } = useUserStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setFocus,
  } = useForm();
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const axios = useCustomAxios();

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

  async function onSubmit(formData) {
    setIsClicked(true);

    if (user) {
      try {
        formData.type = 'meditation';
        formData.theme = selectedTheme.name;
        formData.time = `${Math.floor(completeTime / 60) ? Math.floor(completeTime / 60) + '분' : ''} ${completeTime % 60}초`;

        const res = await axios.post('/posts', formData);
        console.log(res);
        reset();
        setIsClicked(false);
        selectedTimeSet(null);
        selectedThemeSet(null);
        completeTimeSet(0);
        navigate('/mypage');
      } catch (err) {
        console.error(err);
        setFocus();
      }
    }
  }

  function handleClose() {
    setIsClicked(false);
  }

  function handleOk() {
    setIsClicked(false);
    navigate('/users/login', { state: { from: location.pathname } });
  }

  return (
    <StyledMain>
      <StyledSection>
        <PageTitle>기록 저장하기</PageTitle>
        <Result width="wide" date={currentDate} message={message} />
        <Form onSubmit={handleSubmit(onSubmit)}>
          <StyledLabel htmlFor="content">한 줄 기록 남기기</StyledLabel>
          <StyledInput
            type="text"
            id="content"
            placeholder="소감을 입력하세요..."
            {...register('content', {
              required: '내용을 입력해 주세요.',
              minLength: {
                value: 2,
                message: '두 글자 이상 입력해 주세요.',
              },
            })}
          />
          {errors && <StyledError>{errors.comment?.message}</StyledError>}
          <SaveButtonContainer>
            <Button type="submit" bgColor="primary" size="full">
              저장하기
            </Button>
          </SaveButtonContainer>
        </Form>
        {isClicked && !user && (
          <ModalWindow handleClose={handleClose} handleOk={handleOk}>
            기록을 저장하려면 로그인해야 합니다.
            <br />
            로그인하시겠습니까?
          </ModalWindow>
        )}
      </StyledSection>
    </StyledMain>
  );
}

export default MeditationRecord;
