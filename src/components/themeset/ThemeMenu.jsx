import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useCustomAxios from '@hooks/useCustomAxios';
import {
  useIsThemeSelectedStore,
  useSelectedThemeStore,
} from '@zustand/themeSelection';
import { ReactCsspin } from 'react-csspin';
import 'react-csspin/dist/style.css';
import ModalWindow from '@components/modal/ModalWindow';
import ThemeItem from '@components/themeset/themeitem/ThemeItem';
import { StyledUl } from '@components/themeset/ThemeSet.style';

function ThemeMenu() {
  const { selectedThemeSet } = useSelectedThemeStore();
  const { isThemeSelectedSet } = useIsThemeSelectedStore();
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState();
  const axios = useCustomAxios();

  useEffect(() => {
    fetchThemes();
  }, []);

  async function fetchThemes() {
    try {
      setIsLoading(true);
      const res = await axios(`/products?sort={"_id": 1}`);
      setIsLoading(false);
      setData(res.data);
    } catch (err) {
      console.error(err);
    }
  }

  function handleTheme(theme, isPaid) {
    selectedThemeSet(theme);
    isThemeSelectedSet(true);

    if (!isPaid) {
      setIsActive(true);
    }
  }

  const themeList = data?.item?.map(item => (
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
      {isLoading && <ReactCsspin />}
      {data?.item && <StyledUl>{themeList}</StyledUl>}
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
