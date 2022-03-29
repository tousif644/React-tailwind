import React, { useState } from "react";
import Link from "../Link/Link";
import { MenuIcon, XIcon } from "@heroicons/react/solid";

const Navbar = () => {
  // Setting up states
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, name: "Home", link: "/home" },
    { id: 2, name: "Shop", link: "/shop" },
    { id: 3, name: "Deals", link: "/deals" },
    { id: 4, name: "About", link: "/about" },
    { id: 5, name: "Contact us", link: "/contact" },
  ];
  return (
    <nav className="bg-green-400">
      <div onClick={() => setOpen(!open)} className="w-6 h-6 md:hidden">
        {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
      </div>
      <ul
        className={`md:flex justify-center mb-5 bg-green-400 w-full  absolute md:static duration-500 ease-in-out ${
          open ? "top-6" : "top-[-120px]"
        }`}
      >
        {routes.map((route) => (
          <Link key={route.id} routes={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
