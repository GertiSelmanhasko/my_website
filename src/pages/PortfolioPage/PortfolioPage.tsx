import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import surely from "../../assets/images/surely.png";
import "./PortfolioPage.css";
import { ExperienceCardProps } from "../../types/Index";
import ExperienceCard from "../../components/ExperienceCard/ExperienceCard";

const PortfolioPage: React.FC = () => {
  const { theme } = useContext(AppContext);
  let experienceArray: Array<ExperienceCardProps> = [
    {
      key: "1",
      websiteName: "Surely Security",
      experienceDuration: "7 months",
      experienceDescription: "lorem ipsum",
      imageUrl: surely,
      websiteLink: "https://surelysecurity.com/",
    },
  ];
  return (
    <div
      className="portfolioPage"
      style={{
        backgroundColor: theme === "dark" ? "black" : "white",
        color: theme === "dark" ? "white" : "black",
      }}
    >
      {experienceArray?.map((item) => {
        return <ExperienceCard {...item} />;
      })}
    </div>
  );
};
export default PortfolioPage;
