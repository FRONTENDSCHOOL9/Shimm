// import Button from '@components/button/Button';

import useClickOutside from '@hooks/useClickOutside.mjs';
import { useRef, useState } from 'react';
import styled from 'styled-components';

const MainStyle = styled.main`
  flex-grow: 1;
  box-shadow: inset 0 0 5px blue;
  display: flex;
`;

const Cover = styled.section`
  flex-grow: 1;
  background-color: salmon;
  box-shadow: inset 0 0 20px black;
  display: none;

  @media (min-width: 740px) {
    display: block;
    flex-grow: 0;
    width: 50%;
  }
`;

const Settings = styled.section`
  flex-grow: 1;
  margin: 0 auto;
  max-width: 500px;
  box-shadow: inset 0 0 5px red;
  padding: 40px 40px;
  box-sizing: border-box;
  text-align: center;
`;

const PageTitle = styled.h2`
  font-size: 3rem;
  font-weight: 600;
  margin-bottom: 40px;
`;

const TimeSetting = styled.div`
  box-shadow: inset 0 0 5px red;
  margin-bottom: 40px;
`;

const Description = styled.h3`
  font-size: 2rem;
  font-weight: 200;
  margin-bottom: 20px;
`;

const TimePicker = styled.div`
  font-size: 1.8rem;
  font-weight: 600;
  position: relative;
  text-align: left;
`;

const Default = styled.div`
  border-radius: 8px;
  border: 1px solid #000;
  box-sizing: border-box;
  color: ${props => (props.$active === true ? '#7BB67F' : 'unset')};
`;

const Dropdown = styled.ul`
  width: 100%;
  position: absolute;
  top: 140%;
  left: 0;
  overflow: hidden;

  border: ${props => (props.$active === true ? '1px solid #000' : 'unset')};
  box-sizing: border-box;
  border-radius: 8px;
  max-height: ${props => (props.$active === true ? 'unset' : 0)};
`;

const Button = styled.button`
  width: 100%;
  padding: 12px 15px;
  box-sizing: border-box;
  color: ${props => (props.$active === true ? '#7BB67F' : 'unset')};

  &:focus {
    border: 1px solid rgba(115, 146, 125, 1);
    border-radius: 8px;
    box-sizing: border-box;
  }
`;

const List = styled.li`
  ${Button}:hover {
    background-color: #f0f5ed;
  }
`;

const ThemeSetting = styled.div`
  box-shadow: inset 0 0 5px blue;
`;

const ThemePicker = styled.div`
  aspect-ratio: 1/1;
  box-shadow: inset 0 0 5px purple;
`;

function Meditation() {
  const [isActive, setIsActive] = useState(false);
  const [selectedTime, setSelectedTime] = useState();
  const [isTimeSelected, setIsTimeSelected] = useState(false);
  const menuRef = useRef('menu');
  const [open, setOpen] = useState(false);

  useClickOutside(menuRef, () => {
    if (!selectedTime) {
      setIsTimeSelected(false);
    } else {
      setIsTimeSelected(true);
    }
    setIsActive(false);
  });

  function handleClick() {
    setIsTimeSelected(false);
    setIsActive(!isActive);
  }

  function handleSelect(e) {
    setSelectedTime(e.target.value);
    setIsActive(false);
    setIsTimeSelected(true);
  }

  return (
    <MainStyle>
      <Cover>이미지</Cover>
      <Settings>
        <PageTitle>명상하기</PageTitle>
        <TimeSetting>
          <Description>원하는 시간을 선택해 주세요.</Description>
          <TimePicker ref={menuRef} onClick={() => setIsActive(!isActive)}>
            <Default>
              <Button type="button" onClick={handleClick} $active={isActive}>
                {selectedTime ? selectedTime : '시간을 선택해 주세요'}
              </Button>
            </Default>
            {isActive && (
              <Dropdown $active={isActive}>
                <List>
                  <Button type="button" onClick={handleSelect} value="5분">
                    5분 (기본)
                  </Button>
                </List>
                <List>
                  <Button type="button" onClick={handleSelect} value="10분">
                    10분
                  </Button>
                </List>
                <List>
                  <Button type="button" onClick={handleSelect} value="30분">
                    30분
                  </Button>
                </List>
                <List>
                  <Button type="button" onClick={handleSelect} value="1시간">
                    1시간
                  </Button>
                </List>
              </Dropdown>
            )}
          </TimePicker>
        </TimeSetting>

        {isTimeSelected && (
          <ThemeSetting>
            <Description>마음에 드는 테마를 선택해 주세요.</Description>
            <ThemePicker></ThemePicker>
          </ThemeSetting>
        )}

        {/* <Button type="button" color="primary">
        명상 시작하기
      </Button> */}
      </Settings>
    </MainStyle>
  );
}

export default Meditation;
