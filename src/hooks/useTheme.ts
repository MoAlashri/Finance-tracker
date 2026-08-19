import { useEffect } from "react";
import { useAppSelector } from "../store/hooks";

function useTheme() {
  const theme = useAppSelector(
    (state) => state.theme.theme
  );

  useEffect(() => {
    const root = document.documentElement;

    const mediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );

    const applyTheme = () => {
      const shouldUseDark =
        theme === "dark" ||
        (theme === "system" && mediaQuery.matches);

      root.classList.toggle("dark", shouldUseDark);
    };

    applyTheme();

    if (theme === "system") {
      mediaQuery.addEventListener(
        "change",
        applyTheme
      );
    }

    return () => {
      mediaQuery.removeEventListener(
        "change",
        applyTheme
      );
    };
  }, [theme]);

  return theme;
}

export default useTheme;