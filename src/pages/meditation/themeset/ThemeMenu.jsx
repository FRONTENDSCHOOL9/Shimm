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

  useEffect(() => {
    fetchThemes();
    if (user) {
      fetchOrders();
    }
  }, []);

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

  function handleTheme(theme, id, price, background, url, isNotPaid) {
    selectedThemeSet({
      name: theme,
      id,
      background,
      music: url,
    });

    if (price > 0 && isNotPaid) {
      setShowModal(true);
      setModalData({
        children: (
          <span>
            선택하신 테마는 유료테마입니다. <br />
            구매를 진행하시겠습니까?
          </span>
        ),
        button: 2,
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
  let themeArr = [];
  if (user) {
    orderData?.item?.map(order =>
      order.products.map(product => orderArr.push(product._id)),
    );
  }
  themeData?.item?.map(item => themeArr.push(item._id));
  themeArr = [...themeArr.filter(item => !orderArr.includes(item))];

  function checkIsNotPaid(_id) {
    if (themeArr.includes(_id)) {
      return true;
    } else {
      return false;
    }
  }

  async function handleDelete(id) {
    try {
      const res = await axios.delete(`/seller/products/${id}`);
      setShowModal(true);
      setModalData({
        children: <span>테마가 삭제되었습니다.</span>,
        button: 1,
        handleOk() {
          setShowModal(false);
        },
      });
      fetchThemes();
    } catch (err) {
      setShowModal(true);
      setModalData({
        children: <span>삭제 중 오류가 발생했습니다! 다시 시도해 보세요.</span>,
        button: 1,
        handleOk() {
          setShowModal(false);
        },
      });
    }
  }

  const themeList = themeData?.item?.map(item => (
    <ThemeItem
      key={item._id}
      item={item}
      handleTheme={handleTheme}
      handleDelete={handleDelete}
      isNotPaid={checkIsNotPaid(item._id)}
    />
  ));

  return <Menu>{themeData?.item && <StyledUl>{themeList}</StyledUl>}</Menu>;
}

export default ThemeMenu;
