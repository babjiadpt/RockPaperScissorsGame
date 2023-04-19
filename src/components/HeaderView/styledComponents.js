import styled from 'styled-components'

export const NavContainer = styled.div`
  width: 100%;
  border: 1px solid #ffffff;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media screen and (min-width: 678px) {
    width: 60%;
    margin-top: 30px;
    padding-left: 30px;
    padding-right: 30px;
  }
`
export const ItemNamesContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const ItemNames = styled.h1`
  color: #ffffff;
  font-size: 20px;
  font-family: 'Bree Serif';
  margin-top: 0px;
  margin-bottom: 0px;
  font-weight: 550;
  @media screen and (min-width: 678px) {
    font-size: 25px;
  }
`
export const ScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100px;
  background-color: #ffffff;
  border-radius: 10px;
  @media screen and (min-width: 678px) {
    width: 150px;
  }
`
export const ScoreHeading = styled.p`
  font-family: 'Roboto';
  color: #223a5f;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 0px;
  @media screen and (min-width: 678px) {
    font-size: 25px;
  }
`
export const ScoreResult = styled.p`
  font-family: 'Roboto';
  color: #223a5f;
  font-size: 30px;
  font-weight: 900;
  line-height: 1;
  margin-top: 10px;
  @media screen and (min-width: 678px) {
    font-size: 42px;
    margin-top: 0px;
  }
`
