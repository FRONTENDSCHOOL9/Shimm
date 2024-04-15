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
  const { selectedTime } = useSelectedTimeStore();
  const { isTimeSelected } = useIsTimeSelectedStore();
  const { selectedTheme } = useSelectedThemeStore();
  const { isThemeSelected } = useIsThemeSelectedStore();
  const navigate = useNavigate();

  function handleStart() {
    console.log(`${selectedTime} ${selectedTheme} 명상 시작`);
    navigate('/meditation/progress');
  }

  return (
    <StyledMain>
      <Cover></Cover>
      <StyledSection>
        <PageTitle>명상하기</PageTitle>
        <Description $align="center">원하는 시간을 선택해 주세요.</Description>
        <TimeSet />

        {isTimeSelected && (
          <>
            <Description $align="center">
              마음에 드는 테마를 선택해 주세요.
            </Description>
            <ThemeSet />
          </>
        )}

        {isTimeSelected && isThemeSelected && (
          <StyledDiv>
            <Button handleClick={handleStart} size="full">
              명상 시작하기
            </Button>
          </StyledDiv>
        )}
      </StyledSection>
    </StyledMain>
  );
}

export default MeditationMain;
