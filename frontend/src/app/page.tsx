import AboutUs from "@/components/users/AboutUs/AboutUs";
import Footer from "@/components/users/Footer/Footer";
import Hero from "@/components/users/Hero/Hero";
import Navbar from "@/components/users/Navbar/Navbar";
import WhatWeDo from "@/components/users/WhatWeDo/WhatWeDo";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutUs/>
      <WhatWeDo/>
      <Footer />
    </div>
  );
}
