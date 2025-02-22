import GetInvolved from "@/components/GetInvolved/GetInvolved";
import AboutUs from "@/components/users/AboutUs/AboutUs";
import Footer from "@/components/users/Footer/Footer";
import Hero from "@/components/users/Hero/Hero";
import Navbar from "@/components/users/Navbar/Navbar";
import WhatWeDo from "@/components/users/WhatWeDo/WhatWeDo";
import Needs from "@/components/Needs/Needs";
import MoneyRaised from "@/components/MoneyRaised/MoneyRaised";
import WhatsAppIcon from "@/components/users/WhatsAppIcon/WhatsAppIcon";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutUs />
      <WhatWeDo />
      <GetInvolved />
      <Needs />
      <MoneyRaised />
      <WhatsAppIcon />
      <Footer />
    </div>
  );
}
