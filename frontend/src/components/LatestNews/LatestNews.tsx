import React from "react";
import MajorSectionTitle from "../Titles/Section";
import { MessageCircle, Eye, ClipboardList } from "lucide-react"; // Better icon for reasons
import { news } from "@/constants/LatestData";

const LatestNews = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        {/* Section Title */}
        <div className="text-center mb-10">
          <MajorSectionTitle title="LATEST NEWS & ARTICLES" centered />
          <p className="text-lg text-gray-700 font-medium mt-4">
            Stay Updated with Our Latest News & Insights
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map(
            ({ id, imgUrl, why, title, description, comments, views }) => (
              <div
                key={id}
                className="bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105"
              >
                {/* News Image */}
                <div className="relative h-56">
                  <img
                    src={imgUrl}
                    alt={title || "News Image"}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Metadata Section */}
                <div className="flex items-center justify-between text-gray-600 text-sm px-6 py-3 bg-gray-100">
                  <span className="flex items-center gap-2">
                    <ClipboardList className="w-4 h-4 text-orange-500" /> {why}
                  </span>
                  <span className="flex items-center gap-2">
                    <MessageCircle className="w-4 h-4 text-blue-500" />{" "}
                    {comments.length > 0 ? comments : "No comments"}
                  </span>
                  <span className="flex items-center gap-2">
                    <Eye className="w-4 h-4 text-green-500" /> {views}
                  </span>
                </div>

                {/* News Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
