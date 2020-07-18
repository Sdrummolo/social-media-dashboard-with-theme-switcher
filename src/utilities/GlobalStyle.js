import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap'); 
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-size: 14px;
    font-family: 'Inter', sans-serif;
    background-color: ${({ theme }) => theme.background};
    transition: all .2s;
  }
`
export default GlobalStyle
