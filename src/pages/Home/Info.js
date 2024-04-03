import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo } from "react";
import { infos } from "./data/info";
const Info = ({ currentStage }) => {
    const info = useMemo(() => {
        if (currentStage === 1) {
            return infos[0];
        }
        else if (currentStage === 3) {
            return infos[1];
        }
        return [];
    }, [currentStage]);
    return (_jsxs("h1", { className: "bg-blue-400  top-20  left-[50%] translate-x-[-50%] text-center rounded-md sm:text-xl absolute   z-10 text-white px-2 py-4 neo-brutalism-blue text-lg sm:leading-8", children: [_jsx("p", { children: info[0] }), _jsx("p", { children: info[1] })] }));
};
export default Info;
