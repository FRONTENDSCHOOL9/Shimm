import Button from '@components/button/Button';
import { StyledTimer, TimerDiv } from '@pages/meditation/timer/Timer.style';
import useModalStore from '@zustand/modal';
import useCompleteTimeStore from '@zustand/timer';
import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMemo, useCallback } from 'react';

function Timer({ selectedTime, handleMusic }) {
  const [time, setTime] = useState(selectedTime);
  const [hour, setHour] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const { setShowModal, setModalData } = useModalStore();
  const timerRef = useRef(null);
  const completeTimeSet = useCompleteTimeStore(state => state.completeTimeSet);
  const navigate = useNavigate();

  const formattedTime = useMemo(() => {
    const hour = Math.floor(time / 3600);
    const minute = Math.floor((time % 3600) / 60);
    const second = (time % 3600) % 60;

    return { hour, minute, second };
  }, [time]);

  useEffect(() => {
    setHour(formattedTime.hour);
    setMinutes(formattedTime.minute);
    setSeconds(formattedTime.second);
  }, [formattedTime]);

  const resetTimer = useCallback(() => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  }, []);

  const handleStart = useCallback(() => {
    if (!isStarted) {
      setTime(prevTime => prevTime - 1);
      timerRef.current = setInterval(() => {
        setTime(prevTime => prevTime - 1);
      }, 1000);
      setIsStarted(true);
      handleMusic(true);
    }
  }, [isStarted, handleMusic]);

  const handlePause = useCallback(() => {
    handleMusic(false);
    resetTimer();
    completeTimeSet(selectedTime - time);
    setShowModal(true);

    if (time > 0) {
      setModalData({
        children: (
          <span>
            명상이 아직 진행 중입니다. <br /> 정말 종료하시겠습니까?
          </span>
        ),
        button: 2,
        handleClose() {
          setShowModal(false);
          handleMusic(true);
          timerRef.current = setInterval(() => {
            setTime(prevTime => prevTime - 1);
          }, 1000);
        },
        handleOk() {
          setShowModal(false);
          setTime(0);
          navigate('/meditation/record');
        },
      });
    }
  }, [
    handleMusic,
    resetTimer,
    selectedTime,
    time,
    setShowModal,
    setModalData,
    navigate,
  ]);

  const handleFinish = useCallback(() => {
    handleMusic(false);
    setShowModal(true);
    setModalData({
      children: <span>명상이 종료되었습니다! 기록 페이지로 이동합니다.</span>,
      button: 1,
      handleOk() {
        setShowModal(false);
        navigate('/meditation/record');
      },
    });
  }, [handleMusic, setShowModal, setModalData, navigate]);

  return (
    <StyledTimer>
      <TimerDiv>
        {hour ? `${hour}:` : ''}
        {(minutes + '').padStart(2, '0')}:{(seconds + '').padStart(2, '0')}
        <br />
        <span>
          잘 하고 있어요! <br /> 집중하는 모습이 멋져요.
        </span>
      </TimerDiv>
      {isStarted ? (
        <Button size="full" bgColor="dark" handleClick={handlePause}>
          종료하기
        </Button>
      ) : (
        <Button size="full" handleClick={handleStart}>
          시작하기
        </Button>
      )}
    </StyledTimer>
  );
}

// function Timer({ selectedTime, handleMusic }) {
//   const [time, setTime] = useState(selectedTime);
//   const [hour, setHour] = useState(0);
//   const [minutes, setMinutes] = useState(0);
//   const [seconds, setSeconds] = useState(0);
//   const [isStarted, setIsStarted] = useState(false);
//   const { setShowModal, setModalData } = useModalStore();
//   const timerRef = useRef(null);
//   const completeTimeSet = useCompleteTimeStore(state => state.completeTimeSet);
//   const navigate = useNavigate();

//   useEffect(() => {
//     formatTime();
//   }, [time]);

//   function resetTimer() {
//     clearInterval(timerRef.current);
//     timerRef.current = null;
//   }

//   function formatTime() {
//     if (time < 0) {
//       setIsStarted(false);
//       setTime(0);
//       completeTimeSet(selectedTime);
//       handleFinish();
//     } else {
//       const hour = Math.floor(time / 3600);
//       const minute = Math.floor((time % 3600) / 60);
//       const second = (time % 3600) % 60;

//       setHour(hour);
//       setMinutes(minute);
//       setSeconds(second);
//     }
//   }

//   function handleStart() {
//     if (!isStarted) {
//       formatTime();
//       timerRef.current = setInterval(() => {
//         setTime(prevTime => prevTime - 1);
//       }, 1000);
//       setIsStarted(true);
//       handleMusic(true);
//     }
//   }

//   function handlePause() {
//     handleMusic(false);
//     resetTimer();
//     completeTimeSet(selectedTime - time);
//     setShowModal(true);

//     if (time > 0) {
//       setModalData({
//         children: (
//           <span>
//             명상이 아직 진행 중입니다. <br /> 정말 종료하시겠습니까?
//           </span>
//         ),
//         button: 2,
//         handleClose() {
//           setShowModal(false);
//           handleMusic(true);
//           timerRef.current = setInterval(() => {
//             setTime(prevTime => prevTime - 1);
//           }, 1000);
//         },
//         handleOk() {
//           setShowModal(false);
//           setTime(0);
//           navigate('/meditation/record');
//         },
//       });
//     }
//   }

//   function handleFinish() {
//     handleMusic(false);
//     setShowModal(true);
//     setModalData({
//       children: <span>명상이 종료되었습니다! 기록 페이지로 이동합니다.</span>,
//       button: 1,
//       handleOk() {
//         setShowModal(false);
//         navigate('/meditation/record');
//       },
//     });
//   }

//   return (
//     <StyledTimer>
//       <TimerDiv>
//         {hour ? `${hour}:` : ''}
//         {(minutes + '').padStart(2, '0')}:{(seconds + '').padStart(2, '0')}
//         <br />
//         <span>
//           잘 하고 있어요! <br /> 집중하는 모습이 멋져요.
//         </span>
//       </TimerDiv>
//       {isStarted ? (
//         <Button size="full" bgColor="dark" handleClick={handlePause}>
//           종료하기
//         </Button>
//       ) : (
//         <Button size="full" handleClick={handleStart}>
//           시작하기
//         </Button>
//       )}
//     </StyledTimer>
//   );
// }

Timer.propTypes = {
  selectedTime: PropTypes.number.isRequired,
  handleMusic: PropTypes.func,
};

export default Timer;
