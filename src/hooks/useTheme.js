import { useContext } from "react";

import ThemeContext from "../context/themeProvider";

const useTheme = () => {
    console.log('useTheme.js used')
    console.log(ThemeContext)
    return useContext(ThemeContext);
}

export default useTheme;
