import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { VerticalTimeline, VerticalTimelineElement, } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "./data/workExperience";
const WorkExperience = () => {
    return (_jsxs(_Fragment, { children: [_jsxs("section", { className: "pt-10", children: [_jsx("h2", { className: "text-2xl font-semibold", children: "Work Experience." }), _jsx("p", { className: "text-slate-400 pt-4", children: "I've worked with all sorts of companies, leveling up my skills and teaming up with smart people. Here's the rundown:" })] }), _jsx("div", { className: "pt-4", children: _jsx(VerticalTimeline, { children: experiences.map((experience) => (_jsx(VerticalTimelineElement, { date: experience.date, iconStyle: { background: experience.iconBg }, icon: _jsx("div", { className: "h-full flex justify-center items-center", children: _jsx("img", { className: "w-[70%]", src: experience.icon }) }), children: _jsxs("div", { className: "", children: [_jsx("div", { className: "text-lg font-semibold", children: experience.title }), _jsx("p", { children: experience.company_name }), _jsx("ul", { className: "list-disc text-sm text-gray-400 flex flex-col gap-y-3  pl-4 pt-3", children: experience.points.map((item, index) => (_jsxs("li", { children: [" ", item] }, index))) })] }) }, experience.company_name))) }) }), _jsx("hr", { className: "mt-10" })] }));
};
export default WorkExperience;
