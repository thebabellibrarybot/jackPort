import { useContext } from "react";

import { ThemeContext } from "../context/themeContext";

export const useTheme = () => {
    return useContext(ThemeContext);
}