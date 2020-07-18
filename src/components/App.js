import React from "react"
import styled from "styled-components"
import GlobalStyle from "../utilities/GlobalStyle"
import Header from "./Header"
import Overview from "./Overview"

const Container = styled.div`
  margin: auto;
  padding: 0 1rem;
  max-width: 1208px;
`

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
