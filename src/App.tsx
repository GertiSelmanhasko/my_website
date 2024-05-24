import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { AppContextProvider } from "./context/AppContext";
import Router from "./router";
import { ConfigProvider, theme } from "antd";

function App() {
  return (
    <AppContextProvider>
      <ConfigProvider
        theme={{
          algorithm: theme.defaultAlgorithm,
          token: {
            colorPrimary: "#3d7cef",
            // colorText: "#fff",
          },
          components: {
            Layout: {
              headerBg: "#07072D",
              footerBg: "#07072D",
            },
            Menu: {
              darkItemBg: "#07072D",
            },
          },
        }}
      >
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ConfigProvider>
    </AppContextProvider>
  );
}

export default App;
