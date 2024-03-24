import { useContext, createContext } from "react";

const themeContext = createContext({
  themeMode: "dark",
  darkTheme: () => {},
  lightTheme: () => {},
});

export const ThemeProvider = themeContext.Provider;

export function useTheme() {
  return useContext(themeContext);
}

export default themeContext;
