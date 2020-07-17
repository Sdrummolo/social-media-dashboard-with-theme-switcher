import React from "react"
import styled from "styled-components"
import ThemeToggle from "./ThemeToggle"

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`

const Title = styled.h1`
  color: ${props => props.theme.textPrimary};
`

const Followers = styled.h4`
  color: ${props => props.theme.textSecondary};
`

const Header = () => {
  return (
    <>
      <Container>
        <div>
          <Title>Social Media Dashboard</Title>
          <Followers>Total Followers: ###</Followers>
        </div>
        <ThemeToggle />
      </Container>
    </>
  )
}

export default Header
