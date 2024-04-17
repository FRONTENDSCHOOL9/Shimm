import router from '@/routes';
import GlobalStyle from '@components/styles/GlobalStyle';
import { Suspense } from 'react';
import Loading from '@components/loading/Loading';
import { RouterProvider } from 'react-router-dom';

function App() {
  return (
    <>
      <GlobalStyle />
      <Suspense fallback={<Loading />}>
        <RouterProvider router={router} />
      </Suspense>
    </>
  );
}

export default App;
