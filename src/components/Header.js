import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo } from "react";
import { NavLink } from "react-router-dom";
const Header = ({ className }) => {
    const navBars = useMemo(() => {
        return [
            {
                name: "About",
                to: "/about",
            },
            {
                name: "Projects",
                to: "/projects",
            },
        ];
    }, []);
    return (_jsxs("header", { className: className + ` flex justify-between  items-center py-4`, children: [_jsx(NavLink, { to: "/", className: "rounded-md bg-white w-12 h-12 flex justify-center items-center text-blue-500 font-semibold text-lg", children: "AH" }), _jsx("nav", { className: "flex gap-8", children: navBars.map((nav) => (_jsx(NavLink, { to: nav.to, className: ({ isActive }) => {
                        const className = "text-lg font-semibold ";
                        const color = isActive ? "text-blue-600" : "text-black";
                        return className + " " + color;
                    }, children: nav.name }, nav.to))) })] }));
};
export default Header;
