"use client"

import { Children, createContext, useState } from "react"

export const ThemeContext = createContext ()

export const ThemeProvider = ({children}) => {

    const [mode, setMode] = useState ("dark");

    const toggle =() => {
        setMode ((prev) => (prev === "dark" ? "light" : "dark"));
    };

    <ThemeContext.Provider value={{toggle, mode}}>
        <div className={`theme ${mode}`}>
        {Children}
        </div>
    </ThemeContext.Provider>

}