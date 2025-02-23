import { HandCoinsIcon } from "lucide-react";

const MajorSectionTitle = ({
  title,
  centered,
}: {
  title: string;
  centered?: boolean;
}) => {
  return (
    <div>
      <div
        className={`flex items-center gap-4 flex-wrap ${
          centered ? "justify-center text-center" : ""
        }`}
      >
        {/* Icon with Responsive Sizing */}
        <span className="text-orange-500">
          <HandCoinsIcon size={40} className="" />
        </span>

        {/* Title with Responsive Font Sizes */}
        <h2 className="text-xl md:text-3xl  font-bold text-gray-900">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default MajorSectionTitle;
