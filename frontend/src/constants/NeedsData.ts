import { HandHelping, Handshake, TriangleAlert } from "lucide-react";

import { IneedsData } from "@/types/NeedsData";

const needsData: IneedsData[] = [
  {
    id:1,
    title: "Donate",

    icon: HandHelping,

    link: "#",

    description:
      "Your generous contributions help fund rehabilitation programs, education, and vocational training, giving youth a chance to rebuild their lives.",
    buttonText: "Donate Now",
  },
  {
    id:2,
    title: "Volunteer",

    icon: Handshake,

    link: "#",

    description:
      "Be a mentor, educator, or supporter—your time and skills can inspire and empower reformed youth to achieve their potentia",
    buttonText: "Sign Up to Volunteer",
  },
  {
    id:3,
    title: "Spread the Word",

    icon: TriangleAlert,

    link: "#",

    description:
      "Raise awareness by sharing our mission with your network, helping us reach more people and make a bigger impact.",
    buttonText: "",
  },
];

export { needsData };
