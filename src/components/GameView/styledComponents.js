import styled from 'styled-components'

export const GameViewContainer = styled.div`
  width: 400px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 70px;
  @media screen and(min-width:678px) {
    margin-top: 100px;
  }
`
export const ChoiceButton = styled.button`
  width: 150px;
  height: 150px;
  background-color: transparent;
  border-style: none;
  outline: none;
  @media screen and (min-width: 678px) {
    width: 200px;
    height: 200px;
  }
`
export const ChoiceImage = styled.img`
  width: 150px;
  height: 150px;
  @media screen and (min-width: 678px) {
    width: 200px;
    height: 200px;
  }
`
export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  margin-right: 10px;
  @media screen and (min-width: 678px) {
    margin-left: 0px;
    margin-right: 0px;
  }
`
export const ResultName = styled.p`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 18px;
  font-weight: 700;
  @media screen and (min-width: 678px) {
    font-size: 24px;
  }
`
export const GameImage = styled.img`
  width: 150px;
  height: 150px;
  @media screen and (min-width: 678px) {
    width: 200px;
    height: 200px;
  }
`
export const ResultText = styled.p`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 18px;
  font-weight: 700;
  @media screen and (min-width: 678px) {
    font-size: 24px;
  }
`
export const ResultButton = styled.button`
  width: 150px;
  height: 40px;
  font-family: 'Bree Serif';
  color: #223a5f;
  font-size: 15px;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border-style: none;
  outline: none;
  @media screen and (min-width: 768px) {
    width: 200px;
    height: 50px;
    font-size: 18px;
  }
`
