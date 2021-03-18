import React from 'react'
import { Container, Wrapp, StartTitle} from '../../styles/common'
import { Advert, Filters, Cards } from '../../styles/home';
import SmoothScroll from '../SmoothScroll/SmoothScroll';

const Home = () => {
  return (
    <Container>
      <SmoothScroll>
        <StartTitle>
          <h2>Day&apos;s Offer</h2>
        </StartTitle>
        <Advert>
          <Wrapp>
            <h3>Donholm Phace IV Apartment</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus provident doloremque earum iste at inventore unde, obcaecati, saepe voluptas temporibus cum harum odit minima illo recusandae ipsum eligendi neque beatae quidem fugiat, atque ex rerum reprehenderit dolore. Hic, iste voluptas?
          </p>

            <div className="advert-btn">
              <p>Check Now</p>
            </div>
          </Wrapp>
        </Advert>
        <Filters>
          <div className="filter">
            <i className="icon-basic-mixer2"></i>
            filters
          </div>
          <div className="filter-many">
            <div className="all children">
              <i className="icon-ecommerce-graph3"></i>
              <h4>All</h4>
            </div>
            <div className="price children">
              <i className="icon-ecommerce-lira"></i>
              <h4>Price</h4>
            </div>
            <div className="place children">
              <i className="icon-basic-geolocalize-01"></i>
              <h4>Place</h4>
            </div>
            <div className="date children">
              <i className="icon-basic-clockwise"></i>
              <h4>Date</h4>
            </div>
          </div>
        </Filters>
        <Cards>
          <div className="house-card">
            <div className="image">
              <img src="./assets/img/79b7afce9d5bec1f44bf0986743e4354.jpg" alt="" />
            </div>
            <div className="desc">
              <h4>kileleshwa DownTown</h4>
              <div className="rating">
                <h5>view</h5>
                <h5>view</h5>
              </div>
            </div>
          </div>
          <div className="house-card">
            <div className="image">
              <img src="./assets/img/5c18a9fd00dcd5b779569385c7abb9e3.png" alt="" />
            </div>
            <div className="desc">
              <h4>kileleshwa DownTown</h4>
              <div className="rating">
                <h5>view</h5>
                <h5>view</h5>
              </div>
            </div>
          </div>
          <div className="house-card">
            <div className="image">
              <img src="./assets/img/2799345e01cca2007fbb75fd3e52029b.jpg" alt="" />
            </div>
            <div className="desc">
              <h4>kileleshwa DownTown</h4>
              <div className="rating">
                <h5>view</h5>
                <h5>view</h5>
              </div>
            </div>
          </div>
          <div className="house-card">
            <div className="image">
              <img src="./assets/img/79b7afce9d5bec1f44bf0986743e4354.jpg" alt="" />
            </div>
            <div className="desc">
              <h4>kileleshwa DownTown</h4>
              <div className="rating">
                <h5>view</h5>
                <h5>view</h5>
              </div>
            </div>
          </div>
          <div className="house-card">
            <div className="image">
              <img src="./assets/img/2799345e01cca2007fbb75fd3e52029b.jpg" alt="" />
            </div>
            <div className="desc">
              <h5>kileleshwa DownTown</h5>
              <div className="rating">
                <p>view</p>
                <p>view</p>
              </div>
            </div>
          </div>
        </Cards>
      </SmoothScroll>
    </Container>
  )
}

export default Home
