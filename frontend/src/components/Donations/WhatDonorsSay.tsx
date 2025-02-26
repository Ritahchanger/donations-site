import { donationTestmonial } from "@/constants/DonationTestMonials";
import Image from "next/image";

const WhatDonorsSay = () => {
  return (
    <div className="py-10 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-[1300px] mx-auto bg-white text-black p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-6">
            What Our Donors Say
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {donationTestmonial.map((testmony) => (
              <div
                key={testmony.id}
                className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg shadow-sm"
              >
                <div className="w-16 h-16 overflow-hidden rounded-full border">
                  <Image
                    src={testmony.urlImage}
                    width={64}
                    height={64}
                    alt={testmony.name}
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-gray-700 text-sm italic">
                    "{testmony.description}"
                  </p>
                  <h3 className="font-semibold text-md mt-2">
                    {testmony.name}
                  </h3>
                  <p className="text-xs text-gray-500">
                    {testmony.postion}, {testmony.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatDonorsSay;
