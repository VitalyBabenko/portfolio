import { ReactNode } from "react";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { MdAnchor } from "react-icons/md";
import { GiFoxTail } from "react-icons/gi";
import { MdOutlineCastForEducation } from "react-icons/md";
const VerticalTimelineElement: any =
  require("react-vertical-timeline-component").VerticalTimelineElement;

interface ExperienceStepProps {
  theme: string;
  years: string;
  title: string;
  icon: string;
  location: string;
  description: string;
}

const ExperienceBlock = (props: ExperienceStepProps) => {
  const { theme, years, icon, title, location, description } = props;

  const getIconByKeyword = (keyword: string): ReactNode | null => {
    switch (keyword) {
      case "react":
        return <FaReact />;
      case "anchor":
        return <MdAnchor />;
      case "graduationCap":
        return <LuGraduationCap />;
      case "foxTail":
        return <GiFoxTail />;
      case "education":
        return <MdOutlineCastForEducation />;
      default:
        return null;
    }
  };

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
        boxShadow: "none",
        border: "1px solid rgba(0, 0, 0, 0.05)",
        textAlign: "left",
        padding: "1.3rem 2rem",
      }}
      contentArrowStyle={{
        borderRight:
          theme === "light"
            ? "0.4rem solid #9ca3af"
            : "0.4rem solid rgba(255, 255, 255, 0.5)",
      }}
      date={years}
      icon={getIconByKeyword(icon)}
      iconStyle={{
        background: theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
        fontSize: "1.5rem",
      }}
    >
      <h3 className="font-semibold capitalize">{title}</h3>
      <p className="font-normal !mt-0">{location}</p>
      <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
        {description}
      </p>
    </VerticalTimelineElement>
  );
};

export default ExperienceBlock;
