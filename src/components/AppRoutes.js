import { jsx as _jsx } from "react/jsx-runtime";
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
            element: _jsx(Home, {}),
        },
        {
            path: "/about",
            element: _jsx(About, {}),
        },
        {
            path: "/Contact",
            element: _jsx(Contact, {}),
        },
        {
            path: "/projects",
            element: _jsx(Projects, {}),
        },
    ]);
    return element;
};
export default AppRoutes;
