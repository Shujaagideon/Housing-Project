import { motion } from 'framer-motion';
import React from 'react'
import { Container, Wrapp, StartTitle} from '../../styles/common'
import { Advert, Filters, Cards } from '../../styles/home';
import SmoothScroll from '../SmoothScroll/SmoothScroll';
import { Fdata } from '../UIdata/framerData';
import { useGlobalState } from '../UIdata/statecontext';

const Home = () => {
  const {theme} = useGlobalState();
  console.log(theme);
  return (
    <Container>
      <SmoothScroll>
        <StartTitle initial={{opacity: 0}} animate={{opacity: 1}} exit={{ opacity: 0 }}>
          <h2>Day&apos;s Offer</h2>
        </StartTitle>
        <Advert initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
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
        <Filters variants={Fdata.ParentCard}>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="filter">
            <i className="icon-basic-mixer2"></i>
            filters
          </motion.div>
          <motion.div variants={Fdata.ParentCard} className="filter-many">
            <motion.div variants={Fdata.ChildrenCard} className="all children">
              <i className="icon-ecommerce-graph3"></i>
              <h4>All</h4>
            </motion.div>
            <motion.div variants={Fdata.ChildrenCard} className="price children">
              <i className="icon-ecommerce-lira"></i>
              <h4>Price</h4>
            </motion.div>
            <motion.div variants={Fdata.ChildrenCard} className="place children">
              <i className="icon-basic-geolocalize-01"></i>
              <h4>Place</h4>
            </motion.div>
            <motion.div variants={Fdata.ChildrenCard} className="date children">
              <i className="icon-basic-clockwise"></i>
              <h4>Date</h4>
            </motion.div>
          </motion.div>
        </Filters>
        <Cards variants={Fdata.ParentCard}>
          <motion.div variants={Fdata.ChildrenCard} whileHover={{ scale: 1.01 }} transition={Fdata.transition} className="house-card">
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
          </motion.div>
          <motion.div variants={Fdata.ChildrenCard} whileHover={{ scale: 1.01 }} transition={Fdata.transition} className="house-card">
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
          </motion.div>
          <motion.div variants={Fdata.ChildrenCard} whileHover={{ scale: 1.01 }} transition={Fdata.transition} className="house-card">
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
          </motion.div>
          <motion.div variants={Fdata.ChildrenCard} whileHover={{ scale: 1.01 }} transition={Fdata.transition} className="house-card">
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
          </motion.div>
          <motion.div variants={Fdata.ChildrenCard} whileHover={{ scale: 1.01 }} transition={Fdata.transition} className="house-card">
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
          </motion.div>
        </Cards>
      </SmoothScroll>
    </Container>
  )
}

export default Home
