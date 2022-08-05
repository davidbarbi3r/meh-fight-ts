import React, { useState, createContext } from "react";

type Theme = "light" | "dark"

interface IThemeContext {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
}

const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

const ThemeContextProvider = ({props}: any) => {
  const [theme, setTheme] = useState<Theme>("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {props}
    </ThemeContext.Provider>
  );
};

export { ThemeContextProvider, ThemeContext };
