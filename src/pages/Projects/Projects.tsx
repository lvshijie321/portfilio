import Links from "./Links";
import Contact from "../../components/Concat";

const Projects = () => {
  return (
    <>
      <section className="pt-4">
        <h1 className="text-5xl font-bold">
          My{" "}
          <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text">
            Projects
          </span>
        </h1>
        <p className="text-gray-400 pt-4">
          I've embarked on numerous projects throughout the years, but these are
          the ones I hold closest to my heart. Many of them are open-source, so
          if you come across something that piques your interest, feel free to
          explore the codebase and contribute your ideas for further
          enhancements. Your collaboration is highly valued!
        </p>
      </section>

      <Links />

      <Contact />
    </>
  );
};

export default Projects;
