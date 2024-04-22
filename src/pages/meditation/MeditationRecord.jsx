import Button from '@components/button/Button';
import Input from '@components/input/Input';
import Result from '@components/result/Result';
import useCustomAxios from '@hooks/useCustomAxios';
import {
  Form,
  PageTitle,
  SaveButtonContainer,
  StyledError,
  StyledLabel,
  StyledMain,
  StyledSection,
} from '@pages/meditation/Meditation.style';
import useModalStore from '@zustand/modal';
import { useSelectedThemeStore } from '@zustand/themeSelection';
import { useSelectedTimeStore } from '@zustand/timeSelection';
import useCompleteTimeStore from '@zustand/timer';
import useUserStore from '@zustand/user';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';

function MeditationRecord() {
  const { selectedTime, selectedTimeSet } = useSelectedTimeStore();
  const { selectedTheme, selectedThemeSet } = useSelectedThemeStore();
  const { completeTime, completeTimeSet } = useCompleteTimeStore();
  const { setShowModal, setModalData } = useModalStore();
  const { user } = useUserStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
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
    if (user) {
      try {
        formData.type = 'meditation';
        formData.extra = {
          theme: selectedTheme.name,
          background: selectedTheme.background,
          time: `${Math.floor(completeTime / 60) ? Math.floor(completeTime / 60) + '분' : ''} ${completeTime % 60}초`,
        };

        const res = await axios.post('/posts', formData);

        reset();
        selectedTimeSet(null);
        selectedThemeSet(null);
        completeTimeSet(0);

        setShowModal(true);
        setModalData({
          children: <span>명상 기록이 저장되었습니다.</span>,
          button: 1,
          handleOk() {
            setShowModal(false);
            navigate('/mypage');
          },
        });
      } catch (err) {
        setShowModal(true);
        setModalData({
          children: (
            <span>
              이미 기록된 명상입니다.
              <br />
              다시 시도해 주세요.
            </span>
          ),
          button: 1,
          handleOk() {
            setShowModal(false);
            navigate('/meditation');
          },
        });
      }
    } else {
      setShowModal(true);
      setModalData({
        children: (
          <span>
            기록을 저장하려면 로그인해야 합니다.
            <br />
            로그인하시겠습니까?
          </span>
        ),
        button: 2,
        handleClose() {
          setShowModal(false);
        },
        handleOk() {
          setShowModal(false);
          navigate('/users/login', { state: { from: location.pathname } });
        },
      });
    }
  }

  return (
    <StyledMain>
      <StyledSection>
        <PageTitle>기록 저장하기</PageTitle>
        <Result width="wide" date={currentDate} message={message} />
        <Form onSubmit={handleSubmit(onSubmit)}>
          <StyledLabel htmlFor="content">한 줄 기록 남기기</StyledLabel>
          <Input
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
          {errors && <StyledError>{errors.content?.message}</StyledError>}
          <SaveButtonContainer>
            <Button type="submit" bgColor="primary" size="full">
              저장하기
            </Button>
          </SaveButtonContainer>
        </Form>
      </StyledSection>
    </StyledMain>
  );
}

export default MeditationRecord;
