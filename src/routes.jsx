import { lazy } from 'react';
import Layout from '@components/layout/layout/Layout';
import ErrorPage from '@pages/ErrorPage';
import UploadTheme from '@pages/admin/UploadTheme';
const Community = lazy(() => import('@pages/community/Community'));
// import Community from '@pages/community/Community';
const FeedDetail = lazy(() => import('@pages/community/feed/FeedDetail'));
// import FeedDetail from '@pages/community/feed/FeedDetail';
import FeedEdit from '@pages/community/feed/FeedEdit';
import FeedNew from '@pages/community/feed/FeedNew';
import Home from '@pages/home/Home';
import Meditation from '@pages/meditation/Meditation';
import MeditationMain from '@pages/meditation/MeditationMain';
import MeditationProgress from '@pages/meditation/MeditationProgress';
import MeditationRecord from '@pages/meditation/MeditationRecord';
import EditProfile from '@pages/mypage/EditProfile';
import { MyInfo } from '@pages/mypage/MyInfo';
import MyInfoCheck from '@pages/mypage/MyInfoCheck';
import MyPage from '@pages/mypage/MyPage';
import MyRecord from '@pages/mypage/MyRecord';
import BookmarkedPosts from '@pages/mypage/myactivity/BookmarkedPosts';
import MyActivity from '@pages/mypage/myactivity/MyActivity';
import MyPosts from '@pages/mypage/myactivity/MyPosts';
import Purchase from '@pages/purchase/Purchase';
import Login from '@pages/users/Login';
import SignUp from '@pages/users/SignUp';
import SignUpOneStep from '@pages/users/SignUpOneStep';
import SignUpTwoStep from '@pages/users/SignUpTwoStep';
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
        path: 'signup',
        element: <SignUp />,
        children: [
          {
            index: true,
            element: <SignUpOneStep />,
          },
          {
            path: 'onestep',
            element: <SignUpOneStep />,
          },
          {
            path: 'twostep',
            element: <SignUpTwoStep />,
          },
        ],
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
        path: 'mypage/activity',
        element: <MyActivity />,
        children: [
          {
            index: true,
            element: <Navigate to="/mypage/activity/myposts" />,
          },
          {
            path: 'myposts',
            element: <MyPosts />,
          },
          {
            path: 'bookmarkedposts',
            element: <BookmarkedPosts />,
          },
        ],
      },
      {
        path: 'admin/theme',
        element: <UploadTheme />,
      },
    ],
  },
]);

export default router;
