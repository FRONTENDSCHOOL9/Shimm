import useCustomAxios from '@hooks/useCustomAxios';
import { Menu, StyledUl } from '@pages/meditation/themeset/ThemeSet.style';
import ThemeItem from '@pages/meditation/themeset/themeitem/ThemeItem';
import useModalStore from '@zustand/modal';
import {
  useIsThemeSelectedStore,
  useSelectedThemeStore,
} from '@zustand/themeSelection';
import useUserStore from '@zustand/user';
import { useEffect, useState } from 'react';
import { ReactCsspin } from 'react-csspin';
import 'react-csspin/dist/style.css';
import { useNavigate } from 'react-router-dom';

function ThemeMenu() {
  const { user } = useUserStore();
  const { setShowModal, setModalData } = useModalStore();
  const { selectedThemeSet } = useSelectedThemeStore();
  const { isThemeSelectedSet } = useIsThemeSelectedStore();
  const [isLoading, setIsLoading] = useState(false);
  const [themeData, setThemeData] = useState();
  const [orderData, setOrderData] = useState();
  const navigate = useNavigate();
  const axios = useCustomAxios();
  // const navigationType = useNavigationType();

  useEffect(() => {
    fetchThemes();
    if (user) {
      fetchOrders();
    }
  }, []);

  // useEffect(() => {
  //   if (navigationType === 'POP') {
  //     console.log('뒤로가기');
  //   }
  // }, [navigationType]);

  async function fetchThemes() {
    try {
      setIsLoading(true);
      const res = await axios('/products?sort={"_id": 1}');
      setThemeData(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }

  async function fetchOrders() {
    try {
      const res = await axios('/orders');
      setOrderData(res.data);
    } catch (err) {
      console.error(err);
    }
  }

  function handleTheme(theme, id, background, isNotPaid) {
    selectedThemeSet({
      name: theme,
      id,
      background,
    });

    if (isNotPaid) {
      setShowModal(true);
      setModalData({
        children: (
          <span>
            선택하신 테마는 유료테마입니다. <br />
            구매를 진행하시겠습니까?
          </span>
        ),
        handleClose() {
          setShowModal(false);
        },
        handleOk() {
          setShowModal(false);
          navigate('/purchase');
        },
      });
    } else {
      isThemeSelectedSet(true);
    }
  }

  let orderArr = [];
  if (user) {
    orderData?.item?.map(order =>
      order.products.map(product => orderArr.push(product._id)),
    );
  } else {
    orderArr = [1, 2, 3];
  }

  let themeArr = [];
  themeData?.item?.map(item => themeArr.push(item._id));
  themeArr = [...themeArr.filter(item => !orderArr.includes(item))];

  function checkIsNotPaid(_id) {
    if (themeArr.includes(_id)) {
      return true;
    } else {
      return false;
    }
  }

  const themeList = themeData?.item?.map(item => (
    <ThemeItem
      key={item._id}
      item={item}
      handleTheme={handleTheme}
      isNotPaid={checkIsNotPaid(item._id)}
    />
  ));

  return (
    <Menu>
      {isLoading && <ReactCsspin />}
      {themeData?.item && <StyledUl>{themeList}</StyledUl>}
    </Menu>
  );
}

export default ThemeMenu;
