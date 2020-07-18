import React from "react"
import styled from "styled-components"
import GlobalStyle from "../utilities/GlobalStyle"
import Header from "./Header"
import Overview from "./Overview"

const BgTop = styled.div`
  position: absolute;
  height: 250px;
  width: 100%;
  z-index: -1;
  top: -2rem;
  background-color: ${({ theme }) => theme.topBackground};

  @media (max-width: 1216px) {
    height: 220px;
  }
`

const Container = styled.div`
  margin: auto;
  padding: 0 1rem;
  max-width: 1208px;

  @media (max-width: 1216px) {
    max-width: 604px;
  }

  @media (max-width: 620px) {
    max-width: 327px;
    padding: 0;
    margin-bottom: 1rem;
  }
`

const App = () => {
  return (
    <>
      <GlobalStyle />
      <BgTop />
      <Container>
        <Header />
        <Overview />
      </Container>
    </>
  )
}

export default App
