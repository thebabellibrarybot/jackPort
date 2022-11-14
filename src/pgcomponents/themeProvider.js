import { useState } from "react";

import { ThemeContext } from "../context/themeContext";
import { SlideToggle } from "../pgcomponents/slidetoggle";

export const ThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
      setIsDarkMode(prevDarkMode => !prevDarkMode);
    };

    return (
        <ThemeContext.Provider value={ { isDarkMode, toggleDarkMode } }>
            { children }
            <SlideToggle />
        </ThemeContext.Provider>
    );
}