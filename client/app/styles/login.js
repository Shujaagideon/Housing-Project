import { motion } from 'framer-motion'
import styled, {css} from 'styled-components'


export const LogWrapper = styled(motion.div) `
    height: 30em;
    width: 80%;
    border-radius: 10px;
    box-shadow: inset -1px 1px 22px #b1a6a4;
    box-shadow: 1px 1px 22px #b1a6a4;
    background: #fff;
    color: pink;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: ${props=> props.login ? 'space-around': ''};
`
export const Form = styled(motion.form) `
    height: ${props=> props.login ? 40 : 80}%;
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    label{
        font-size: 0.7rem;
        margin-left: 1.2rem;
        margin-top: .7rem;
        display: block;
        color: #888;
        transition: ease-in-out 0.3s;
    }
    & input:placeholder-shown + label{
        opacity: 0;
        visibility: hidden;
        transform: translateY(-2rem);
    }
`
export const Input = styled.input `
    border: none;
    color: #333;
    border-bottom: solid 1px #888;
    font-size: 1.2rem;
    padding: 0.8rem 1.2rem;
    transition: ease-in .3s;

    &:focus{
        outline: none;
        border-bottom: solid 1px #055;
        box-shadow: 0 1rem 2rem #c9c9c9;

        &:invalid{
            border-bottom: solid 2px #940;
        }
    }
    &::-webkit-input-placeholder{
        color: #999;
    }
`