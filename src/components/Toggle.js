import React, { useContext } from "react"
import styled from "styled-components"
import ThemeContext from "../utilities/ThemeContext"

const ToggleContainer = styled.div`
  width: 50px;
  height: 26px;
  background: ${({ theme }) => theme.toggle};
  border-radius: 12.5px;
  transition: all 0.2s;
`

const Button = styled.button`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  border: none;
  background-color: ${({ theme }) => theme.topBackground};
  position: relative;
  left: ${({ activeTheme }) => (activeTheme === "light" ? "27px" : "3px")};
  top: 2.5px;
  cursor: pointer;
  outline: none;
  transition: all 0.2s;
`

const Toggle = () => {
  const { activeTheme, changeTheme } = useContext(ThemeContext)

  return (
    <ToggleContainer activeTheme={activeTheme}>
      <Button activeTheme={activeTheme} onClick={changeTheme} />
    </ToggleContainer>
  )
}

export default Toggle
