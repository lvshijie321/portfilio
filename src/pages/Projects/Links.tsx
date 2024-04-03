import { Link } from "react-router-dom";
import { projects } from "./data/Links";
import { arrow } from "../../assets/icons";

const Links = () => {
  return (
    <>
      <section className="flex flex-wrap gap-x-4 pt-10 gap-y-10">
        {projects.map((item, index) => (
          <div className="flex-none lg:w-[400px] w-full" key={index}>
            <div className="block-container w-12 h-12 mb-5">
              <div className={`btn-back rounded-xl ${item.theme}`}></div>
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={item.iconUrl}
                  alt="threads"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
            <p className="text-2xl font-bold">{item.name}</p>
            <p className="text-gray-400 pt-2">{item.description}</p>
            <Link
              to={item.link}
              target="_blank"
              className="text-blue-600 flex gap-x-2 font-bold text-sm pt-5"
            >
              <span>Live Link</span>
              <img src={arrow} />
            </Link>
          </div>
        ))}
      </section>
      <hr className="mt-20" />
    </>
  );
};

export default Links;
