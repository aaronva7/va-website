import React from 'react'
import {Container, Row, Col, Carousel} from 'react-bootstrap'
import './personcarousel.css'

const PersonCarousel = () => {
    return(
        <div className="n-video-container">
            <Carousel>
            <Carousel.Item>
                <a style={{'color':'inherit'}} href="../Amber">	
                    <div className="position-absolute n-carousel-container">
                        <p className="text-white n-carousel-name lh-normal">Amber</p>
                        <p className="text-white-50 mb-0 n-carousel-title lh-normal">Property Portfolio Manager | View Profile <i className="fal fa-long-arrow-right"></i></p>
                    </div>
                    <div className="carousel-bg-inner"></div>
                    <img src="../u-amber.jpg" className="d-block w-100" alt="Amber" />
                </a>
            </Carousel.Item>
            <Carousel.Item>
                <a style={{'color':'inherit'}} href="../Kristen">		
                    <div className="position-absolute n-carousel-container">
                        <p className="text-white n-carousel-name lh-normal">Kristen</p>
                        <p className="text-white-50 mb-0 n-carousel-title lh-normal">Property Portfolio Manager | View Profile <i className="fal fa-long-arrow-right"></i></p>
                    </div>
                    <div className="carousel-bg-inner"></div>
                    <img src="../u-kristen.jpg" className="d-block w-100" alt="Kristen" />
                </a>
            </Carousel.Item>
            <Carousel.Item>
                <a style={{'color':'inherit'}} href="../Sian">		
                    <div className="position-absolute n-carousel-container">
                        <p className="text-white n-carousel-name lh-normal">Sian</p>
                        <p className="text-white-50 mb-0 n-carousel-title lh-normal">Property Portfolio Manager | View Profile <i className="fal fa-long-arrow-right"></i></p>
                    </div>
                    <div className="carousel-bg-inner"></div>
                    <img src="../u-sian.jpg" className="d-block w-100" alt="Sian" />
                </a>
            </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default PersonCarousel