import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-size: 14px;
    font-family: 'Inter', sans-serif;
    background-color: ${({ theme }) => theme.background};
    position: relative;
    transition: all .2s;
  }
`
export default GlobalStyle
