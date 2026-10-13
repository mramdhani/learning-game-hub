import { useEffect } from "react";
import { useTheme } from "next-themes";

const STORAGE_KEY = "chakra-ui-color-mode";

function ThemeInitializer() {
  const { setTheme } = useTheme();

  useEffect(() => {
    const savedTheme = localStorage.getItem(STORAGE_KEY);

    if (savedTheme === null) {
      setTheme("dark");
    }
  }, [setTheme]);

  return null;
}

export default ThemeInitializer;