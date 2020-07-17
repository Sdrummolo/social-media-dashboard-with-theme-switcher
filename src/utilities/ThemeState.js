import React, { useState } from "react"
import ThemeContext from "./ThemeContext"

const ThemeState = ({ children }) => {
  const [activeTheme, setActiveTheme] = useState("light")

  const changeTheme = () => {
    activeTheme === "light" ? setActiveTheme("dark") : setActiveTheme("light")
  }

  return (
    <ThemeContext.Provider
      value={{
        activeTheme,
        changeTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeState
