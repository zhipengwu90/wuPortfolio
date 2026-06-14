"use client";
import React, { useEffect, useState } from "react";

interface Theme {
  mode: string;
  setMode: React.Dispatch<React.SetStateAction<string>>;
}

const useThemeSwitcher = (): Theme => {
  const [mode, setMode] = useState("light");
  const preferDarkQuery = "(prefers-color-scheme: dark)";

  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery);

    const handleChange = () => {
      const userPref = window.localStorage.getItem("theme");
      // A saved preference always wins; otherwise follow the system setting.
      const check = userPref
        ? userPref === "dark"
          ? "dark"
          : "light"
        : mediaQuery.matches
        ? "dark"
        : "light";

      setMode(check);
      document.documentElement.classList.toggle("dark", check === "dark");
    };
    handleChange();

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Explicit user changes persist the choice and apply it immediately.
  const setModePersist: React.Dispatch<React.SetStateAction<string>> = (value) => {
    setMode((prev) => {
      const next = typeof value === "function" ? value(prev) : value;
      window.localStorage.setItem("theme", next);
      document.documentElement.classList.toggle("dark", next === "dark");
      return next;
    });
  };

  return { mode, setMode: setModePersist };
};

export default useThemeSwitcher;
