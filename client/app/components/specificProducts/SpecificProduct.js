import React from 'react'
import { Container, StartTitle } from '../../styles/common'
import { ProductCategory } from '../../styles/specificProduct'
import SmoothScroll from '../SmoothScroll/SmoothScroll'


const SpecificProduct = () => {
    return (
        <Container>
            <SmoothScroll>
                <StartTitle height='70vh' top='2rem'>
                    Estate Name
                    <p>classics</p>
                </StartTitle>
                <ProductCategory>
                    <div className="hero-categories">
                        <div className="image-Wrapper">
                            <img src="./assets/img/79b7afce9d5bec1f44bf0986743e4354.jpg" alt="" />
                            <h4>living room</h4>
                        </div>
                        <div className="image-Wrapper">
                            <img src="./assets/img/5c18a9fd00dcd5b779569385c7abb9e3.png" alt="" />
                            <h4>kitchen</h4>
                        </div>
                        <div className="image-Wrapper">
                            <img src="./assets/img/2799345e01cca2007fbb75fd3e52029b.jpg" alt="" />
                            <h4>bedrooms</h4>
                        </div>
                    </div>
                </ProductCategory>
            </SmoothScroll>
        </Container>
    )
}

export default SpecificProduct
