"use client";

import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const DarkMode = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMOunted] = useState(false);
  const currTheme = theme === "system" ? systemTheme : theme;
  useEffect(() => setMOunted(true), []);
  return (
    <div>
      {mounted &&
        (currTheme === "dark" ? (
          <MdOutlineLightMode
            onClick={() => {
              setTheme("light");
            }}
            className="text-xl cursor-pointer hover:text-amber-500"
          />
        ) : (
          <MdDarkMode
            onClick={() => {
              setTheme("dark");
            }}
            className="text-xl cursor-pointer hover:text-amber-500"
          />
        ))}
    </div>
  );
};

export default DarkMode;
