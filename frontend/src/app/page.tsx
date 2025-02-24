"use client";
import GetInvolved from "@/components/GetInvolved/GetInvolved";
import AboutUs from "@/components/users/AboutUs/AboutUs";
import Footer from "@/components/users/Footer/Footer";
import Hero from "@/components/users/Hero/Hero";
import Navbar from "@/components/users/Navbar/Navbar";
import WhatWeDo from "@/components/users/WhatWeDo/WhatWeDo";
import Needs from "@/components/Needs/Needs";
import MoneyRaised from "@/components/MoneyRaised/MoneyRaised";
import WhatsAppIcon from "@/components/users/WhatsAppIcon/WhatsAppIcon";
import Donate from "@/components/users/Donate/Donate";
import Events from "@/components/Events/Events";
import LatestNews from "@/components/LatestNews/LatestNews";
import ContactUs from "@/components/ContactUs/ContactUs";
import { useState } from "react";
export default function Home() {
  const [contactComponent, setContactComponent] = useState(false);

  return (
    <div>
      <Navbar setContactComponent={setContactComponent} />
      <Hero />
      <AboutUs />
      <WhatWeDo />
      <GetInvolved />
      <Needs />
      <MoneyRaised />
      <Donate />
      <Events />
      <LatestNews />
      <ContactUs
        setContactComponent={setContactComponent}
        contactComponentShown={contactComponent}
      />
      <WhatsAppIcon />
      <Footer />
    </div>
  );
}
