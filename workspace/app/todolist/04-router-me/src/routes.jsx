import Layout from "@components/Layout";
import About from "@pages/About";
import Error from "@pages/Error";
import Home from "@pages/Home";
import TodoAdd from "@pages/TodoAdd";
import TodoDetail from "@pages/TodoDetail";
import TodoEdit from "@pages/TodoEdit";
import TodoList from "@pages/TodoList";
import { createBrowserRouter, Navigate } from "react-router-dom";

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