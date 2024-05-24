import React, { ReactNode, createContext } from "react";

const AppContext = createContext<any>({});

type AppContextProviderProps = {
  children?: ReactNode;
};

const AppContextProvider: React.FC<AppContextProviderProps> = ({
  children,
}: {
  children?: ReactNode;
}) => {
  const contextValue = {};

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
