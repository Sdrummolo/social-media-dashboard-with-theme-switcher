import React, { useContext } from "react"
import styled from "styled-components"
import facebook from "../images/icon-facebook.svg"
import twitter from "../images/icon-twitter.svg"
import instagram from "../images/icon-instagram.svg"
import youtube from "../images/icon-youtube.svg"
import up from "../images/icon-up.svg"
import down from "../images/icon-down.svg"
import ThemeContext from "../utilities/ThemeContext"

const Container = styled.div`
  min-width: 270px;
  max-width: 270px;
  background-color: ${({ theme }) => theme.cardBackground};
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s;
  padding: 1.2rem;

  @media (max-width: 620px) {
    min-width: 327px;
    max-width: 327px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.cardHover};
  }
`

const Stat = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;

  h4 {
    color: ${({ theme }) => theme.textSecondary};
  }
`

const Numbers = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  div {
    display: flex;
    align-items: center;

    img {
      margin-right: 0.2rem;
    }
  }
`

const Amount = styled.div`
  h3 {
    font-size: 2rem;
    color: ${({ theme }) => theme.textPrimary};
  }
`

const GainedToday = styled.p`
  color: ${({ color }) => color};
  font-weight: 600;
`

const CardSmall = ({ data }) => {
  const { kFormatter } = useContext(ThemeContext)
  const { social, stat, amount, growth } = data

  let icon
  if (social === "facebook") icon = facebook
  if (social === "twitter") icon = twitter
  if (social === "instagram") icon = instagram
  if (social === "youtube") icon = youtube

  return (
    <Container>
      <Stat>
        <h4>{stat}</h4>
        <img src={icon} alt={social} />
      </Stat>
      <Numbers>
        <Amount>
          <h3>{kFormatter(amount)}</h3>
        </Amount>
        <div>
          <img src={growth >= 0 ? up : down} alt={growth >= 0 ? "Up" : "Down"} />
          <GainedToday color={growth >= 0 ? "hsl(163, 72%, 41%)" : "hsl(356, 69%, 56%)"}>
            {kFormatter(Math.abs(growth))}%
          </GainedToday>
        </div>
      </Numbers>
    </Container>
  )
}

export default CardSmall
