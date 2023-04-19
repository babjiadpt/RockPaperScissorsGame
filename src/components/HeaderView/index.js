import './index.css'

import {
  NavContainer,
  ItemNamesContainer,
  ItemNames,
  ScoreContainer,
  ScoreHeading,
  ScoreResult,
} from './styledComponents'

const HeaderView = props => {
  const {score} = props

  return (
    <NavContainer>
      <ItemNamesContainer>
        <ItemNames>
          ROCK <br /> PAPER <br /> SCISSORS
        </ItemNames>
      </ItemNamesContainer>
      <ScoreContainer>
        <ScoreHeading>Score</ScoreHeading>
        <ScoreResult>{score}</ScoreResult>
      </ScoreContainer>
    </NavContainer>
  )
}

export default HeaderView
