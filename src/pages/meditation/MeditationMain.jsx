import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelectedTimeStore } from '@zustand/timeSelection';
import { useIsTimeSelectedStore } from '@zustand/timeSelection';
import { useSelectedThemeStore } from '@zustand/themeSelection';
import { useIsThemeSelectedStore } from '@zustand/themeSelection';
import Button from '@components/button/Button';
import TimeSet from '@components/timeset/TimeSet';
import ThemeSet from '@components/themeset/ThemeSet';
import {
  StyledMain,
  Cover,
  StyledSection,
  PageTitle,
  Description,
  StyledDiv,
} from '@pages/meditation/Meditation.style';
import useUserStore from '@zustand/user.mjs';

function MeditationMain() {
  const { user } = useUserStore();
  const { selectedTimeSet } = useSelectedTimeStore();
  const { selectedThemeSet } = useSelectedThemeStore();
  const { isTimeSelected } = useIsTimeSelectedStore();
  const { isThemeSelected } = useIsThemeSelectedStore();
  const navigate = useNavigate();

  useEffect(() => {
    selectedTimeSet(null);
    selectedThemeSet(null);
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
