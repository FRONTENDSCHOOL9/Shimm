import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@components/button/Button';
import useCompleteTimeStore from '@zustand/timer.mjs';
import ModalWindow from '@components/modal/ModalWindow';
import { useNavigate } from 'react-router-dom';
import { StyledTimer } from '@components/timer/Timer.style';

function Timer({ selectedTime }) {
  const [time, setTime] = useState(selectedTime);
  const [hour, setHour] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const timerRef = useRef(null);
  const completeTimeSet = useCompleteTimeStore(state => state.completeTimeSet);
  const navigate = useNavigate();

  useEffect(() => {
    formatTime();
  }, [time]);

  function resetTimer() {
    clearInterval(timerRef.current);
    timerRef.current = null;
  }

  function formatTime() {
    if (time < 0) {
      setIsStarted(false);
      setIsFinished(true);
      completeTimeSet(selectedTime);
    } else {
      const hour = Math.floor(time / 3600);
      const minute = Math.floor((time % 3600) / 60);
      const second = (time % 3600) % 60;

      setHour(hour);
      setMinutes(minute);
      setSeconds(second);
    }
  }

  (function handleStart() {
    if (!isStarted) {
      formatTime();
      timerRef.current = setInterval(() => {
        setTime(prevTime => prevTime - 1);
      }, 1000);
      setIsStarted(true);
    }
  })();

  function handlePause() {
    setIsPaused(true);
    completeTimeSet(selectedTime - time);
    resetTimer();
  }

  function handleRestart() {
    setIsPaused(false);
    timerRef.current = setInterval(() => {
      setTime(prevTime => prevTime - 1);
    }, 1000);
  }

  function handleStop() {
    setTime(0);
    navigate('/meditation/record');
  }

  return (
    <StyledTimer>
      {hour ? `${hour}:` : ''}
      {(minutes + '').padStart(2, '0')}:{(seconds + '').padStart(2, '0')}
      <Button size="full" handleClick={handlePause}>
        종료하기
      </Button>
      {time > 0 && isPaused && (
        <ModalWindow handleClose={handleRestart} handleOk={handleStop}>
          명상이 아직 진행 중입니다. <br /> 정말 종료하시겠습니까?
        </ModalWindow>
      )}
      {isFinished && (
        <ModalWindow
          twoButton={false}
          handleOk={() => navigate('/meditation/record')}
        >
          명상이 종료되었습니다! 기록 페이지로 이동합니다.
        </ModalWindow>
      )}
    </StyledTimer>
  );
}

Timer.propTypes = {
  selectedTime: PropTypes.number.isRequired,
};

export default Timer;
