import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { projects } from "./data/Links";
import { arrow } from "../../assets/icons";
const Links = () => {
    return (_jsxs(_Fragment, { children: [_jsx("section", { className: "flex flex-wrap gap-x-4 pt-10 gap-y-10", children: projects.map((item, index) => (_jsxs("div", { className: "flex-none lg:w-[400px] w-full", children: [_jsxs("div", { className: "block-container w-12 h-12 mb-5", children: [_jsx("div", { className: `btn-back rounded-xl ${item.theme}` }), _jsx("div", { className: "btn-front rounded-xl flex justify-center items-center", children: _jsx("img", { src: item.iconUrl, alt: "threads", className: "w-1/2 h-1/2 object-contain" }) })] }), _jsx("p", { className: "text-2xl font-bold", children: item.name }), _jsx("p", { className: "text-gray-400 pt-2", children: item.description }), _jsxs(Link, { to: item.link, target: "_blank", className: "text-blue-600 flex gap-x-2 font-bold text-sm pt-5", children: [_jsx("span", { children: "Live Link" }), _jsx("img", { src: arrow })] })] }, index))) }), _jsx("hr", { className: "mt-20" })] }));
};
export default Links;
