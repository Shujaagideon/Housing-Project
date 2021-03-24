import { motion } from 'framer-motion'
import styled, {createGlobalStyle, css} from 'styled-components'


export const GlobalStyles = createGlobalStyle`
  *{
    text-decoration: none;
  }
  html{
    box-sizing: border-box;
    -webkit-font-smoothing: anti-aliased;
    font-size: 18px;
    font-weight: 400;
  }
  body{
    overscroll-behavior: none;
    overflow-x: hidden;
    font-family: cambria;
    background: ${props => props.theme.background};
    color: ${props => props.theme.textColor};
    transition: .5s;
  }
`

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
export const Wrapp = styled(motion.div)`
  width: 85%;
  position: relative;
  ${props=> props.center && css`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90vh;
  `}
`
export const CustomBtn = styled(motion.div) `
  height: 2.5em;
  width: 5.4em;
  font-size: 15px;
  color: #fff;
  background-color: ${props=>props.theme.headLine};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding-left: 2px;
  padding-right: 2px;
  border: 2px solid ${props=>props.theme.headLine};
  ${props => props.login && css`
    background-color: #fff;
    border: 2px solid ${props=>props.theme.headLine};
    color: ${props=>props.theme.headLine};
  `}

  a{
    text-decoration: none;
  }
`
export const StartTitle = styled(motion.div)`
    font-size: 2rem;
    align-self: flex-start;
    color: ${props=>props.theme.headLine};
    height: ${props => props.height ? props.height : ''};
    margin-top: ${props => props.top ? props.top : ''};
    ${props => props.center && css`
      color: ${props=>props.theme.headLine};
      align-self: center;
      margin-bottom: 50px;
      margin-top: 10px;
  `}

  p{
    font-size: 1rem;
    font-weight: 800;
  }
`