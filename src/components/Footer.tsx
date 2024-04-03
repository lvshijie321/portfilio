import { useRef } from "react";
import { github, contact } from "../assets/icons";

const Footer = () => {
  const contactMe = useRef([
    {
      src: github,
      alt: "github",
    },
    {
      src: contact,
      alt: "contact",
    },
  ]);
  return (
    <footer className="">
      <hr />
      <div className="flex justify-between py-6">
        <p>
          <span className="text-base">©</span>&nbsp;2023&nbsp;
          <span className="font-semibold">LvShijie</span>. All rights reserved.
        </p>
        <div className="flex gap-x-4">
          {contactMe.current.map((item) => {
            return (
              <img
                src={item.src}
                alt={item.alt}
                key={item.alt}
                className="w-7"
              />
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
