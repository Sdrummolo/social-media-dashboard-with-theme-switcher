import React, { useContext } from "react"
import styled from "styled-components"
import ThemeContext from "../utilities/ThemeContext"
import Toggle from "./Toggle"

const Container = styled.div`
  display: flex;
  align-items: center;
`

const Mode = styled.h4`
  color: ${({ theme }) => theme.colorPrimary};
  margin-right: 0.8rem;
`

const ThemeToggle = () => {
  const { activeTheme, changeTheme } = useContext(ThemeContext)

  return (
    <Container>
      <Mode>{`${activeTheme[0].toUpperCase()}${activeTheme.slice(1)}`} Mode</Mode>
      <Toggle />
    </Container>
  )
}

export default ThemeToggle
