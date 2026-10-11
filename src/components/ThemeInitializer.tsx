import { useEffect } from "react";
import { useTheme } from "next-themes";

function ThemeInitializer() {
  const { setTheme } = useTheme();

  useEffect(() => {
    if (localStorage.getItem("theme") === null) {
      setTheme("dark");
    }
  }, [setTheme]);

  return null;
}

export default ThemeInitializer;