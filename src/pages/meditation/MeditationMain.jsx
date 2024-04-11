import Button from '@components/button/Button';
import TimeSet from '@components/timeset/TimeSet';
import ThemeSet from '@components/themeset/ThemeSet';
import { useNavigate } from 'react-router-dom';
import {
  useIsTimeSelectedStore,
  useSelectedTimeStore,
} from '@zustand/timeSelection';
import {
  StyledMain,
  Cover,
  StyledSection,
  PageTitle,
  Description,
  StyledDiv,
} from '@pages/meditation/Meditation.style';
import {
  useIsThemeSelectedStore,
  useSelectedThemeStore,
} from '@zustand/themeSelection.mjs';

function MeditationMain() {
  const selectedTime = useSelectedTimeStore(state => state.selectedTime);
  const isTimeSelected = useIsTimeSelectedStore(state => state.isTimeSelected);
  const selectedTheme = useSelectedThemeStore(state => state.selectedTheme);
  const isThemeSelected = useIsThemeSelectedStore(
    state => state.isThemeSelected,
  );
  const navigate = useNavigate();

  function handleStart() {
    console.log(`${selectedTime} ${selectedTheme} 명상 시작`);
    navigate('/meditation/progress');
  }

  return (
    <StyledMain>
      <Cover>이미지</Cover>
      <StyledSection>
        <PageTitle>명상하기</PageTitle>
        <Description>원하는 시간을 선택해 주세요.</Description>
        <TimeSet />

        {isTimeSelected && (
          <>
            <Description>마음에 드는 테마를 선택해 주세요.</Description>
            <ThemeSet />
          </>
        )}

        {isTimeSelected && isThemeSelected && (
          <StyledDiv>
            <Button handleClick={handleStart}>명상 시작하기</Button>
          </StyledDiv>
        )}
      </StyledSection>
    </StyledMain>
  );
}

export default MeditationMain;
