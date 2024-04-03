import { skills } from "./data/mySkills";

const MySkills = () => {
  return (
    <div className="pt-8">
      <div className="text-2xl font-semibold">My Skills</div>
      <div className="flex flex-wrap gap-x-16 gap-y-10 pt-8">
        {skills.map((skill) => (
          <div className="block-container w-20 h-20" key={skill.name}>
            <div className="btn-back rounded-xl" />
            <div className="btn-front rounded-xl flex justify-center items-center">
              <img
                src={skill.imageUrl}
                alt={skill.name}
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MySkills;
