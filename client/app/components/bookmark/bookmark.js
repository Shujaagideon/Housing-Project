import { motion } from 'framer-motion';
import React from 'react'
import { Container, StartTitle } from '../../styles/common'
import { Cards } from '../../styles/home';
import SmoothScroll from '../SmoothScroll/SmoothScroll';
import { Fdata } from '../UIdata/framerData';

const BookMark = () => {
    return (
        <Container>
            <SmoothScroll>
                <StartTitle center>
                    Bookmarks
                </StartTitle>
                
                <Cards variants={Fdata.ParentCard}>
                    <motion.div variants={Fdata.ChildrenCard} whileHover={{ scale: 1.01 }} className="house-card">
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
                    <motion.div variants={Fdata.ChildrenCard} whileHover={{ scale: 1.01 }} className="house-card">
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
                    <motion.div variants={Fdata.ChildrenCard} whileHover={{ scale: 1.01 }} className="house-card">
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
                    <motion.div variants={Fdata.ChildrenCard} whileHover={{ scale: 1.01 }} className="house-card">
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
                    <motion.div variants={Fdata.ChildrenCard} whileHover={{ scale: 1.01 }} className="house-card">
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

export default BookMark
