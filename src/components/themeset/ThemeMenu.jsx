import ModalWindow from '@components/modal/ModalWindow';
import { StyledUl } from '@components/themeset/ThemeSet.style';
import ThemeItem from '@components/themeset/themeitem/ThemeItem';
import {
  useIsThemeSelectedStore,
  useSelectedThemeStore,
} from '@zustand/themeSelection.mjs';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// mockup data (API 호출)
const themeItem = [
  {
    _id: 1,
    code: 'T01',
    nameKor: '숲',
    nameEng: 'Forest',
    paid: true,
  },
  {
    _id: 2,
    code: 'T02',
    nameKor: '바다',
    nameEng: 'Sea',
    paid: true,
  },
  {
    _id: 3,
    code: 'T03',
    nameKor: '아침',
    nameEng: 'Morning',
    paid: true,
  },
  {
    _id: 4,
    code: 'T04',
    nameKor: '노을',
    nameEng: 'Sunset',
    paid: false,
  },
  {
    _id: 5,
    code: 'T05',
    nameKor: '밤하늘',
    nameEng: 'Night Sky',
    paid: false,
  },
];

function ThemeMenu() {
  const { selectedThemeSet } = useSelectedThemeStore();
  const { isThemeSelectedSet } = useIsThemeSelectedStore();
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);

  function handleTheme(theme, isPaid) {
    selectedThemeSet(theme);
    isThemeSelectedSet(true);

    if (!isPaid) {
      setIsActive(true);
    }
  }

  const themeList = themeItem.map(item => (
    <ThemeItem key={item._id} item={item} handleTheme={handleTheme} />
  ));

  function handleClose() {
    setIsActive(false);
  }

  function handleOk() {
    navigate('/purchase');
  }

  return (
    <>
      <StyledUl>{themeList}</StyledUl>
      {isActive && (
        <ModalWindow handleClose={handleClose} handleOk={handleOk}>
          선택하신 테마는 유료테마입니다. <br />
          구매를 진행하시겠습니까?
        </ModalWindow>
      )}
    </>
  );
}

export default ThemeMenu;
