import React, { useState } from "react"
import ThemeContext from "./ThemeContext"

const ThemeState = ({ children }) => {
  const [activeTheme, setActiveTheme] = useState("light")

  const changeTheme = () => {
    activeTheme === "light" ? setActiveTheme("dark") : setActiveTheme("light")
  }

  const kFormatter = num => {
    if (num > 9999) {
      return Math.abs(num) > 999
        ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k"
        : Math.sign(num) * Math.abs(num)
    } else {
      return num
    }
  }

  return (
    <ThemeContext.Provider
      value={{
        activeTheme,
        changeTheme,
        kFormatter,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeState
