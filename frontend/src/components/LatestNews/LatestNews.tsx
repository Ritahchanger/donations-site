import React from "react";

import MajorSectionTitle from "../Titles/Section";

const LatestNews = () => {
  return (
    <div className="py-12">
      <div>
        <div className="container">
          <div className="text-center">
            <MajorSectionTitle title="LATEST NEWS & ARTICLE" centered />
            <p className="text-lg text-gray-700 font-medium mt-4">
              Get Updated From Our News & Insights
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
