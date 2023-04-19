import {Component} from 'react'

import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import {RiCloseLine} from 'react-icons/ri'

import HeaderView from '../HeaderView'

import GameView from '../GameView'

import {
  AppContainer,
  RulesView,
  PopUpView,
  PopUpImage,
} from './styledComponents'

import './index.css'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class RpsPageView extends Component {
  state = {
    isShowResult: false,
    text: 'YOU WON',
    newArray: [choicesList[0], choicesList[1]],
    score: 0,
  }

  getResult = (option1, option2) => {
    if (option1.id === 'ROCK') {
      switch (option2.id) {
        case 'PAPER':
          return 'YOU LOSE'
        case 'SCISSORS':
          return 'YOU WON'
        default:
          return 'IT IS DRAW'
      }
    } else if (option1.id === 'PAPER') {
      switch (option2.id) {
        case 'ROCK':
          return 'YOU WON'
        case 'SCISSORS':
          return 'YOU LOSE'
        default:
          return 'IT IS DRAW'
      }
    } else {
      switch (option2.id) {
        case 'ROCK':
          return 'YOU LOSE'
        case 'PAPER':
          return 'YOU WON'
        default:
          return 'IT IS DRAW'
      }
    }
  }

  checkResult = id => {
    const {score} = this.state
    const customOption = choicesList.filter(eachOption => eachOption.id === id)
    const randomOption =
      choicesList[Math.floor(Math.random() * choicesList.length)]
    const result = this.getResult(customOption[0], randomOption)

    let newScore = score
    if (result === 'YOU WON') {
      newScore = score + 1
    } else if (result === 'YOU LOSE') {
      newScore = score - 1
    } else {
      newScore = score
    }

    this.setState({
      isShowResult: true,
      newArray: [customOption[0], randomOption],
      text: result,
      score: newScore,
    })
  }

  GameRestart = () => this.setState({isShowResult: false})

  render() {
    const {isShowResult, text, newArray, score} = this.state
    return (
      <AppContainer>
        <HeaderView score={score} />
        <GameView
          choicesList={choicesList}
          isShowResult={isShowResult}
          gameRestart={this.GameRestart}
          text={text}
          newArray={newArray}
          checkResult={this.checkResult}
        />
        <RulesView>
          <Popup
            modal
            trigger={
              <button type="button" className="trigger-button">
                RULES
              </button>
            }
          >
            {close => (
              <PopUpView>
                <button
                  type="button"
                  className="trigger-button-close"
                  onClick={() => close()}
                >
                  <RiCloseLine />
                </button>
                <PopUpImage
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                />
              </PopUpView>
            )}
          </Popup>
        </RulesView>
      </AppContainer>
    )
  }
}

export default RpsPageView
