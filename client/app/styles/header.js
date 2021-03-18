import styled from 'styled-components'

export const Head = styled.div `
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    width: 6%;
    background-color: white;
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
        color: #5f9ea0;
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
`