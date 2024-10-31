
import './App.css'
import {ThemeProvider} from "./ThemeProvider.tsx";
import {ThemeSwitcher} from "./ThemeSwitcher.tsx";

function App() {

  return (
    <>
      <ThemeProvider>
        <ThemeSwitcher />
      </ThemeProvider>

    </>
  )
}

export default App
