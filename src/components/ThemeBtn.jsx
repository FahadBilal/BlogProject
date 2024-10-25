import React from "react";
import useTheme from "../contexts/theme";

export default function ThemeBtn({ className = "" }) {
  const { themeMode, lightTheme, darkTheme } = useTheme();

  const onChangeBtn = (e) => {
    const darkModeStatus = e.currentTarget.checked;
    if (darkModeStatus) {
      darkTheme();
    } else {
      lightTheme();
    }
  };

  return (
    <div className={`${className}`}>
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          value=""
          className="sr-only peer"
          onChange={onChangeBtn}
          checked={themeMode === "dark"}
        />
        <div className="w-11 h-6 bg-gray-light peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-black dark:peer-focus:ring-white rounded-full peer dark:bg-dark-gray peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-dark-gray after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-dark-gray peer-checked:bg-blue"></div>
      </label>
    </div>
  );
}
