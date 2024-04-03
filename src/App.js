import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Header from "./components/Header.tsx";
import { useLocation } from "react-router-dom";
import { Suspense, useMemo } from "react";
import AppRoutes from "./components/AppRoutes.tsx";
import Footer from "./components/Footer.tsx";
function App() {
    const { pathname } = useLocation();
    const isHomePage = useMemo(() => {
        return pathname === "/";
    }, [pathname]);
    return (_jsxs(_Fragment, { children: [_jsx(Header, { className: (isHomePage ? "absolute left-0 right-0 top-0 z-10 " : "") +
                    "max-container" }), _jsxs("section", { className: isHomePage ? "h-full" : "max-container", children: [_jsx("main", { className: (isHomePage ? "" : "min-height ") +
                            "h-full relative overflow-hidden", children: _jsx(Suspense, { children: _jsx(AppRoutes, {}) }) }), !isHomePage && _jsx(Footer, {})] })] }));
}
export default App;
