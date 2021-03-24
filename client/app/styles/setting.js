import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'

export const SettingsPage = styled(motion.div)`
    width: 100%;
    height: fit-content;
    display:flex;
    align-items:center;
    justify-content: space-around;
    flex-direction: column;
    transition: .5s;
`
export const Avatar = styled(motion.div)`
    border-radius: 50%;
    overflow: hidden;
    background: ${props => props.theme.avatar};
    transition: .5s;
    ${props => props.large && css`
        height: 15em;
        width: 15em;
    `}
    ${props => props.small && css`
        height: 3em;
        width: 3em;
        display: flex;
        align-items: center;
        justify-content: center;
    `}
`
export const SettComponent = styled(motion.div)`
    width: 100%;
    height: fit-content;
    display:flex;
    margin-top: 3em;
    align-items:center;
    justify-content: space-around;
    flex-direction: column;
    transition: .5s;

    & .ui-settings{
        width: 100%;
        height: 20em;
        background: ${props=>props.theme.headerBg};
        padding: 0 10px;
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
        display:flex;
        align-items:center;
        justify-content: space-around;
        flex-direction: column;

        & .theme-toogle{
            width: 60%;
            height: 20%;
            color: grey;
            display:flex;
            align-items:center;
            justify-content: space-between;
            & .toogle{
                height: 1.6rem;
                width: 4rem;
                border-radius: 30px;
                background:pink;
            }
        }
    }
    & .user-settings{
        width: 100%;
        height: 20em;
        background: ${props=>props.theme.headerBg};
        padding: 0 10px;
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
        margin-top: 40px;
        display:flex;
        align-items:center;
        justify-content: space-around;
        flex-direction: column;
    }
`

export const CheckBox = styled(motion.input)`
    width: 4rem;
    height: 1.8rem;
    -webkit-appearance: none;
    background: ${props=>props.theme.headLine};
    outline: none;
    border-radius: 30px;
    position: relative;
    border: 2px solid ${props=>props.theme.checkBox};
    transition: 0.5s;
    &::before{
        content:'';
        position: absolute;
        top: -5%;
        left: -2.5%;
        height: 1.7rem;
        width: 2.5rem;
        border-radius: 30px;
        background: ${props => props.theme.checkBox};
    }
    &:checked::before{
        left: 35%;
    }
    &::after{
        content:'';
        position: absolute;
        top: 50%;
        left: 50%;
        height: 0.4rem;
        width: 0.4rem;
        border-radius: 50%;
        transform: translate(-50%, -50%);
        background: ${props => props.theme.headLine};
    }
`