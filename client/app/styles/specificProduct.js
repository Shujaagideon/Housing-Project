import styled, { css } from 'styled-components'


export const ProductCategory = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 0;
    top: 2rem;
    width: 70%;
    Height: 70vh;

    & .hero-categories{
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;

        & .image-Wrapper{
            height: 100%;
            width: 28%;
            padding: 10px;
            border-bottom-left-radius: 10px;
            border-bottom-right-radius: 10px;
            overflow: hidden;
            position: relative;

            img{
                height:110%;
                width:110%;
                object-fit: cover;
                object-position: center;
            }

            h4{
                position: absolute;
                bottom: 0;
                align-self: flex-end;
                justify-self: baseline;
                color: white;
                padding:2px 10px;
                backdrop-filter: blur(1px) brightness(80%);
            }
        }
    }
`