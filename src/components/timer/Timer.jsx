import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '@components/button/Button';

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

function Timer({ selectedTime }) {
  const [time, setTime] = useState(selectedTime);
  const [hour, setHour] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    formatTime();
  }, [time]);

  function resetTimer() {
    clearInterval(timerRef.current);
    timerRef.current = null;
  }

  function formatTime() {
    if (time < 0) {
      resetTimer();
      alert('종료되었습니다!');
      setIsStarted(false);
    } else {
      const hour = Math.floor(time / 3600);
      const minute = Math.floor((time % 3600) / 60);
      const second = Math.floor((time % 3600) % 60);

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
    resetTimer();
    const response = confirm(
      time > 0 && '시간이 남았습니다. 정말 종료하시겠습니까?',
    );
    if (response) {
      setTime(0);
    } else {
      timerRef.current = setInterval(() => {
        setTime(prevTime => prevTime - 1);
      }, 1000);
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
};

export default Timer;
