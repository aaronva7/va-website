import React from 'react'
import Head from 'next/head'
import Navigation from '../components/nav'
import Layout from '../components/layout'
import FixForm from '../components/FixForm'
import { Container, Row, Col } from 'react-bootstrap'
import Footer from '../components/footer'

const Contact = () => {
    return (
        <Layout>
            <Head>
                <title>Contact us, get in touch | Virtual Agent</title>
                <meta name="description" content="Discover the company behind the most efficient Property Management maintenance platform in Australia. Get in touch with us!" />
            </Head>
            <Navigation />
            <header className='header-uni header-home position-relative h-100'>
                <img className='header-home-img' src="/contact-us-header.jpg" />
                <Container className='h-100'>
                <Row className='h-100'>
                    <Col>
                    <div className="d-flex h-100 n-header-wrapped-container align-items-start justify-content-center flex-column position-relative">
                        <div className="position-relative" style={{'padding':'0 15px', 'zIndex' : '3'}}>
                            <h1 className="n-header-wrapped-title text-white">Get in touch</h1>
                            <p className="n-header-wrapped-p text-white fs-25 f-light mb-0" style={{'maxWidth': '460px'}}>What to get in touch about one of our products? We'd love to hear from you</p>
                        </div>
                    </div>
                    </Col>
                </Row>
                </Container>
            </header>

            <Container className='content-spacer'>
                <Row>
                    <Col>
                        <section>
                            <div>
                                <div className="col-xl-12 container-title text-center text-dgrey">
                                    <h2 className="section-secondary-title mb-3">Connect with one of our team members</h2>
                                    <p className="lead-text mb-5">Let's talk about next steps</p>
                                </div>
                                <div className="col-12 offset-xl-1 col-xl-10 text-center">
                                    <FixForm />
                                </div>
                            </div>
                        </section>


                        {/* <div style={{'margin':'0 auto','maxWidth':'705px'}}>
                            <h2 className="n-product-title text-dgrey text-center lh-normal">Connect with one of our team members</h2>
                            <p className="text-center n-product-subtext text-lgrey lh-normal" style={{'marginBottom':'45px'}}>Let's talk about next steps</p>
                            <form id="contactform" className="">
                                <div className="form-row">
                                    <div className="form-group col-6 col-lg-4">
                                        <input type="text" className="form-control va-input" id="inputname" placeholder="Name" />
                                        <div id="errorname" className="text-danger"></div>
                                    </div>
                                    <div className="form-group col-6 col-lg-4">
                                        <input type="tel" className="form-control va-input" id="inputphonenumber" name="inputphonenumber" placeholder="Phone number" maxlength="10" onKeyPress="checkPhoneNumber()" />
                                        <div id="errorphone" className="text-danger"></div>
                                    </div>
                                    <div className="form-group col-12 col-lg-4">
                                        <input type="email" className="form-control va-input" id="inputemail" name="inputemail" placeholder="Email" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <textarea rows="5" className="form-control va-input" id="inputmessage" placeholder="Message"></textarea>
                                </div>
                                <div className="col-12 text-center va-np">
                                    <button type="button" className="btn btn-primary btn-blue-fix btn-fcvalifc btn-ryil" id="submitcontactform">Submit</button>
                                </div>
                                <div id="submitError" style={{'color':'red'}} className="invisible-display">Oops! Something went wrong. Please enter your details again to contact us.</div>
                            </form>
                            <div id="formsubmitFeedback" className="text-center invisible-display">
                                <h3>Our Chief Connector Deb, will be in contact with you shortly!</h3>
                            </div>
                        </div>	 */}
                    </Col>
                </Row>
            </Container>

            <Container fluid={true}>
                <Row>
                    <Col>
                        <div className="position-relative" style={{'margin':'0 auto','maxWidth':'1920px'}}>
                            <div className="position-absolute" style={{'right':'5rem','top':'5rem','backgroundColor':'#fff', 'padding':'35px','borderRadius':'2px'}}>
                                <h4 className="text-dgrey">Headquarters</h4>
                                <p className="text-lgrey fs-14 lh-normal" style={{'marginBottom':'5px'}}>25 The Parade</p>
                                <p className="text-lgrey fs-14 lh-normal" style={{'marginBottom':'5px'}}>Norwood SA 5067</p>
                                <p className="text-lgrey fs-14 lh-normal mb-0">Australia</p>
                                <h4 className="text-dgrey" style={{'marginTop':'35px'}}>
                                    Phone / Email
                                </h4>
                                <p className="text-lgrey fs-14 lh-normal" style={{'marginBottom':'5px'}}>0412 024 210</p>
                                <p className="text-lgrey fs-14 lh-normal">Email <a href="mailto:hello@virtualagent.com.au">hello@virtualagent.com.au</a></p>
                                
                            </div>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.4033997356514!2d138.62342601523835!3d-34.92141858037838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ab0c94ee3071d2d%3A0x48cc045f851ef491!2s25+The+Parade%2C+Norwood+SA+5067!5e0!3m2!1sen!2sau!4v1565072396350!5m2!1sen!2sau" width="100%" height="750" frameborder="0" style={{'border':'0'}} allowfullscreen></iframe>
                            <div id="map"></div>
                        </div>	
                    </Col>
                </Row>
            </Container>
            <Container className='content-spacer'>
            <Row>
                <div className="col-12 col-lg-6">
                    <img className="img-fluid" src="../contact-us-header.jpg" />
                </div>
                <div className="col-12 col-lg-6">
                    <div className="our-story-container" style={{'maxWidth':'705px', 'margin':'0 auto'}}>
                    <h4 className="text-dgrey mt-15">Our Story</h4>	
                    <p className="text-lgrey">Virtual Agent was founded by sisters Suzannah and Genevieve Toop in 2017.</p>
                    <p className="text-lgrey">The pair grew up living and breathing their family's real estate business, Toop&Toop. They worked outside of the business, both nationally and internationally, before taking up roles within the Toop&Toop family business in 2013.</p>
                    <p className="text-lgrey">When Suzannah and Genevieve stepped back into the family business they immediately noticed their customers' needs were changing and new benchmarks were emerging. Instant communication, 24/7 access to information, customisation and personalised service is what they knew their business needed to deliver. And this wasn't possible without significant change.</p>
                    <p className="text-lgrey">They were determined to push the boundaries, think differently, to offer an unmatched level of service to their sellers, buyers, landlords and tenants.</p>
                    <p className="text-lgrey">Over the next four years they built a range of apps and solutions for Toop&Toop in their Innovation Lab. They saw some truly remarkable results winning back-to-back national awards for Innovation Excellence in 2015, 2016 and 2017 -  capturing the attention of the entire nation.</p>
                    <p className="text-lgrey">In July, 2017 they assembled a team of incredible software engineers from across the globe. In July 2017 Virtual Agent was born.</p>
                    </div>	
                </div>
            </Row>
            </Container>


            <Footer />
        </Layout>
    )
}

export default Contact