import React from 'react'
import Head from 'next/head'
import Navigation from '../components/nav'
import Layout from '../components/layout'
import { Container, Row, Col } from 'react-bootstrap'
import Timeline from '../components/timeline'
import FixForm from '../components/FixForm'
import Footer from '../components/footer'

const About = () => {
    return (
        <Layout>
            <Head>
                <title>About us, learn more about our story | Virtual Agent</title>
                <meta name="description" content="Come meet the team & read about our story behind Virtual Agent and our flagship product, FIX!" />
                <meta property="og:url" content="https://www.virtualagent.com.au/about" />
                <meta property="og:type" content="website" />
                <meta property="og:title"  content="About us, learn more about our story | Virtual Agent" />
                <meta property="og:description" content="Come meet the team & read about our story behind Virtual Agent and our flagship product, FIX!" />
            </Head>
            <Navigation />
            <header className='header-uni header-home position-relative h-100'>
                <img className='header-home-img' src="/contact-us-header.jpg" />
                <Container className='h-100'>
                <Row className='h-100'>
                    <Col>
                    <div className="d-flex h-100 n-header-wrapped-container align-items-start justify-content-center flex-column position-relative">
                        <div className="position-relative" style={{'padding':'0 15px', 'zIndex' : '3'}}>
                            <h1 className="n-header-wrapped-title text-white">About Us</h1>
                            <p className="n-header-wrapped-p text-white fs-25 f-light mb-0" style={{'maxWidth': '460px'}}>Come meet the team and learn about our story</p>
                        </div>
                    </div>
                    </Col>
                </Row>
                </Container>
            </header>

            <Container className='content-spacer'>
                <Row>
                    <Col xs={12}>
                        <h3 className="text-dgrey">Our Story</h3>
                    </Col>
                    <Col xs={12}>
                        <p className="text-lgrey">Virtual Agent was founded by sisters Suzannah and Genevieve Toop in 2017.</p>
                        <p className="text-lgrey">The pair grew up living and breathing their family's real estate business, Toop&Toop. They worked outside of the business, both nationally and internationally, before taking up roles within the Toop&Toop family business in 2013.</p>
                        <p className="text-lgrey">When Suzannah and Genevieve stepped back into the family business they immediately noticed their customers' needs were changing and new benchmarks were emerging. Instant communication, 24/7 access to information, customisation and personalised service is what they knew their business needed to deliver. And this wasn't possible without significant change.</p>
                        <p className="text-lgrey">They were determined to push the boundaries, think differently, to offer an unmatched level of service to their sellers, buyers, landlords and tenants.</p>
                        <p className="text-lgrey">Over the next four years they built a range of apps and solutions for Toop&Toop in their Innovation Lab. They saw some truly remarkable results winning back-to-back national awards for Innovation Excellence in 2015, 2016 and 2017 -  capturing the attention of the entire nation.</p>
                        <p className="text-lgrey">In July, 2017 they assembled a team of incredible software engineers from across the globe. In July 2017 Virtual Agent was born.</p>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col>
                    <Timeline />
                    </Col>
                </Row>
            </Container>
            <Container className='content-spacer'>
                <Row>
                    <Col xs={12}>
                        <h3 className="text-center">Meet our team</h3>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <div className='meet-our-team-grid'>
                            <div className="card va-card-team">
                                <img className="card-img" src="../aaron-bw-thumb.jpg" alt="Aaron" />
                                <div className="hoverImg">
                                    <img className="card-img" src="../aaron-cl-thumb.jpg" alt="Aaron" />
                                </div>
                                <div className="card-img-overlay va-card-overlay text-left">
                                    <h5 className="card-title">Aaron</h5>
                                    <p className="card-text">UX / UI Designer</p>
                                </div>
                            </div>
                            <div class="card va-card-team">
                                <img class="card-img" src="../frank-bw-thumb.jpg" alt="Frank" />
                                <div class="hoverImg">
                                    <img class="card-img" src="../frank-cl-thumb.jpg" alt="Frank" />
                                </div>
                                <div class="card-img-overlay va-card-overlay text-left">
                                    <h5 class="card-title">Frank</h5>
                                    <p class="card-text">Software Engineer</p>
                                </div>
                            </div>
                            <div class="card va-card-team">
                                <img class="card-img" src="../gen-bw-thumb.jpg" alt="Gen" />
                                <div class="hoverImg">
                                    <img class="card-img" src="../gen-cl-thumb.jpg" alt="Gen" />
                                </div>
                                <div class="card-img-overlay va-card-overlay text-left">
                                    <h5 class="card-title">Gen</h5>
                                    <p class="card-text">Co-Founder</p>
                                </div>
                            </div>
                            <div class="card va-card-team">
                                <img class="card-img" src="../lipu-bw-thumb.jpg" alt="Lipu" />
                                <div class="hoverImg">
                                    <img class="card-img" src="../lipu-cl-thumb.jpg" alt="Lipu" />
                                </div>
                                <div class="card-img-overlay va-card-overlay text-left">
                                    <h5 class="card-title">Lipu</h5>
                                    <p class="card-text">Software Engineer</p>
                                </div>
                            </div>
                            <div class="card va-card-team">
                                <img class="card-img" src="../marcus-bw-thumb.jpg" alt="Marcus" />
                                <div class="hoverImg">
                                    <img class="card-img" src="../marcus-cl-thumb.jpg" alt="Marcus" />
                                </div>
                                <div class="card-img-overlay va-card-overlay text-left">
                                    <h5 class="card-title">Marcus</h5>
                                    <p class="card-text">Head of Engineering</p>
                                </div>
                            </div>
                            <div class="card va-card-team">
                                <img class="card-img" src="../mittali-bw-thumb.jpg" alt="Mittali" />
                                <div class="hoverImg">
                                    <img class="card-img" src="../mittali-cl-thumb.jpg" alt="Mittali" />
                                </div>
                                <div class="card-img-overlay va-card-overlay text-left">
                                    <h5 class="card-title">Mittali</h5>
                                    <p class="card-text">Software Engineer</p>
                                </div>
                            </div>
                            <div class="card va-card-team">
                                <img class="card-img" src="../suz-bw-thumb.jpg" alt="Suz" />
                                <div class="hoverImg">
                                    <img class="card-img" src="../suz-cl-thumb.jpg" alt="Suz" />
                                </div>
                                <div class="card-img-overlay va-card-overlay text-left">
                                    <h5 class="card-title">Suz</h5>
                                    <p class="card-text">Co-Founder</p>
                                </div>
                            </div>
                            <div class="card va-card-team">
                                <img class="card-img" src="../mia-bw-thumb.jpg" alt="Mia" />
                                <div class="hoverImg">
                                    <img class="card-img" src="../mia-cl-thumb.jpg" alt="Mia" />
                                </div>
                                <div class="card-img-overlay va-card-overlay text-left">
                                    <h5 class="card-title">Mia</h5>
                                    <p class="card-text">Office Dog</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
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

export default About