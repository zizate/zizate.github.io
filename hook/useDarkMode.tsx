import React, { useEffect } from "react";
import { usePrefersDarkMode } from "./usePrefersDarkMode";
import { useSafeLocalStorage } from "./useSafeLocalStorage";

const useDarkMode = () => {
  const prefersDarkMode = usePrefersDarkMode();
  const [isEnabled, setIsEnabled] = useSafeLocalStorage("dark-mode", undefined);
  const enabled = isEnabled === undefined ? prefersDarkMode : isEnabled;

  useEffect(() => {
    if (window === undefined) return;
    const root = window.document.documentElement;
    root.classList.remove(enabled ? "light" : "dark");
    root.classList.add(enabled ? "dark" : "light");
    // root.setAttribute("data-theme", enabled ? "dark" : "light");
  }, [enabled]);

  return [enabled, setIsEnabled];
};

export default useDarkMode;
