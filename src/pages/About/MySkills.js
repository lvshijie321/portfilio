import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { skills } from "./data/mySkills";
const MySkills = () => {
    return (_jsxs("div", { className: "pt-8", children: [_jsx("div", { className: "text-2xl font-semibold", children: "My Skills" }), _jsx("div", { className: "flex flex-wrap gap-x-16 gap-y-10 pt-8", children: skills.map((skill) => (_jsxs("div", { className: "block-container w-20 h-20", children: [_jsx("div", { className: "btn-back rounded-xl" }), _jsx("div", { className: "btn-front rounded-xl flex justify-center items-center", children: _jsx("img", { src: skill.imageUrl, alt: skill.name, className: "w-1/2 h-1/2 object-contain" }) })] }, skill.name))) })] }));
};
export default MySkills;
