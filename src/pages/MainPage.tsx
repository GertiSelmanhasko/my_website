import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const MainPage: React.FC = () => {
  const { theme } = useContext(AppContext);
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        backgroundColor: theme === "dark" ? "black" : "white",
        color: theme === "dark" ? "white" : "black",
      }}
    >
      Hello Gerti
    </div>
  );
};
export default MainPage;
