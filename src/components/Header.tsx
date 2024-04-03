import React, { useMemo } from "react";
import { NavLink } from "react-router-dom";

interface HeaderProps {
  className: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  const navBars = useMemo(() => {
    return [
      {
        name: "About",
        to: "/about",
      },
      {
        name: "Projects",
        to: "/projects",
      },
    ];
  }, []);

  return (
    <header className={className + ` flex justify-between  items-center py-4`}>
      <NavLink
        to={"/"}
        className="rounded-md bg-white w-12 h-12 flex justify-center items-center text-blue-500 font-semibold text-lg"
      >
        AH
      </NavLink>
      <nav className="flex gap-8">
        {navBars.map((nav) => (
          <NavLink
            key={nav.to}
            to={nav.to}
            className={({ isActive }) => {
              const className = "text-lg font-semibold ";
              const color = isActive ? "text-blue-600" : "text-black";
              return className + " " + color;
            }}
          >
            {nav.name}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default Header;
