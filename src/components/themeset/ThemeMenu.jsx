import { StyledUl } from '@components/themeset/ThemeSet.style';
import ThemeItem from '@components/themeset/themeitem/ThemeItem';
import {
  useIsThemeSelectedStore,
  useSelectedThemeStore,
} from '@zustand/themeSelection.mjs';

// mockup data (API 호출)
const themeItem = [
  {
    _id: 1,
    nameKor: '숲',
    nameEng: 'Forest',
    paid: true,
  },
  {
    _id: 2,
    nameKor: '바다',
    nameEng: 'Sea',
    paid: true,
  },
  {
    _id: 3,
    nameKor: '아침',
    nameEng: 'Morning',
    paid: true,
  },
  {
    _id: 4,
    nameKor: '밤하늘',
    nameEng: 'Night Sky',
    paid: false,
  },
];

function ThemeMenu() {
  const selectedThemeSet = useSelectedThemeStore(
    state => state.selectedThemeSet,
  );
  const isThemeSelectedSet = useIsThemeSelectedStore(
    state => state.isThemeSelectedSet,
  );

  function handleTheme(theme) {
    selectedThemeSet(theme);
    isThemeSelectedSet(true);
  }

  const themeList = themeItem.map(item => (
    <ThemeItem key={item._id} item={item} handleTheme={handleTheme} />
  ));

  return <StyledUl>{themeList}</StyledUl>;
}

export default ThemeMenu;
