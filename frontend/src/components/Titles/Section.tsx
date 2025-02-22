import { HandCoinsIcon } from "lucide-react";
const MajorSectionTitle = ({
  title,
  centered,
}: {
  title: any;
  centered: any;
}) => {
  return (
    <div>
      <div
        className={`flex items-start  gap-4 ${
          centered ? "justify-center" : ""
        }`}
      >
        <span className="text-orange-500">
          <HandCoinsIcon size={50} />
        </span>
        <h2 className="text-4xl font-bold text-gray-900">{title}</h2>
      </div>
    </div>
  );
};

export default MajorSectionTitle;
