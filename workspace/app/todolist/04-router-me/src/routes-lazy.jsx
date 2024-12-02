import { lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";

//동적 임포트
const Layout = lazy(()=> import("@components/Layout"));
const About = lazy(()=> import("@pages/About"));
const Home = lazy(()=> import("@pages/Home"));
const Error = lazy(()=> import("@pages/Error"));
const TodoAdd = lazy(()=> import("@pages/TodoAdd"));
const TodoDetail = lazy(()=> import("@pages/TodoDetail"));
const TodoEdit = lazy(()=> import("@pages/TodoEdit"));
const TodoList = lazy(()=> import("@pages/TodoList"));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    errorElement: <Error/>,
    children: [
      {index: true, element: <Navigate to="/home" />},
      {path: 'home', element: <Home />},
      {path: 'about', element: <About />},
      {path: 'todolist', element: <TodoList />},
      {path: 'tododetail/:id', element: <TodoDetail/>},
      {path: 'todoadd', element: <TodoAdd/>},
      {path: 'todoedit', element: <TodoEdit/>},
    ],
  }
], {
  future: {
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_relativeSplatPath: true,
    v7_skipActionErrorRevalidation: true,
  },
});

export default router;