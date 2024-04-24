import Button from '@components/button/Button';
import {
  Cover,
  Description,
  PageTitle,
  StyledDiv,
  StyledMain,
  StyledSection,
} from '@pages/meditation/Meditation.style';
import ThemeSet from '@pages/meditation/themeset/ThemeSet';
import TimeSet from '@pages/meditation/timeset/TimeSet';
import {
  useIsThemeSelectedStore,
  useSelectedThemeStore,
} from '@zustand/themeSelection';
import {
  useIsTimeSelectedStore,
  useSelectedTimeStore,
} from '@zustand/timeSelection';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function MeditationMain() {
  const { selectedTimeSet } = useSelectedTimeStore();
  const { selectedThemeSet } = useSelectedThemeStore();
  const { isTimeSelected, isTimeSelectedSet } = useIsTimeSelectedStore();
  const { isThemeSelected, isThemeSelectedSet } = useIsThemeSelectedStore();
  const navigate = useNavigate();

  useEffect(() => {
    selectedTimeSet(null);
    selectedThemeSet(null);
    isTimeSelectedSet(null);
    isThemeSelectedSet(null);
  }, []);

  function handleStart() {
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
