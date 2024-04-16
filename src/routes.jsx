import { Navigate, createBrowserRouter } from 'react-router-dom';
import Layout from '@components/layout/layout/Layout';
import Home from '@pages/home/Home';
import Login from '@pages/users/Login';
import SignUp from '@pages/users/SignUp';
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
        path: 'users/signup',
        element: <SignUp />,
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
        path: 'community/new',
        element: <FeedNew />,
      },
      {
        path: 'community/edit',
        element: <FeedEdit />,
      },
      {
        path: 'mypage',
        element: <MyPage />,
      },
      {
        path: '/mypage/info',
        element: <MyInfo />,
      },
      {
        path: '/mypage/checkpw',
        element: <MyInfoCheck />,
      },
      {
        path: '/mypage/editprofile',
        element: <EditProfile />,
      },
      {
        path: '/mypage/archive',
        element: <MyRecord />,
      },
    ],
  },
]);

export default router;
