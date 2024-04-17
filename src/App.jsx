import router from '@/routes';
import GlobalStyle from '@components/styles/GlobalStyle';
import { Suspense } from 'react';
import { ReactCsspin } from 'react-csspin';
import 'react-csspin/dist/style.css';
import { RouterProvider } from 'react-router-dom';

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
