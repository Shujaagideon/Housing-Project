import styled, { css } from 'styled-components'

export const Head = styled.div `
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    width: 6%;
    background-color: ${props=> props.theme.headerBg};
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    & .side-bar{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        height: 60%;
        width: 60%;
    }
    a{
        color: ${props=>props.theme.headLine};
        font-size: 25px;
        font-weight: 800;
        text-decoration: none;
    }
`
export const LogBtns = styled.div `
    position: fixed;
    right: 1.5%;
    top: 0;
    height: 10%;
    width: 15%;
    ${'' /* background: rgba(0, 0, 0, 0.4); */}
    display: flex;
    justify-content: space-around;
    align-items: center;
    ${props=>props.center && css`
        justify-content: center;
    `}
`