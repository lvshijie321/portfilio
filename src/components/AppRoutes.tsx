import { useRoutes } from "react-router-dom";
import { lazy } from "react";

const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Contact = lazy(() => import("../pages/Contact"));
const Projects = lazy(() => import("../pages/Projects"));

const AppRoutes = () => {
  const element = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/Contact",
      element: <Contact />,
    },
    {
      path: "/projects",
      element: <Projects />,
    },
  ]);
  return element;
};

export default AppRoutes;
