import Link from "next/link";
import { X } from "lucide-react";

type MobileNavigationProps = {
  closeNavbar: () => void;
  mobileNavbar: boolean;
};

const MobileNavigation: React.FC<MobileNavigationProps> = ({
  closeNavbar,
  mobileNavbar,
}) => {
  return (
    <div
      className={`fixed inset-0 z-30 bg-black/70 transition-opacity duration-300 ease-in-out ${
        mobileNavbar
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Close button at the top right */}
      <div className="absolute top-0 right-0 mr-[1rem] mt-[0.2rem]">
        <button onClick={closeNavbar}>
          <X color="#fff" size={40} />
        </button>
      </div>
      {/* Sliding menu from the left */}
      <div
        className={`bg-rose-400 h-screen max-w-[250px] w-[80%] fixed top-0 left-0 transform transition-transform duration-300 ease-in-out ${
          mobileNavbar ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="mt-20 text-gray-700 font-medium">
          {[
            "Home",
            "About Us",
            "Donation",
            "Volunteers",
            "News",
            "Contact Us",
          ].map((item) => (
            <li
              key={item}
              className="border-b border-neutral-300 cursor-pointer"
            >
              <Link
                href="#"
                className="transition text-white px-6 py-4 block hover:bg-black hover:text-white"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MobileNavigation;
