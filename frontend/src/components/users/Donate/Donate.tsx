import React from "react";
import { donateData } from "@/constants/Donate";
import MajorSectionTitle from "@/components/Titles/Section";

const Donate = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <MajorSectionTitle title="DONATE" centered />
          <p className="text-lg text-gray-600 font-medium mt-4">
            Changing Lives Together
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {donateData.map(
            ({ id, urlImage, title, description, buttonDesc }) => (
              <div
                key={id}
                className="bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105"
              >
                <div className="relative h-52">
                  <img
                    src={urlImage}
                    alt={title || "Donation Image"}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 ">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {description}
                  </p>

                  <button className="btn-primary">{buttonDesc}</button>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Donate;
