import { whatWeDoData } from "@/constants/WhatWeDoData";
import { ArrowRightSquareIcon } from "lucide-react";

import { HandCoinsIcon } from "lucide-react";

const WhatWeDo = () => {
  return (
    <div className="py-12 bg-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4">
            <span className="text-orange-500">
              <HandCoinsIcon size={50} />
            </span>
            <h2 className="text-4xl font-bold text-gray-900">WHAT WE DO</h2>
          </div>
          <p className="text-lg text-gray-600 font-semibold mt-4">
            Changing Lives Together
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whatWeDoData.map((data) => (
            <div
              key={data.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              {/* Image Section */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={data.imgUrl}
                  alt={data.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {data.title}
                </h3>
                <p className="text-gray-600 mb-4">{data.description}</p>
                <button className="bg-orange-500 text-white px-6 py-2 rounded-full font-medium hover:bg-orange-600 transition-colors duration-200">
                  {data.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="h-[100px] flex items-center bg-gradient-to-b from-orange-500 to-orange-600 p-4 mt-[2rem]">
          <div className="container mx-auto flex justify-between items-center">
            {/* Text Section */}
            <p className="text-white text-lg font-semibold">
              Your donation is important to someone's life
            </p>

            {/* Button Section */}
            <div className="flex justify-between items-center ">
              <button className="p-2 bg-white rounded-lg shadow-md hover:bg-gray-100 transition-colors duration-200">
                <ArrowRightSquareIcon className="w-6 h-6 text-orange-500" />
              </button>
              <p className="ml-[1rem] hover:underline  text-neutral-500 tracking-widest">Donate now</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
