import React from "react";
import { X } from "lucide-react";

const ContactUs = ({
  setContactComponent,
  contactComponentShown,
}: {
  setContactComponent: (show: boolean) => void;
  contactComponentShown: boolean;
}) => {
  return (
    <div
      className={`fixed inset-0 z-50 bg-black/50 flex justify-center items-center transition-opacity duration-300 ${
        contactComponentShown ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <div
        className={`max-w-[500px] bg-white w-[90%] rounded-sm shadow-lg p-6 relative transition-transform duration-300 ${
          contactComponentShown ? "translate-y-0" : "translate-y-4"
        }`}
      >
        <button
          className="absolute top-[-2rem] right-[-2.8rem]"
          onClick={() => setContactComponent(false)}
        >
          <X className="text-orange-500" size={43} />
        </button>

        <h2 className="text-2xl font-bold mb-6 text-center text-orange-500 border-b">
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
              rows={4}
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
