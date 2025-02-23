import React from "react";
import MajorSectionTitle from "../Titles/Section";

const GetInvolved = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Content Section */}
          <div className="space-y-6">
            <MajorSectionTitle title="GET INVOLVED" centered={false} />
            <h3 className="text-3xl font-bold text-gray-900">
              Join Us In Making A Difference!
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Be a part of the transformative journey to empower youth and build
              a drug-free future. Your support—whether through donations,
              volunteering, or spreading awareness—can help change lives,
              inspire hope, and create lasting impact in our communities.
              Together, we can make a difference!
            </p>
          </div>

          {/* Video Section */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              className="w-full h-64 sm:h-80 lg:h-96"
              src="https://www.youtube.com/embed/rxMyBiKRLt0"
              title="Get Involved Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInvolved;
