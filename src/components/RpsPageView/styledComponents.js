import styled from 'styled-components'

export const AppContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: #223a5f;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
`
export const RulesView = styled.div`
  align-self: flex-end;
  margin-bottom: 20px;
`
export const PopUpView = styled.div`
  display: flex;
  flex-direction: column;
  height: 250px;
  width: 100%;
  justify-content: space-between;
  padding: 10px;
  @media screen and (min-width: 768px) {
    height: 80vh;
  }
`
export const PopUpImage = styled.img`
  width: 100%;
  height: 90%;
  margin-top: auto;
`
