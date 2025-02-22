import React from "react";

import { needsData } from "@/constants/NeedsData";

const Needs = () => {
  return (
    <div className="p-4">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[2rem]">
          {needsData.map((need) => (
            <div
              className="p-[1rem] border border-neutral-300 flex justify-between flex-col"
              key={need.id}
            >
              <div className="flex items-center gap-[1rem] mb-[1.5rem] ">
                <span className="block">
                  <need.icon className="text-orange-500" size={40} />
                </span>
                <h3 className="text-black text-xl">{need.title}</h3>
              </div>
              <div className="mt-[3] text-neutral-600">
                <p>{need.description}</p>
              </div>
              <div>
                {need.buttonText.length > 1 ? (
                  <button className="btn-primary text-sm mt-2">
                    <p>{need.buttonText}</p>
                  </button>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Needs;
