import { X } from "lucide-react";

const MobileNavigation = ({
  closeNavbar,
  mobileNavbar,
  setContactComponent,
}: {
  closeNavbar: any;
  mobileNavbar: any;
  setContactComponent: any;
}) => {
  const handleNavigation = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      closeNavbar(); // Close sidebar after navigation
    }
  };

  return (
    <div
      className={`fixed inset-0 z-30 bg-black/70 transition-opacity duration-300 ease-in-out ${
        mobileNavbar
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Close button */}
      <div className="absolute top-0 right-0 mr-[1rem] mt-[0.2rem]">
        <button onClick={closeNavbar}>
          <X color="#fff" size={40} />
        </button>
      </div>

      {/* Sliding menu */}
      <div
        className={`bg-rose-400 h-screen max-w-[250px] w-[80%] fixed top-0 left-0 transform transition-transform duration-300 ease-in-out ${
          mobileNavbar ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="mt-20 text-gray-700 font-medium">
          {[
            { name: "Home", id: "hero" },
            { name: "About Us", id: "about" },
            { name: "Donation", id: "donate" },
            { name: "Volunteers", id: "volunteers" },
            { name: "News", id: "news" },
            { name: "Contact Us", id: "contact" },
          ].map(({ name, id }) => (
            <li key={id} className="border-b border-neutral-300 cursor-pointer">
              <button
                onClick={() => {
                  handleNavigation(id);

                  if (id === "contact") {
                    setContactComponent(true);
                  }
                }}
                className="transition text-white px-6 py-4 block w-full text-left hover:bg-black hover:text-white"
              >
                {name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MobileNavigation;
