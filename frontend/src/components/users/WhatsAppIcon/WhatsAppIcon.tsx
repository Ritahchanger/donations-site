import React from "react";
import { MessageCircle } from "lucide-react";

import Image from "next/image";

const WhatsAppIcon = () => {
  return (
    <div>
      <div className="bg-green-100 rounded-full hover:bg-green-200 transition-colors duration-200 h-[70px] w-[70px] flex items-center justify-center fixed right-[2rem] bottom-[2rem] ">
        <Image
          src="/icons/whatsapp.png"
          width={40}
          height={40}
          alt="whats app image"
        />
      </div>
    </div>
  );
};

export default WhatsAppIcon;
