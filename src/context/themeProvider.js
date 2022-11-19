import React, { createContext, useState } from "react";

const ThemeContext = createContext({})

const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('light')
    console.log(theme, 'from theme providr')
    

    return ( 
        <ThemeContext.Provider vlaue = {{ theme, setTheme}}>
            {children}
            
        </ThemeContext.Provider>
    )
}
export default ThemeProvider;