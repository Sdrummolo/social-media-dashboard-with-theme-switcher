import React from "react"
import GlobalStyle from "../utilities/GlobalStyle"
import Container from "../styled_components/container"
import Header from "./Header"
import Overview from "./Overview"

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header />
        <Overview />
      </Container>
    </>
  )
}

export default App
