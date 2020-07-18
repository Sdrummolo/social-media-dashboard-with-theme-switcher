import React from "react"
import styled from "styled-components"
import data from "../data.json"
import CardSmall from "./CardSmall"

const Title = styled.h2`
  color: ${({ theme }) => theme.textPrimary};
  margin-bottom: 1rem;
`

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2rem;

  @media (max-width: 1216px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 620px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`

const Overwiew = () => {
  return (
    <>
      <Title>Overview - Today</Title>
      <Container>
        {data.data.today.map((card, i) => {
          return <CardSmall data={card} key={i} />
        })}
      </Container>
    </>
  )
}

export default Overwiew
