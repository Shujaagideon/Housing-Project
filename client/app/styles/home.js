import { motion } from 'framer-motion'
import styled, {css} from 'styled-components'


export const Advert = styled(motion.div)`
  height: 10em;
  background-color: #697184;
  width: 100%;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

    & h3{
        font-size: 18px;
        color: #b1a6a4;
    }
    p{
        font-size: 15px;
        color: #f2f1ef;
    }
    & .advert-btn{
        height: 2.2em;
        width: 5.4em;
        font-size: 18px;
        color: #d8cfd4;
        background-color: #5f9ea0;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        padding-left: 2px;
        padding-right: 2px;
    }
`
export const Filters = styled(motion.div)`
    height: 4em;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    margin-top: 30px;
    margin-bottom: 30px;
    color: ${props=>props.theme.headLine};
    & .icon-basic-mixer2{
        margin-right: 10px;
    }
    & .filter-many{
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 60%;
        height: 100%;

        & .children{
            height: 60%;
            width: 10%;
            background: #fff;
            cursor: pointer;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
            border-radius: 10px;
            font-size: 10px;

            i{
                font-size: 20px;
            }
        }
    }
`
export const Cards = styled(motion.div)`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    grid-column-gap: 2.5rem;
    grid-row-gap: 4rem;

    & .house-card{
        background-color: #fff;
        border-radius: 10px;
        height: 14em;
        display: flex;
        flex-direction: column;
        align-items: center;
        box-shadow:${props=>props.theme.boxShadow};
        cursor: pointer;

        & .image{
            height: 70%;
            background-color: #697184;
            border-top-left-radius: inherit;
            border-top-right-radius: inherit;
            overflow: hidden;

            img{
                height: 100%;
                width: 100%;
                object-fit: cover;
            }
        }
        & .desc{
            height: 30%;
            width: 90%;
            font-size: 13px;

            h5{
                height: 40%;
                padding: 0;
                margin: 0;
            }
        }
        & .rating{
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 30%;
            padding-bottom: 20px;
        }
    }
`