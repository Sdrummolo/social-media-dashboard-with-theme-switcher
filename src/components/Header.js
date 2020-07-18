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

  @media (max-width: 1216px) {
    flex-direction: column;
    margin-bottom: 2rem;
  }
`

const Title = styled.h1`
  color: ${props => props.theme.textPrimary};
  margin-bottom: 0.3rem;

  @media (max-width: 620px) {
    font-size: 1.4rem;
  }
`

const Followers = styled.h4`
  color: ${props => props.theme.textSecondary};

  span {
    font-size: 1rem;
  }
`

const Separator = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${({ theme }) => theme.cardBackground};
  margin: 1rem auto 0.6rem auto;
  display: none;

  @media (max-width: 1216px) {
    display: block;
  }
`

const CardsContainerLarge = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2rem;
  margin-bottom: 2.5rem;

  @media (max-width: 1216px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 620px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
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
        <Separator />
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
