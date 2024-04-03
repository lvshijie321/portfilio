import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
const Concat = () => {
    return (_jsxs("section", { className: "flex justify-between items-center py-8", children: [_jsxs("div", { className: "text-2xl font-bold", children: [_jsx("p", { children: "Have a project in mind?" }), _jsx("p", { children: "Let\u2019s build something together!" })] }), _jsx(Link, { to: "/contact", className: "bg-gradient-to-r from-cyan-500 to-blue-500  py-2 rounded-md px-[20px]\r\n            text-white text-sm\r\n        ", children: "Contact" })] }));
};
export default Concat;
