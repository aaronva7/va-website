import React from 'react'
import Head from 'next/head'
import Navigation from '../components/nav'
import Layout from '../components/layout'
import { Container, Row, Col } from 'react-bootstrap'
import PersonBio from '../components/PersonBio'
import TestimonialPanel from '../components/TestimonialPanel'
import PopupOverlay from '../components/PopupOverlay'
import FixForm from '../components/FixForm'
import Footer from '../components/footer'

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
const Sian = () => {
    return (
        <Layout>
            <Head>
                <title>Sian, Property Manager | Virtual Agent</title>
                <meta name="description" content="Meet Sian" />
            </Head>
            <Navigation />
            <header className='header-uni header-home position-relative h-100'>
                <img className='header-home-img' src="/u-sian.jpg" />
                <Container className='h-100'>
                <Row className='h-100'>
                    <Col>
                    <div className="d-flex h-100 n-header-wrapped-container align-items-start justify-content-center flex-column position-relative">
                        <div className="position-relative" style={{'padding':'0 15px', 'zIndex' : '3'}}>
                            <h1 className="n-header-wrapped-title text-white">Sian Pilling</h1>
                            <p className="n-header-wrapped-p text-white fs-25 f-light" style={{'maxWidth': '475px'}}>I feel that if I worked in an agency that didn’t embrace the concepts of innovation and technology, I would have been long gone.</p>
                            <div className="n-header-wrapped-btn" style={{'marginBottom' : '50px'}}>
                                <PopupMain />
                                <a href="#enquire-for-a-demo" className="btn btn-outline-white btn-big f-light d-inline-flex align-items-center smooth-animation">Learn more <i className='fal fa-long-arrow-right ml-2 smooth-animation btn-moveRight'></i></a>
                            </div>
                        </div>
                    </div>
                    </Col>
                </Row>
                </Container>
            </header>
            <PersonBio 
                quotetext='I also love the streamlined work orders and simple formats of the communication – it creates a really efficient and professional flow with our contractors and trades.'
                persontext={[
                    <div><p className="text-lgrey">Sian from Toop&Toop in Adelaide enjoys music, board games, wine and a good laugh. In her spare time you’ll catch her walking her westie at the beach or trying her hand at some abstract painting.</p>
                        <p className="text-lgrey">Coming from a background in hospitality, I am used to a very hands-on, practical approach to work. Moving into an industry that is highly reliant on computer systems and programs to execute jobs, is not really something I have experienced before now. I feel that if I worked in an agency that didn’t embrace the concepts of innovation and technology, I would have been long gone.</p>
                        <p className="text-lgrey">I can maintain my sanity with ToopFIX. What I really love about it is that it prompts tenants to detail the issue prior to informing us about it. Sometimes this even prompts the tenant to solve the issue themselves, if it is safe to do so. This saves myself and the team a great deal of time.</p>
                        <p className="text-lgrey mb-0">I also love the streamlined work orders and simple formats of the communication – it creates a really efficient and professional flow with our contractors and trades. I genuinely recommend ToopFIX to anyone who is looking to eliminate the ‘back-and-forth’ we have come to know and replace it with valuable experiences with your tenants and landlords.</p>
                    </div>]} />
            <TestimonialPanel />
            <section>
                <Container fluid={true} id="enquire-for-a-demo" className='content-spacer rm-cta-container va-enq-panel'>
                    <Row>
                        <Col xs={12}>
                            <h2 className="text-center n-product-title text-white">Get started!</h2>
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

export default Sian