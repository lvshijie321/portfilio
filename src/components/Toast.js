import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import ReactDOM from "react-dom/client";
const Toast = ({ children }) => {
    return (_jsxs("div", { className: "absolute top-20 left-[50%] translate-x-[-50%] z-20 bg-red-500 rounded-3xl p-2 flex gap-x-2 items-center", children: [_jsx("span", { className: "bg-red-600 rounded-3xl text-white/65 text-sm font-bold p-2", children: "FAILED" }), _jsx("span", { className: "text-white", children: children })] }));
};
export const useToast = () => {
    const [root, setRoot] = useState();
    const [div, setDiv] = useState();
    return {
        show: (msg) => {
            if (root) {
                return;
            }
            const div = document.createElement("div");
            setDiv(div);
            document.body.appendChild(div);
            const r = ReactDOM.createRoot(div);
            setRoot(r);
            r.render(_jsx(Toast, { children: msg }));
        },
        close: () => {
            if (!root) {
                return;
            }
            root.unmount();
            document.body.removeChild(div);
            setRoot(null);
        },
    };
};
