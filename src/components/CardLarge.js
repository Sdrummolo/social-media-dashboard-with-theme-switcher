import React from "react"
import styled from "styled-components"
import facebook from "../images/icon-facebook.svg"
import twitter from "../images/icon-twitter.svg"
import instagram from "../images/icon-instagram.svg"
import youtube from "../images/icon-youtube.svg"
import up from "../images/icon-up.svg"
import down from "../images/icon-down.svg"

const Container = styled.div`
  min-width: 270px;
  max-width: 270px;
  background-color: ${({ theme }) => theme.cardBackground};
  position: relative;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.cardHover};
  }
`

const Border = styled.div`
  position: absolute;
  width: 100%;
  height: 5px;
  background: ${({ border }) => border};
  border-radius: 5px 5px 0 0;
`

const Social = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem auto 1rem auto;

  img {
    margin-right: 0.5rem;
  }

  h5 {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.textSecondary};
  }
`

const Followers = styled.div`
  text-align: center;

  h1 {
    font-size: 3.5rem;
    color: ${({ theme }) => theme.textPrimary};
  }

  h4 {
    color: ${({ theme }) => theme.textSecondary};
    letter-spacing: 5px;
    font-size: 0.7rem;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 1.5rem;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1.5rem;

    img {
      margin-right: 0.3rem;
    }
  }
`

const GainedToday = styled.p`
  color: ${({ color }) => color};
  font-weight: 600;
`

const CardLarge = ({ data }) => {
  const { social, followers, followersGainedToday, border, account } = data
  let icon

  if (social === "facebook") icon = facebook
  if (social === "twitter") icon = twitter
  if (social === "instagram") icon = instagram
  if (social === "youtube") icon = youtube

  return (
    <Container>
      <Border border={border} />
      <Social>
        <img src={icon} alt={social} />
        <h5>{account}</h5>
      </Social>
      <Followers>
        <h1>{followers}</h1>
        <h4>Followers</h4>
        <div>
          <img
            src={followersGainedToday >= 0 ? up : down}
            alt={followersGainedToday >= 0 ? "Up" : "Down"}
          />
          <GainedToday
            color={followersGainedToday >= 0 ? "hsl(163, 72%, 41%)" : "hsl(356, 69%, 56%)"}
          >
            {Math.abs(followersGainedToday)} Today
          </GainedToday>
        </div>
      </Followers>
    </Container>
  )
}

export default CardLarge
