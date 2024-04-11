import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '@components/button/Button';
import useCompleteTimeStore from '@zustand/timer.mjs';

const StyledTimer = styled.div`
  font-size: 6rem;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
`;

const TimerButton = styled(Button)`
  display: block;
  box-shadow: inset 0 0 20px red;
`;

function Timer({ selectedTime, handleFinish }) {
  const [time, setTime] = useState(selectedTime);
  const [hour, setHour] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const timerRef = useRef(null);
  const completeTimeSet = useCompleteTimeStore(state => state.completeTimeSet);

  useEffect(() => {
    formatTime();
  }, [time]);

  function resetTimer() {
    clearInterval(timerRef.current);
    timerRef.current = null;
  }

  function formatTime() {
    if (time < 0) {
      completeTimeSet(selectedTime);
      resetTimer();
      alert('명상이 종료되었습니다!');
      handleFinish();
      setIsStarted(false);
    } else {
      const hour = Math.floor(time / 3600);
      const minute = Math.floor((time % 3600) / 60);
      const second = (time % 3600) % 60;

      setHour(hour);
      setMinutes(minute);
      setSeconds(second);
    }
  }

  function handleStart() {
    if (!isStarted) {
      formatTime();
      timerRef.current = setInterval(() => {
        setTime(prevTime => prevTime - 1);
      }, 1000);
      setIsStarted(true);
    }
  }

  function handleStop() {
    completeTimeSet(selectedTime - time);
    resetTimer();

    if (time > 0) {
      const response = confirm(
        time > 0 && '시간이 남았습니다. 정말 종료하시겠습니까?',
      );
      if (response) {
        setTime(0);
        handleFinish();
      } else {
        timerRef.current = setInterval(() => {
          setTime(prevTime => prevTime - 1);
        }, 1000);
      }
    } else {
      alert('명상이 종료되었습니다!');
      handleFinish();
    }
  }

  handleStart();

  return (
    <StyledTimer>
      {hour ? `${hour}:` : ''}
      {(minutes + '').padStart(2, '0')}:{(seconds + '').padStart(2, '0')}
      <TimerButton handleClick={handleStop} display="block">
        종료하기
      </TimerButton>
    </StyledTimer>
  );
}

Timer.propTypes = {
  selectedTime: PropTypes.number.isRequired,
  handleFinish: PropTypes.func.isRequired,
};

export default Timer;
