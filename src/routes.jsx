import { Navigate, createBrowserRouter } from 'react-router-dom';
import Layout from '@components/layout/layout/Layout';
import ErrorPage from '@pages/ErrorPage';
import Home from '@pages/home/Home';
import Login from '@pages/users/Login';
import Meditation from '@pages/meditation/Meditation';
import MeditationMain from '@pages/meditation/MeditationMain';
import MeditationProgress from '@pages/meditation/MeditationProgress';
import MeditationRecord from '@pages/meditation/MeditationRecord';
import Purchase from '@pages/purchase/Purchase';
import Community from '@pages/community/Community';
import { FeedDetail } from '@pages/community/feed/FeedDetail';
import FeedEdit from '@pages/community/feed/FeedEdit';
import { FeedNew } from '@pages/community/feed/FeedNew';
import EditProfile from '@pages/community/mypage/EditProfile';
import { MyInfo } from '@pages/community/mypage/MyInfo';
import MyInfoCheck from '@pages/community/mypage/MyInfoCheck';
import MyPage from '@pages/community/mypage/MyPage';
import MyRecord from '@pages/community/mypage/MyRecord';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
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
        path: 'users/login',
        element: <Login />,
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
        path: 'community/:id',
        element: <FeedDetail />,
      },
      {
        path: 'post',
        element: <FeedNew />,
      },
      {
        path: 'edit',
        element: <FeedEdit />,
      },
      {
        path: 'mypage',
        element: <MyPage />,
      },
      {
        path: 'myinfo',
        element: <MyInfo />,
      },
      {
        path: 'checktoinfo',
        element: <MyInfoCheck />,
      },
      {
        path: 'editprofile',
        element: <EditProfile />,
      },
      {
        path: 'archive',
        element: <MyRecord />,
      },
    ],
  },
]);

export default router;
