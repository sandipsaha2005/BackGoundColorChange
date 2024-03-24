import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ThemeProvider } from "./context/theme";
import ThemeBtn from "./component/ThemeBtn";
import Card from "./component/Card";
function App() {
  const [themeMode, setThemeMode] = useState("light");
  console.log(themeMode)
  const lightTheme=()=>{
    setThemeMode("light")
  }
  const darkTheme=()=>{
    setThemeMode("dark")
  }
  console.log(themeMode)
  useEffect(()=>{
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode);
  },[themeMode])

  return (
    <ThemeProvider value={{themeMode, darkTheme,lightTheme}}>
    <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
          <ThemeBtn/>
        </div>

        <div className="w-full max-w-sm mx-auto">
          <Card></Card>
        </div>
      </div>
    </div>
    </ThemeProvider>
  );
}

export default App;
