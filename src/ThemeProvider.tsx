import {themes, ThemeContext} from "./ThemeContext.tsx";
import {useState} from "react";


export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes.spring);

  const toggleTheme = () => {
    setTheme(theme === themes.spring ? themes.autumn : themes.spring);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}