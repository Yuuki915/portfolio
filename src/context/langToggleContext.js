import { createContext, useState } from "react";

export const LangToggleContext = createContext();

export const LangToggleProvider = ({ children }) => {
  const [langToggle, setLangToggle] = useState(false);
  const value = { langToggle, setLangToggle };

  return (
    <LangToggleContext.Provider value={value}>
      {children}
    </LangToggleContext.Provider>
  );
};
