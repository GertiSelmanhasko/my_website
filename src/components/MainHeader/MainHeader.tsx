import { Menu, Switch } from "antd";
import type { MenuProps } from "antd";
import { Header } from "antd/es/layout/layout";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/AppContext";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    label: <Link to={"/"}>Home Page</Link>,
    key: "1",
  },
  {
    label: <Link to={"/AboutMe"}>About Me</Link>,
    key: "2",
  },

  {
    key: "3",
    label: <Link to={"/Games"}>Games</Link>,
  },
];

const MainHeader: React.FC = () => {
  const { theme, setTheme } = useContext(AppContext);
  function onChange(checked: boolean) {
    if (checked) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }

  return (
    <Header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Menu
        style={{ width: "100%" }}
        theme="dark"
        mode="horizontal"
        items={items}
      />
      <Switch
        defaultChecked={theme === "dark" ? false : true}
        onChange={onChange}
      />
    </Header>
  );
};

export default MainHeader;
