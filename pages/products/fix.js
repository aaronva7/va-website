import React, {useState} from 'react'
import Head from 'next/head'
import Navigation from '../../components/nav'
import Layout from '../../components/layout'
import { Container, Row, Col, Carousel } from 'react-bootstrap'
import FixBenefits from '../../components/FixBenefits'
import TestimonialPanel from '../../components/TestimonialPanel'
import PersonCarousel from '../../components/PersonCarousel'
import FixForm from '../../components/FixForm'
import PopupOverlay from '../../components/PopupOverlay'
import VideoContainer from '../../components/VideoContainer'
import Footer from '../../components/footer'



// Function to reveal lightbox and adding YouTube autoplay
// function revealVideo(div,video_id) {
//     var video = document.getElementById(video_id).src;
//     document.getElementById(video_id).src = video+'&autoplay=1'; // adding autoplay to the URL
//     document.getElementById(div).style.display = 'block';
// }

// // Hiding the lightbox and removing YouTube autoplay
// function hideVideo(div,video_id) {
//     var video = document.getElementById(video_id).src;
//     var cleaned = video.replace('&autoplay=1',''); // removing autoplay form url
//     document.getElementById(video_id).src = cleaned;
//     document.getElementById(div).style.display = 'none';
// }
  class PopupMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showPopup: false
        };
    }
    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
    }
    render() {
        return (
            <div className='d-inline-block'>
            <button onClick={this.togglePopup.bind(this)} className="btn btn-va-fix btn-big f-light smooth-animation mr-3 d-inline-flex align-items-center"><i className='fal fa-play-circle'></i>&nbsp;Watch Video</button> 
            { this.state.showPopup ? 
            <PopupOverlay closePopup={this.togglePopup.bind(this)} />
            
            : null
            }
            </div>
        );
    }
  }
const Fix = () => {
    return (
        <Layout>
            <Head>
            <title>FIX - Real Estate Property Management Maintenance Program | Virtual Agent</title>
            <meta name="description" content="FIX allows tenants, landlords, property managers and trades to request, review and track maintenance items 24/7 and receive live updates from the field" />
            <meta property="og:url" content="https://www.virtualagent.com.au/products/fix" />
            <meta property="og:type" content="website" />
            <meta property="og:title"  content="FIX - Real Estate Property Management Maintenance Program | Virtual Agent" />
            <meta property="og:description" content="FIX allows tenants, landlords, property managers and trades to request, review and track maintenance items 24/7 and receive live updates from the field" />
            {/* <meta property="og:image" content="https://www.virtualagent.com.au/images/fix-wrapped-thumb.jpg" /> */}
            </Head>
            <Navigation />
            
            <header className='header-uni header-home position-relative h-100'>
            <video className="header-video" autoPlay muted loop playsInline poster="../header-hero-image.jpg">
                <source src="../../Meeting-Room.mp4?v=2" type="video/mp4" />
                <source src="../../Meeting-Room.ogg?v=2" type="video/ogg" />
                <source src="../../Meeting-Room.webm?v=2" type="video/webm" />
                Your browser does not support the video tag. We suggest you upgrade your browser.
            </video>
                <Container className='h-100'>
                <Row className='h-100'>
                    <Col>
                    <div className="d-flex h-100 n-header-wrapped-container align-items-start justify-content-center flex-column position-relative">
                        <div className="position-relative" style={{'padding':'0 15px', 'zIndex' : '3'}}>
                            <h1 className="n-header-wrapped-title text-white">FIX</h1>
                            <p className="n-header-wrapped-p text-white fs-25 f-light" style={{'maxWidth': '460px'}}>A better way to handle property maintenance in rental homes.</p>
                            <div className="n-header-wrapped-btn mt-5">
                                <PopupMain />
                                {/* <a href="#" onClick={togglePopup.bind(this)} className="btn btn-va-fix btn-big f-light smooth-animation mr-3 d-inline-flex align-items-center"><i className='fal fa-play-circle'></i>&nbsp;Watch Video</a> */}
                                <a href="#enquire-for-a-demo" className="btn btn-outline-white btn-big f-light d-inline-flex align-items-center smooth-animation">Learn more <i className='fal fa-long-arrow-right ml-2 smooth-animation btn-moveRight'></i></a>
                            </div>
                        </div>
                    </div>
                    </Col>
                </Row>
                </Container>
            </header>
            <section>
                <Container fluid={true} className="content-spacer">
                    <Row>
                        <Col xs={12}>
                            <h2 className="text-center n-product-title text-dgrey">FIX</h2>
                            <p className="text-center n-product-subtext text-lgrey mb-0" style={{'maxWidth' :'390px', 'margin': '0 auto', 'left':'0','right':'0'}}>The maintenance platform providing the worlds #1 renting experience. We make maintenance easy.</p>
                            <div className="n-video-container">
                                <VideoContainer />
                                <div className="n-video-after-container-g">
                                    <div>
                                        <p><i className="fad fa-hard-hat"></i></p>
                                        <h3 className="text-dgrey">Safety warnings and helpful tips</h3>
                                        <p className="text-lgrey">Self help and safety tips help to reduce risk to tenants and agencies.</p>
                                    </div>
                                    <div>
                                        <p><i className="fad fa-hand-holding-seedling"></i></p>
                                        <h3 className="text-dgrey">All the information at once</h3>
                                        <p className="text-lgrey">Smarts to ask the right questions and to collect all the information upfront.</p>
                                    </div>
                                    <div>
                                        <p><i className="fad fa-star"></i></p>
                                        <h3 className="text-dgrey">Star ratings</h3>
                                        <p className="text-lgrey">Feedback brings transparency and comfort.</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section>
                <Container fluid={true} className="content-spacer">
                    <div className="row animated fadeIn">
                        <div className="col-12">
                            <h2 className="text-center n-product-title text-dgrey">Trusted by the most forward thinking users</h2>
                            <p className="text-center n-product-subtext text-lgrey mb-0" style={{'maxWidth':'390px','margin':'0 auto','left':'0','right':'0'}}>Meet the property management professional's who are delivering wold class service to their clients everyday.</p>
                            <PersonCarousel />
                        </div>
                    </div>
                </Container>
            </section>
            <TestimonialPanel />
            
            <FixBenefits />

            <section>
                <div className="container-fluid n-product-spacer animatedParent animateOnce">
                    <div className="row animated fadeIn">
                        <div className="col-12">
                            <h2 className="text-center n-product-title text-dgrey">We're currently integrated with these companies</h2>
                            <p className="text-center n-product-subtext text-lgrey mb-0 title-subtext">Virtual Agent and FIX are proudly independent and look forward to discussing our solutions with you.</p>
                        </div>
                    </div>
                    <div className="row animated fadeIn">
                        <div className="col-12">
                            <div className='integration-grid-container'>
                                <div className="integration-grid">
                                    <div>
                                        <img src="../integration-rest-professional.png" alt="" title="" height="40" />
                                        <p className="mt-3 mb-0 lineheight-normal">REST Professional</p>
                                    </div>
                                    <div>
                                        <img src="../integration-console.png" alt="" title="" height="40" />
                                        <p className="mt-3 mb-0 lineheight-normal">Console</p>
                                    </div>
                                    <div>
                                        <img src="../integration-propertyme.png" alt="" title="" height="40" />
                                        <p className="mt-3 mb-0 lineheight-normal">PropertyME</p>
                                    </div>
                                    <div>
                                        <p className="mt-3 mb-0 lineheight-normal">RPOffice</p>
                                    </div>
                                    <div>
                                        <img src="../integration-property-tree.png" alt="" title="" height="40" />
                                        <p className="mt-3 mb-0 lineheight-normal">PropertyTree</p>
                                    </div>
                                    <div>
                                        <img src="../integration-xero.png" alt="" title="" height="40" />
                                        <p className="mt-3 mb-0 lineheight-normal">Xero</p>
                                    </div>
                                    <div>
                                        <img src="../integration-file-smart.png" alt="" title="" height="40" />
                                        <p className="mt-3 mb-0 lineheight-normal">Filesmart</p>
                                    </div>
                                    <div>
                                        <img src="../integration-aroflo.png" alt="" title="" height="40" />
                                        <p className="mt-3 mb-0 lineheight-normal">Aroflo</p>
                                    </div>
                                    <div>
                                        <img src="../integration-palace-logo.jpg" alt="" title="" height="40" />
                                        <p className="mt-3 mb-0 lineheight-normal">Palace</p>
                                    </div>
                                </div>
                            </div>	
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <Container fluid={true} id="enquire-for-a-demo" className='content-spacer rm-cta-container va-enq-panel'>
                    <Row>
                        <Col xs={12}>
                            <h2 className="text-center n-product-title text-white">Join our happy agencies that are onboard!</h2>
                        </Col>
                        <Col xs={12} className='va-cov-panel text-center'>
                            <ul>
                                <li><img src="../mcconnell-bourn-logo-white-thumb.png" alt="McConnell Bourn Real Estate" title="McConnell Bourn Real Estate" /></li>
                                <li><img src="../leahjay-logo.png" alt="LeahJay Real Estate" title="LeahJay Real Estate" height="17" /></li>
                                <li><img src="../toopandtoop-logo-white-thumb.png" alt="Toop&Toop Real Estate" title="Toop&Toop Real Estate" /></li>
                                <li><img src="../jelliscraig-logo-white-thumb.png?v=2" alt="JellisCraig Real Estate" title="JellisCraig Real Estate" /></li>
                                <br />
                                <li><img src="../professionals-logo.png" alt="Professionals Real Estate" title="Professionals Real Estate" height="17" /></li>
                                <li><img src="../realmark-logo-white-thumb.png?v=2" alt="Realmark Real Estate" title="Realmark Real Estate" style={{'position':'relative','top':'-2px','height':'16px'}} /></li>
                            </ul>
                        </Col>
                        <Col xs={12}>
                            <FixForm />
                        </Col>
                    </Row>
                </Container> 
            </section>         
            <Footer />
        </Layout>
        
    )
}

export default Fix