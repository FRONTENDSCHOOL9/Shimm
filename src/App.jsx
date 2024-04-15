import { RouterProvider } from 'react-router-dom';
import router from '@/routes';
import GlobalStyle from '@components/styles/GlobalStyle';
import { ReactCsspin } from 'react-csspin';
import 'react-csspin/dist/style.css';
import { Suspense } from 'react';

function App() {
  return (
    <>
      <GlobalStyle />
      <Suspense fallback={<ReactCsspin />}>
        <RouterProvider router={router} />
      </Suspense>
    </>
  );
}

export default App;
