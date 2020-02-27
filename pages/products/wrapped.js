
import React from 'react'
import Head from 'next/head'
import Navigation from '../../components/nav'
import Layout from '../../components/layout'
import { Container, Row, Col, Carousel } from 'react-bootstrap'
import FixForm from '../../components/FixForm'
import Footer from '../../components/footer'

const Wrapped = () => {
    return(
        <Layout>
            <Head>
            <title>FIX + Wrapped - Put your brand up in lights | Virtual Agent</title>
            <meta name="description" content="Get your own property management app within 24 hours, without the huge price tag. Wrapped makes your brand the hero with landlords and tenants." />
            <meta property="og:url" content="https://www.virtualagent.com.au/Products/wrapped" />
            <meta property="og:type" content="website" />
            <meta property="og:title"  content="FIX + Wrapped - Put your brand up in lights" />
            <meta property="og:description" content="Get your own custom app within 24 hours, without the huge price tag." />
            <meta property="og:image" content="https://www.virtualagent.com.au/images/fix-wrapped-thumb.jpg" />
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
                            <h1 className="n-header-wrapped-title text-white">Put your brand up in lights</h1>
                            <p className="n-header-wrapped-p text-white fs-25 f-light" style={{'maxWidth': '460px'}}>Get your very own app, without the huge price tag. Make your brand the hero when you combine the best of FIX and your CRM.</p>
                            <div className="n-header-wrapped-btn mt-5">
                                <a href="#enquire-for-a-demo" className="btn btn-va-fix btn-big f-light smooth-animation d-inline-flex align-items-center">Get Started <i className='fal fa-long-arrow-right ml-2 smooth-animation btn-moveRight'></i></a>
                            </div>
                        </div>
                    </div>
                    </Col>
                </Row>
                </Container>
            </header>
            <Container className='content-spacer wrapped-container' fluid={true}>
                <Row>
                    <Col xl={6}>
                        <div>
                            <h3>The magic happens when you get full access to your data.</h3>
                            <p>Wrapped allows you to display your tenant and landlord information fully customised, in real time, no more 3rd party portals and you stay front of mind with your clients.</p>
                        </div>
                    </Col>
                    <Col xl={6}>
                        <img class="img-fluid" src="/integration-crm-data-webapp-v4.png" alt="Integration CRM" title="Integration CRM" />
                    </Col>
                </Row>
            </Container>
            <Container className='content-spacer'>
                <Row>
                    <Col>
                        <FixForm />
                    </Col>
                </Row>
            </Container>
            <Footer />
        </Layout>
    )
}
export default Wrapped