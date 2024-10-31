import {createContext, useContext } from "react";

export const themes = {
  spring: {
    background: "#FFEBE5",
    color: "#4CAF50"
  },
  autumn: {
    background: "#954e2a",
    color: "#FFEBE5"
  }
}

export const ThemeContext = createContext({
  theme: themes.spring,
  toggleTheme: () => {}
});

export const useTheme = () => {
  return useContext(ThemeContext);
}