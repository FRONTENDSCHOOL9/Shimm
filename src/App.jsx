import { RouterProvider } from 'react-router-dom';
import router from '@/routes';
import GlobalStyle from '@components/styles/GlobalStyle';
import { ReactCsspin } from 'react-csspin';
import 'react-csspin/dist/style.css';
import { Suspense } from 'react';
import ModalWindow from '@components/modal/ModalWindow';
import useModalStore from '@zustand/modal.mjs';

function App() {
  const { showModal, modalData, setShowModal } = useModalStore();

  return (
    <>
      <GlobalStyle />
      <Suspense fallback={<ReactCsspin />}>
        <RouterProvider router={router} />
        {showModal && (
          <ModalWindow
            handleClose={modalData.handleClose}
            handleOk={modalData.handleOk}
          >
            {modalData.children}
          </ModalWindow>
        )}
      </Suspense>
    </>
  );
}

export default App;
