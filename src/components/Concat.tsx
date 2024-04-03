import { Link } from "react-router-dom";

const Concat = () => {
  return (
    <section className="flex justify-between items-center py-8">
      <div className="text-2xl font-bold">
        <p>Have a project in mind?</p>
        <p>Let’s build something together!</p>
      </div>
      <Link
        to={"/contact"}
        className="bg-gradient-to-r from-cyan-500 to-blue-500  py-2 rounded-md px-[20px]
            text-white text-sm
        "
      >
        Contact
      </Link>
    </section>
  );
};

export default Concat;
