import Layout from '@components/layout/layout/Layout';
import Community from '@pages/community/Community';
import { FeedDetail } from '@pages/community/feed/FeedDetail';
import Home from '@pages/home/Home';
import Meditation from '@pages/meditation/Meditation';
import MeditationMain from '@pages/meditation/MeditationMain';
import MeditationProgress from '@pages/meditation/MeditationProgress';
import MeditationRecord from '@pages/meditation/MeditationRecord';
import Purchase from '@pages/purchase/Purchase';
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
        children: [
          {
            index: true,
            element: <MeditationMain />,
          },
          {
            path: 'progress',
            element: <MeditationProgress />,
          },
          {
            path: 'record',
            element: <MeditationRecord />,
          },
        ],
      },
      {
        path: 'purchase',
        element: <Purchase />,
      },
      {
        path: 'community',
        element: <Community />,
      },
      {
        path: 'detail/:id',
        element: <FeedDetail />,
      },
    ],
  },
]);

export default router;
