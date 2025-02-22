"use client";
import { useState } from "react";
import DesktopNavigation from "./DesktopNavigation";
import MobileNavigation from "./MobileNavigation";
const Navbar = () => {
  const [mobileNavbar, showMobileNavbar] = useState(false);

  const openNavbar = () => {
    showMobileNavbar(true);
  };
  const closeNavbar = () => {
    showMobileNavbar(false);
  };

  return (
    <>
      <DesktopNavigation openNavbar={openNavbar} />
      <MobileNavigation closeNavbar={closeNavbar} mobileNavbar={mobileNavbar} />
    </>
  );
};

export default Navbar;
