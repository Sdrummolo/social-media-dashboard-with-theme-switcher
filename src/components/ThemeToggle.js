import React, { useContext } from "react"
import styled from "styled-components"
import ThemeContext from "../utilities/ThemeContext"
import Toggle from "./Toggle"

const Container = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 1216px) {
    justify-content: space-between;
  }
`

const Mode = styled.h4`
  color: ${({ theme, activeTheme }) =>
    activeTheme === "light" ? theme.textSecondary : theme.textPrimary};
  margin-right: 0.8rem;
`

const ThemeToggle = () => {
  const { activeTheme } = useContext(ThemeContext)

  return (
    <Container>
      <Mode activeTheme={activeTheme}>
        {`${activeTheme[0].toUpperCase()}${activeTheme.slice(1)}`} Mode
      </Mode>
      <Toggle />
    </Container>
  )
}

export default ThemeToggle
