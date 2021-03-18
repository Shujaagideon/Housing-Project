import styled, {css} from 'styled-components'

export const Container = styled.div `
  position: fixed;
  top: 0;
  left: 6%;
  width: 80%;
  min-height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;

`
export const Wrapp = styled.div`
  width: 85%;
  ${props=> props.center && css`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90vh;
  `}
`
export const CustomBtn = styled.div `
  height: 2.5em;
  width: 5.4em;
  font-size: 15px;
  color: #fff;
  background-color: #5f9ea0;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding-left: 2px;
  padding-right: 2px;
  border: 2px solid #5f9ea0;
  ${props => props.login && css`
    background-color: #fff;
    border: 2px solid #5f9ea0;
    color: #5f9ea0;
  `}

  a{
    text-decoration: none;
  }
`
export const StartTitle = styled.div`
    font-size: 2rem;
    align-self: flex-start;
    ${props => props.center && css`
      color: #5f9ea0;
      align-self: center;
      margin-bottom: 50px;
  `}
`