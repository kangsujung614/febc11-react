// import Layout from '@components/layout';
// import Detail from '@pages/board/Detail';
// import Edit from '@pages/board/Edit';
// import List from '@pages/board/List';
// import New from '@pages/board/New';
// import MainPage from '@pages/index';
// import Login from '@pages/user/Login';
// import Signup from '@pages/user/Signup';

// 정적 로딩으로 처음 로딩에 시간이 걸린다. lazy
import { createBrowserRouter } from 'react-router-dom';

import { lazy } from 'react';

const Layout = lazy(() => import('@components/layout'));
const Detail = lazy(() => import('@pages/board/Detail'));
const Edit = lazy(() => import('@pages/board/Edit'));
const List = lazy(() => import('@pages/board/List'));
const New = lazy(() => import('@pages/board/New'));
// const ErrorPage = lazy(() => import('@pages/ErrorPage'));
const MainPage = lazy(() => import('@pages/index'));
const Login = lazy(() => import('@pages/user/Login'));
const Signup = lazy(() => import('@pages/user/Signup'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <MainPage /> },
      { path: ':type', element: <List /> },
      { path: ':type/new', element: <New /> },
      { path: ':type/:_id', element: <Detail /> },
      { path: ':type/:_id/edit', element: <Edit /> },
      { path: 'users/signup', element: <Signup /> },
      { path: 'users/login', element: <Login /> },
    ]
  },
], {
  future: {
    // 없으면 콘솔에 경고 표시
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_relativeSplatPath: true,
    v7_skipActionErrorRevalidation: true,
  },
});

export default router;