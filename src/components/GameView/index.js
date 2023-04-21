import {
  GameViewContainer,
  ChoiceButton,
  ChoiceImage,
  ResultContainer,
  ResultName,
  GameImage,
  ResultText,
  ResultButton,
} from './styledComponents'

import './index.css'

const GameView = props => {
  const {
    choicesList,
    checkResult,
    isShowResult,
    newArray,
    text,
    gameRestart,
  } = props

  const getGameView = () => (
    <>
      <ChoiceButton
        type="button"
        data-testid="rockButton"
        onClick={() => checkResult(choicesList[0].id)}
      >
        <ChoiceImage
          src={choicesList[0].imageUrl}
          alt={choicesList[0].id}
          key={choicesList[0].id}
        />
      </ChoiceButton>
      <ChoiceButton
        type="button"
        data-testid="scissorsButton"
        onClick={() => checkResult(choicesList[1].id)}
      >
        <ChoiceImage
          src={choicesList[1].imageUrl}
          alt={choicesList[1].id}
          key={choicesList[1].id}
        />
      </ChoiceButton>
      <ChoiceButton
        type="button"
        data-testid="paperButton"
        onClick={() => checkResult(choicesList[2].id)}
      >
        <ChoiceImage
          src={choicesList[2].imageUrl}
          alt={choicesList[2].id}
          key={choicesList[2].id}
        />
      </ChoiceButton>
    </>
  )

  const getGameResult = () => (
    <>
      <ResultContainer>
        <ResultName>YOU</ResultName>
        <GameImage src={newArray[0].imageUrl} alt="your choice" />
      </ResultContainer>
      <ResultContainer>
        <ResultName>OPPONENT</ResultName>
        <GameImage src={newArray[1].imageUrl} alt="opponent choice" />
      </ResultContainer>
      <ResultContainer>
        <ResultText>{text}</ResultText>
        <ResultButton type="button" onClick={gameRestart}>
          PLAY AGAIN
        </ResultButton>
      </ResultContainer>
    </>
  )

  return (
    <GameViewContainer>
      {isShowResult ? getGameResult() : getGameView()}
    </GameViewContainer>
  )
}

export default GameView
