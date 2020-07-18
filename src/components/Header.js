import React from "react"
import styled from "styled-components"
import ThemeToggle from "./ThemeToggle"
import CardLarge from "./CardLarge"
import data from "../data.json"

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  margin-bottom: 4rem;
`

const Title = styled.h1`
  color: ${props => props.theme.textPrimary};
  margin-bottom: 0.3rem;
`

const Followers = styled.h4`
  color: ${props => props.theme.textSecondary};

  span {
    font-size: 1rem;
  }
`

const CardsContainerLarge = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2rem;
`

const Header = () => {
  const { followers } = data.data

  return (
    <>
      <Container>
        <div>
          <Title>Social Media Dashboard</Title>
          <Followers>
            Total Followers: <span>{followers.toLocaleString()}</span>
          </Followers>
        </div>
        <ThemeToggle />
      </Container>
      <CardsContainerLarge>
        {data.data.total.map(card => {
          return <CardLarge data={card} key={card.social} />
        })}
      </CardsContainerLarge>
    </>
  )
}

export default Header
