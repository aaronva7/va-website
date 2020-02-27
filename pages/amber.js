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
const Amber = () => {
    return (
        <Layout>
            <Head>
                <title>Amber, Property Manager | Virtual Agent</title>
                <meta name="description" content="Meet Amber" />
            </Head>
            <Navigation />
            <header className='header-uni header-home position-relative h-100'>
                <img className='header-home-img' src="/u-amber.jpg" />
                <Container className='h-100'>
                <Row className='h-100'>
                    <Col>
                    <div className="d-flex h-100 n-header-wrapped-container align-items-start justify-content-center flex-column position-relative">
                        <div className="position-relative" style={{'padding':'0 15px', 'zIndex' : '3'}}>
                            <h1 className="n-header-wrapped-title text-white">Amber Wall</h1>
                            <p className="n-header-wrapped-p text-white fs-25 f-light" style={{'maxWidth': '475px'}}>I can get my entire portfolio's maintenance done for the day within 20 minutes and this is purely thanks to ToopFIX.</p>
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
                quotetext='ToopFIX is the best friend you didnt know you needed.'
                persontext={[
                    <div><p class="text-lgrey">I've been working in Property Management for nearly 2 years now and it has been the most exciting challenge I've put myself in to. I love that every single day is different from the last and I am blessed to work with such an incredible team who are supportive and helpful in every situation.</p>
                    <p class="text-lgrey mb-0">I was inspired to take up a career in Property Management from my Mum who began her first job in Property Management over 20 years ago. I remember her saying how interesting it was, how much fun she had and how it helped her broaden her horizons. I guess every kid wants to grow up and be like their parents and I guess that's exactly what I've done.</p>
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

export default Amber