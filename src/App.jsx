import { RouterProvider } from 'react-router-dom';
import router from '@/routes';
import GlobalStyle from '@components/styles/GlobalStyle';
import { Suspense } from 'react';
import ModalWindow from '@components/modal/ModalWindow';
import useModalStore from '@zustand/modal.mjs';
import Loading from '@components/loading/Loading';

function App() {
  const { showModal, modalData } = useModalStore();

  return (
    <>
      <GlobalStyle />
      <Suspense fallback={<Loading />}>
        <RouterProvider router={router} />
        {showModal && (
          <ModalWindow
            twoButton={modalData.twoButton}
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
