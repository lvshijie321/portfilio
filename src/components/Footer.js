import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef } from "react";
import { github, contact } from "../assets/icons";
const Footer = () => {
    const contactMe = useRef([
        {
            src: github,
            alt: "github",
        },
        {
            src: contact,
            alt: "contact",
        },
    ]);
    return (_jsxs("footer", { className: "", children: [_jsx("hr", {}), _jsxs("div", { className: "flex justify-between py-6", children: [_jsxs("p", { children: [_jsx("span", { className: "text-base", children: "\u00A9" }), "\u00A02023\u00A0", _jsx("span", { className: "font-semibold", children: "LvShijie" }), ". All rights reserved."] }), _jsx("div", { className: "flex gap-x-4", children: contactMe.current.map((item) => {
                            return (_jsx("img", { src: item.src, alt: item.alt, className: "w-7" }, item.alt));
                        }) })] })] }));
};
export default Footer;
