import {themes, useTheme} from "./ThemeContext.tsx";
import React from "react";


export const ThemeSwitcher = React.memo(() => {
  const { theme, toggleTheme} = useTheme();

  return (
    <div style={{ backgroundColor: theme.background, color: theme.color, height: '100vh',width: '100vw',        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'}}>
      <h1>Theme Switcher</h1>
      <p>背景のテーマを春と秋で切り替えます</p>
      <button onClick={toggleTheme}>
        {/*{theme === themes.spring ? "秋" : "春"}に切り替える*/}
        切り替え
      </button>
    </div>
  );
})