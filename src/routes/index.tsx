import { Outlet, createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Portfolio from "../pages/Portfolio";
import PersonalStudies from "../pages/PersonalStudies";
import Navbar from "../components/Navbar";
import NotFoundPage from "../pages/NotFoundPage";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/studies",
        element: <PersonalStudies />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);
