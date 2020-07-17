import React, { useContext } from "react"
import styled from "styled-components"
import ThemeContext from "../utilities/ThemeContext"

const Container = styled.div`
  display: flex;
`

const Mode = styled.h4`
  color: ${({ theme }) => theme.colorPrimary};
`

const ThemeToggle = () => {
  const { activeTheme, changeTheme } = useContext(ThemeContext)
  return (
    <Container>
      <Mode>{`${activeTheme[0].toUpperCase()}${activeTheme.slice(1)}`} Mode</Mode>
      <button onClick={changeTheme}>ThemeToggle</button>
    </Container>
  )
}

export default ThemeToggle
