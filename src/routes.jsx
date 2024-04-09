import Layout from '@components/layout/Layout';
import Community from '@pages/community/Community';
import Home from '@pages/home/Home';
import Meditation from '@pages/meditation/Meditation';
import { Navigate, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Navigate to="/home" />,
      },
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'meditation',
        element: <Meditation />,
      },
      {
        path: 'community',
        element: <Community />,
      },
    ],
  },
]);

export default router;
