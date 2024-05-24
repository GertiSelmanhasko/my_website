import React, { ReactNode, createContext, useState } from "react";

const AppContext = createContext<any>({});

type AppContextProviderProps = {
  children?: ReactNode;
};

type theme = string;

const AppContextProvider: React.FC<AppContextProviderProps> = ({
  children,
}: {
  children?: ReactNode;
}) => {
  const [theme, setTheme] = useState("dark");

  const contextValue = { theme, setTheme };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
