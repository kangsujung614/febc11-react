import Page1 from "./Page1";
import Home from "./Home";
import { createBrowserRouter, Navigate} from "react-router-dom";
import Page2 from "./Page2";
import Layout from "./Layout";

// 라우팅 규칙을 정의하는 파일(컴포넌트)
const router = createBrowserRouter([{
//   // 첫번째 라우팅 규칙
//   path: '/',
//   element: <Home/>
// }, {
//   // 두번째 라우팅 규칙
//   path: '/page1',
//   element: <Page1/>
// }, {
//   // 세번째 라우팅 규칙
//   path: '/page2',
//   element: <Page2/>
// },{
  // 네번째 라우팅 규칙
  path: '/', //루트일 때
  element: <Layout/>,
  children: [
    // 추가 속성 정의(중첩 구조)
    {index: true, element: <Navigate to="/home" />},
    {index: 'home', element: <Home/>}, // '/'
    {path: 'page1', element: <Page1/>}, // '/page1'
    {path: 'page2', element: <Page2/>}, // '/page2'
  ]
}], {
  future: {
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_relativeSplatPath: true,
    v7_skipActionErrorRevalidation: true,
  },
}); // 경고를 없애기 위해 두번째 파라미터에 옵션 적용 

export default router;