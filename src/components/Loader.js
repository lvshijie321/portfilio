import { jsx as _jsx } from "react/jsx-runtime";
import { Html } from "@react-three/drei";
const Loader = () => {
    return (_jsx(Html, { children: _jsx("div", { className: "w-20 h-20 border-blue-400 border-2 animate-spin" }) }));
};
export default Loader;
