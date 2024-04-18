import Header from '@components/layout/header/Header';
import { Wrapper } from '@components/layout/layout/Layout.style';
import ModalWindow from '@components/modal/ModalWindow';
import useModalStore from '@zustand/modal';
import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

function Layout() {
  const { showModal, modalData, setShowModal } = useModalStore();
  const location = useLocation();

  useEffect(() => {
    if (showModal) {
      setShowModal(false);
    }
  }, [location]);

  return (
    <>
      <Wrapper>
        <Header />
        <Outlet />
      </Wrapper>
      {showModal && (
        <ModalWindow
          button={modalData.button}
          handleClose={modalData.handleClose}
          handleOk={modalData.handleOk}
        >
          {modalData.children}
        </ModalWindow>
      )}
    </>
  );
}

export default Layout;
