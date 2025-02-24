import React from "react";

import { X } from "lucide-react";

const ContactUs = ({setContactComponent,contactComponentShown} : {setContactComponent:any,contactComponentShown:any} ) => {
  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex justify-center items-center">
      <div className="max-w-[500px] bg-white w-[90%] rounded-sm shadow-lg p-6 relative">
        <button className="absolute top-[-2rem] right-[-2.8rem]">
          <X className="text-orange-500 " size={43} />
        </button>

        <h2 className="text-2xl font-bold  mb-6 text-center text-orange-500 border-b ">
          Contact Us
        </h2>
        <form action="#" className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Mobile number (+12343747234)"
              className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <textarea
              placeholder="Your message..."
              className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              rows={4} // Corrected: Passed as a number, not a string
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 px-4 rounded-sm hover:bg-orange-700 transition duration-300"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
