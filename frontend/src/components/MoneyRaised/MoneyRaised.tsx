"use client";
import React from "react";
import { Users, HandCoins, Handshake } from "lucide-react";
import CountUp from "react-countup";

const MoneyRaised = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Stat 1: Youths Need Help */}
          <div className="flex items-center gap-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <span className="p-3 bg-orange-100 rounded-full">
              <Handshake className="w-8 h-8 text-orange-500" />
            </span>
            <div>
              <h3 className="text-3xl font-bold text-gray-900">
                <CountUp end={65} duration={8} suffix="%" />
              </h3>
              <p className="text-gray-600">Youths Need Help</p>
            </div>
          </div>

          {/* Stat 2: Raised Now */}
          <div className="flex items-center gap-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <span className="p-3 bg-orange-100 rounded-full">
              <HandCoins className="w-8 h-8 text-orange-500" />
            </span>
            <div>
              <h3 className="text-3xl font-bold text-gray-900">
                <CountUp end={130} duration={8} prefix="KESH " separator="," />
              </h3>
              <p className="text-gray-600">Raised Now</p>
            </div>
          </div>

          {/* Stat 3: Volunteers */}
          <div className="flex items-center gap-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <span className="p-3 bg-orange-100 rounded-full">
              <Users className="w-8 h-8 text-orange-500" />
            </span>
            <div>
              <h3 className="text-3xl font-bold text-gray-900">
                <CountUp end={200} duration={8} separator="," />
              </h3>
              <p className="text-gray-600">Volunteers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoneyRaised;
