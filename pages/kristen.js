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
                <title>Kristen, Property Manager | Virtual Agent</title>
                <meta name="description" content="Meet Kristen" />
            </Head>
            <Navigation />
            <header className='header-uni header-home position-relative h-100'>
                <img className='header-home-img' src="/u-kristen.jpg" />
                <Container className='h-100'>
                <Row className='h-100'>
                    <Col>
                    <div className="d-flex h-100 n-header-wrapped-container align-items-start justify-content-center flex-column position-relative">
                        <div className="position-relative" style={{'padding':'0 15px', 'zIndex' : '3'}}>
                            <h1 className="n-header-wrapped-title text-white">Kristen Goedecke</h1>
                            <p className="n-header-wrapped-p text-white fs-25 f-light" style={{'maxWidth': '475px'}}>ToopFIX has been a helpful tool in receiving, allocating and monitoring maintenance for the portfolio I look after.</p>
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
                quotetext='Maintenance can be a stressful process, ToopFIX is a vital part in helping you manage your portfolio.'
                persontext={[
                    <div><p class="text-lgrey">Although no previous experience in property management, I have always had a passion for working with and for people. From working, studying and volunteering within the sport industry I have developed a number of skills that have formed me into the person I am today and the reason for why I have joined such a strong and dynamic team at Toop&Toop.</p>
                    <p class="text-lgrey mb-0">Before starting at Toop&Toop I studied sport at University and have been a competitive gymnast and cheerleader at a national level since the age of 5. I have a passion for coaching cheerleading and gymnastics and have previously been an elite coach for juniors in gymnastics. I have strong beliefs that being involved in a sport or within a sporting industry can shape you into the person you want to be, which is why I am so involved in helping young people enjoy the sport of cheerleading.</p>
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