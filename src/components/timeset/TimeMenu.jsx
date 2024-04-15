import useClickOutside from '@hooks/useClickOutside';
import { useRef, useState } from 'react';
import {
  useIsTimeSelectedStore,
  useSelectedTimeStore,
} from '@zustand/timeSelection';
import {
  Menu,
  SelectButton,
  StyledUl,
  StyledLi,
  StyledButton,
} from '@components/timeset/TimeSet.style';

function TimeMenu() {
  const menuRef = useRef('menu');
  const [isActive, setIsActive] = useState(false);
  const { selectedTime, selectedTimeSet } = useSelectedTimeStore();
  const { isTimeSelectedSet } = useIsTimeSelectedStore();

  useClickOutside(menuRef, () => {
    if (!selectedTime) {
      isTimeSelectedSet(false);
    } else {
      isTimeSelectedSet(true);
    }
    setIsActive(false);
  });

  function handleClick() {
    if (!isActive) {
      if (selectedTime) {
        isTimeSelectedSet(false);
      }
      setIsActive(true);
    } else {
      if (selectedTime) {
        isTimeSelectedSet(true);
      }
      setIsActive(false);
    }
  }

  function handleSelect(e) {
    selectedTimeSet(e.target.value);
    setIsActive(false);
    isTimeSelectedSet(true);
  }

  return (
    <Menu ref={menuRef}>
      <SelectButton type="button" onClick={handleClick} $active={isActive}>
        {selectedTime ? selectedTime : '시간을 선택해 주세요'}
      </SelectButton>
      {isActive && (
        <StyledUl $active={isActive}>
          <StyledLi>
            <StyledButton type="button" onClick={handleSelect} value="5분">
              5분 (기본)
            </StyledButton>
          </StyledLi>
          <StyledLi>
            <StyledButton type="button" onClick={handleSelect} value="10분">
              10분
            </StyledButton>
          </StyledLi>
          <StyledLi>
            <StyledButton type="button" onClick={handleSelect} value="30분">
              30분
            </StyledButton>
          </StyledLi>
          <StyledLi>
            <StyledButton type="button" onClick={handleSelect} value="1시간">
              1시간
            </StyledButton>
          </StyledLi>
        </StyledUl>
      )}
    </Menu>
  );
}

export default TimeMenu;
