import router from '@/routes';
import GlobalStyle from '@components/styles/GlobalStyle';
import { Suspense } from 'react';
import Loading from '@components/loading/Loading';
import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<Loading />}>
          <RouterProvider router={router} />
        </Suspense>
      </QueryClientProvider>
    </>
  );
}

export default App;
