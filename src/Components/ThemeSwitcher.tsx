import { useEffect, useState } from "react";
const ThemeSwitcher = () => {
    const [darkMode, setDarkMode] = useState<boolean>(
        () => localStorage.getItem("theme") === "dark"
    );

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    return (
        <div className="flex items-center mt-auto absolute bottom-0">
            <span className="text-gray-800 dark:text-white font-medium">DARK MODE</span>
            <div
                className={`w-14 h-7 flex items-center rounded-full p-1 ml-[10px] cursor-pointer transition-all duration-300 ${darkMode ? "bg-gray-800" : "bg-gray-400"
                    }`}
                onClick={() => setDarkMode(!darkMode)}
            >
                <div
                    className={`w-5 h-5 bg-white rounded-full shadow-md transition-all duration-300 ${darkMode ? "translate-x-7" : "translate-x-0"
                        }`}
                ></div>
            </div>
        </div>
    )
}
export default ThemeSwitcher