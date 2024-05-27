import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import profileImg from "../assets/images/profileicon.jpg";
import "./MainPage.css";

interface EducationObject {
  key: string;
  label: string;
}

const MainPage: React.FC = () => {
  const { theme } = useContext(AppContext);

  let educationArray: Array<EducationObject> = [
    { key: "1", label: "Bachelor in Electrical Engineering" },
    { key: "2", label: "Master in Electrical Engineering" },
    { key: "3", label: "Javascript Developer" },
  ];
  let technologiesArray: Array<EducationObject> = [
    { key: "1", label: "HTML, Css, Javascript" },
    { key: "2", label: "React (js & ts)" },
    { key: "3", label: "Angular" },
    { key: "3", label: "Node.js" },
    { key: "3", label: "Express.js" },
    { key: "3", label: ".Net" },
  ];

  return (
    <div
      className="mainPage"
      style={{
        backgroundColor: theme === "dark" ? "black" : "white",
        color: theme === "dark" ? "white" : "black",
      }}
    >
      <div className="mainPageProfileImgContainer">
        <img
          src="/profileicon.jpg"
          alt="Profile Icon"
          height={370}
          width={370}
        />
      </div>
      <div>
        <h1>Gerti Selmanhasko</h1>
        <h1>~If you do something do it 100%</h1>
        <h1>Education</h1>
        <ul>
          {educationArray?.map((item) => {
            return <li key={item?.key}>{item?.label}</li>;
          })}
        </ul>
        <h1>Technologies</h1>
        <ul>
          {technologiesArray?.map((item) => {
            return <li key={item?.key}>{item?.label}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};
export default MainPage;
