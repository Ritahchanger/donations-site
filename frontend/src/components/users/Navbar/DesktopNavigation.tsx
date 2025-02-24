import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";

import { CircleArrowLeft } from "lucide-react";

import { Menu } from "lucide-react";

import "./Navbar.css";

const DesktopNavigation = ({
  openNavbar,
  setContactComponent,
}: {
  openNavbar: any;
  setContactComponent: any;
}) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) {
        setNavBg(true);
      } else {
        setNavBg(false);
      }
    };

    window.addEventListener("scroll", handler);

    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header
      className={`fixed w-full top-0 left-0 right-0 z-20 transition-colors duration-300 ${
        navBg ? "bg-green-500 shadow-md navBg" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto flex justify-between items-center h-[50px] px-4">
        {/* Logo */}
        <div>
          <Link
            href="/"
            className="text-xl flex  items-center font-bold text-gray-800"
          >
            <span className="mr-[0.6rem]">
              <CircleArrowLeft className="text-orange-500 h-[37px] w-[37px]" />
            </span>
            <p className="text-white font-semibold"> LOGO</p>
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          {[
            { name: "Home", id: "hero" },
            { name: "About Us", id: "about" },
            { name: "Donation", id: "donate" },
            { name: "Volunteers", id: "volunteers" },
            { name: "News", id: "news" },
            { name: "Contact Us", id: "contact" },
          ].map(({ name, id }) => (
            <li key={id}>
              <button
                onClick={() => {
                  handleScroll(id);

                  if (id === "contact") {
                    setContactComponent(true);
                  }
                }}
                className="hover:text-orange-500 transition text-white tracking-wider focus:outline-none"
              >
                {name}
              </button>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Link href="/donate">
            <button className="bg-orange-500 text-white px-5 py-[0.2rem] rounded-full font-medium border-2 border-orange-500 transition hover:bg-transparent hover:text-orange-500">
              Donate Now
            </button>
          </Link>
          <button className="p-2 text-gray-600 hover:text-gray-900 transition">
            <Search className="w-5 h-5 text-orange-500" />
          </button>
          <button className="block md:hidden" onClick={openNavbar}>
            <Menu className="text-orange-500 h-10 w-10" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default DesktopNavigation;
