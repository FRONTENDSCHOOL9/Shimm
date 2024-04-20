import Layout from '@components/layout/layout/Layout';
import ErrorPage from '@pages/ErrorPage';
import UploadTheme from '@pages/admin/UploadTheme';
import Community from '@pages/community/Community';
import { FeedDetail } from '@pages/community/feed/FeedDetail';
import FeedEdit from '@pages/community/feed/FeedEdit';
import { FeedNew } from '@pages/community/feed/FeedNew';
import EditProfile from '@pages/mypage/EditProfile';
import { MyInfo } from '@pages/mypage/MyInfo';
import MyInfoCheck from '@pages/mypage/MyInfoCheck';
import MyPage from '@pages/mypage/MyPage';
import MyRecord from '@pages/mypage/MyRecord';
import Home from '@pages/home/Home';
import Meditation from '@pages/meditation/Meditation';
import MeditationMain from '@pages/meditation/MeditationMain';
import MeditationProgress from '@pages/meditation/MeditationProgress';
import MeditationRecord from '@pages/meditation/MeditationRecord';
import Purchase from '@pages/purchase/Purchase';
import Login from '@pages/users/Login';
import SignUp from '@pages/users/SignUp';
import { Navigate, createBrowserRouter } from 'react-router-dom';

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
        path: 'community/:id/edit',
        element: <FeedEdit />,
      },
      {
        path: 'mypage',
        element: <MyPage />,
      },
      {
        path: 'mypage/info',
        element: <MyInfo />,
      },
      {
        path: 'mypage/checkpw',
        element: <MyInfoCheck />,
      },
      {
        path: 'mypage/editprofile',
        element: <EditProfile />,
      },
      {
        path: 'mypage/archive',
        element: <MyRecord />,
      },
      {
        path: 'admin/theme',
        element: <UploadTheme />,
      },
    ],
  },
]);

export default router;
