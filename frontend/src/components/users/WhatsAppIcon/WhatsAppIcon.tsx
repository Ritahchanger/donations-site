"use client";
import React, { useState, useEffect, useRef } from "react";
import { X, User } from "lucide-react";
import Image from "next/image";

const WhatsAppIcon = () => {
  const [showNotification, setShowNotification] = useState(false);
  const notificationRef = useRef<HTMLDivElement | null>(null);

  // Hide notification when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target as Node)
      ) {
        setShowNotification(false);
      }
    };

    if (showNotification) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showNotification]);

  return (
    <div className="fixed right-8 bottom-8 z-50">
      {/* Push Notification - Shows on Click */}
      {showNotification && (
        <div
          ref={notificationRef}
          className="absolute bottom-20 right-0 bg-white shadow-lg rounded-lg p-4 w-[300px] border border-gray-200 transition-all duration-300 animate-fade-in"
        >
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Image
                src="/icons/whatsapp.png"
                width={30}
                height={30}
                alt="WhatsApp Icon"
                className="rounded-full"
              />
              <div>
                <h4 className="text-gray-800 font-semibold">
                  Start a conversation
                </h4>
                <p className="text-gray-600 text-sm">
                  Hi! Click one of our team members below to chat on WhatsApp.
                </p>
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setShowNotification(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <X size={20} />
            </button>
          </div>

          <div className="flex items-center mt-4 p-3 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200 transition-all">
            <User className="mr-3 text-green-500" />
            <p className="text-gray-800 font-medium">Dennis Peter Munyao</p>
          </div>
        </div>
      )}

      {/* Floating WhatsApp Button */}
      <button
        onClick={() => setShowNotification((prev) => !prev)}
        className="bg-green-500 hover:bg-green-600 transition-all duration-200 h-16 w-16 flex items-center justify-center rounded-full shadow-lg"
      >
        {showNotification ? (
          <X size={30} className="text-white" /> // Show "X" when notification is open
        ) : (
          <Image
            src="/icons/whatsapp.png"
            width={40}
            height={40}
            alt="WhatsApp Icon"
          />
        )}
      </button>
    </div>
  );
};

export default WhatsAppIcon;
