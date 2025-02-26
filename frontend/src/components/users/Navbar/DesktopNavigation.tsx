import React, { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { Search, CircleArrowLeft, Menu } from "lucide-react";
import { useRouter } from "next/navigation";
import "./Navbar.css";

const DesktopNavigation = ({
  openNavbar,
  setContactComponent,
}: {
  openNavbar: () => void;
  setContactComponent: (value: boolean) => void;
}) => {
  const router = useRouter();
  const [navBg, setNavBg] = useState(false);

  // Handle scroll event efficiently
  useEffect(() => {
    const handleScroll = () => setNavBg(window.scrollY >= 90);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scrolling handler
  const handleScroll = useCallback(
    (id: string, link?: string) => {
      if (id === "contact") setContactComponent(true);
      if (id === "hero" && link) router.push(link);
      const section = document.getElementById(id);
      if (section)
        section.scrollIntoView({ behavior: "smooth", block: "start" });
    },
    [router, setContactComponent]
  );

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
            className="text-xl flex items-center font-bold text-gray-800"
          >
            <CircleArrowLeft className="text-orange-500 h-[37px] w-[37px] mr-2" />
            <p className="text-white font-semibold">LOGO</p>
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          {[
            { name: "Home", id: "hero", link: "/" },
            { name: "About Us", id: "about" },
            { name: "Donation", id: "donate" },
            { name: "Volunteers", id: "volunteers" },
            { name: "News", id: "news" },
            { name: "Contact Us", id: "contact" },
          ].map(({ name, id, link = "#" }) => (
            <li key={id}>
              <button
                onClick={() => handleScroll(id, link)}
                className="hover:text-orange-500 transition text-white tracking-wider focus:outline-none"
              >
                {name}
              </button>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Link href="#">
            <button className="bg-orange-500 text-white px-5 py-[0.2rem] rounded-full font-medium border-2 border-orange-500 transition hover:bg-transparent hover:text-orange-500">
              Donate Now
            </button>
          </Link>
          <button
            className="p-2 text-gray-600 hover:text-gray-900 transition"
            aria-label="Search"
          >
            <Search className="w-5 h-5 text-orange-500" />
          </button>
          <button
            className="block md:hidden"
            onClick={openNavbar}
            aria-label="Open Menu"
          >
            <Menu className="text-orange-500 h-10 w-10" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default DesktopNavigation;
