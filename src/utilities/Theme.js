import React, { useContext } from "react"
import { ThemeProvider } from "styled-components"
import ThemeContext from "./ThemeContext"

const themes = {
  dark: {
    toggle: "linear-gradient(90deg, rgba(55,143,230,1) 0%, rgba(62,218,130,1) 100%);",
    toggleText: "#fff",
    background: "hsl(230, 17%, 14%)",
    topBackground: "hsl(232, 19%, 15%)",
    cardBackground: "hsl(228, 28%, 20%)",
    cardHover: "#333A56",
    textPrimary: "hsl(0, 0%, 100%)",
    textSecondary: "hsl(228, 34%, 66%)",
  },
  light: {
    toggle: "linear-gradient(90deg, rgba(55,143,230,1) 0%, rgba(62,218,130,1) 100%);",
    toggleText: "hsl(230, 22%, 74%)",
    background: "hsl(0, 0%, 100%)",
    topBackground: "hsl(225, 100%, 98%)",
    cardBackground: "hsl(227, 47%, 96%)",
    cardHover: "#E1E3F0",
    textSecondary: "hsl(228, 12%, 44%)",
    textPrimary: "hsl(230, 17%, 14%)",
  },
}

const Theme = ({ children }) => {
  const { activeTheme } = useContext(ThemeContext)

  return <ThemeProvider theme={themes[activeTheme]}>{children}</ThemeProvider>
}

export default Theme
