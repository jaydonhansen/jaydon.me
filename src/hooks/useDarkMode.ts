import { useState } from "react";

export type ThemeType = "light" | "dark";

export function useTheme(): {
  theme: ThemeType;
  changeTheme: () => void;
  } {
  const [theme, setTheme] = useState<ThemeType>(localStorage.getItem("theme") as ThemeType || "light");

  function changeTheme() {
    if (theme === "light") {
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  }
  return { theme, changeTheme };
}
