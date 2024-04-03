import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { experiences } from "./data/workExperience";

const WorkExperience = () => {
  return (
    <>
      <section className="pt-10">
        <h2 className="text-2xl font-semibold">Work Experience.</h2>
        <p className="text-slate-400 pt-4">
          I've worked with all sorts of companies, leveling up my skills and
          teaming up with smart people. Here's the rundown:
        </p>
      </section>

      <div className="pt-4">
        <VerticalTimeline>
          {experiences.map((experience) => (
            <VerticalTimelineElement
              key={experience.company_name}
              date={experience.date}
              iconStyle={{ background: experience.iconBg }}
              icon={
                <div className="h-full flex justify-center items-center">
                  <img className="w-[70%]" src={experience.icon} />
                </div>
              }
            >
              <div className="">
                <div className="text-lg font-semibold">{experience.title}</div>
                <p>{experience.company_name}</p>
                <ul className="list-disc text-sm text-gray-400 flex flex-col gap-y-3  pl-4 pt-3">
                  {experience.points.map((item, index) => (
                    <li key={index}> {item}</li>
                  ))}
                </ul>
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
      <hr className="mt-10" />
    </>
  );
};

export default WorkExperience;
