import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { AppContextProvider } from "./context/AppContext";
import Router from "./router";

function App() {
  return (
    <BrowserRouter>
      <AppContextProvider>
        <Router />
      </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;
