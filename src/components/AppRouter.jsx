import {
    createBrowserRouter,
    RouterProvider,
  } from 'react-router-dom';
  import ErrorPage from "../error-page";
  import EntryList from '../pages/EntryLlst';
  import EntryForm from '../pages/EntryForm';
  import Home from '../pages/home';
  import Root from './root';
  import EditForm from '../pages/EditForm';
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        { path: "/", element: <Home/> },
        { path: "/list", element: <EntryList/> },
        { path: "/form", element: <EntryForm/> },
        { path: "/edit", element: <EditForm/> },
      ],
    },
  ]);
  
  function AppRouter() {
    return <RouterProvider router={router} />;
  }
  
  export default AppRouter;
  