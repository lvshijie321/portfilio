import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Links from "./Links";
import Contact from "../../components/Concat";
const Projects = () => {
    return (_jsxs(_Fragment, { children: [_jsxs("section", { className: "pt-4", children: [_jsxs("h1", { className: "text-5xl font-bold", children: ["My", " ", _jsx("span", { className: "bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text", children: "Projects" })] }), _jsx("p", { className: "text-gray-400 pt-4", children: "I've embarked on numerous projects throughout the years, but these are the ones I hold closest to my heart. Many of them are open-source, so if you come across something that piques your interest, feel free to explore the codebase and contribute your ideas for further enhancements. Your collaboration is highly valued!" })] }), _jsx(Links, {}), _jsx(Contact, {})] }));
};
export default Projects;
