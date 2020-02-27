import React from 'react'
import Head from 'next/head'
import Navigation from '../components/nav'
import Layout from '../components/layout'
import { Container, Row, Col } from 'react-bootstrap'
import FixForm from '../components/FixForm'
import TestimonialPanel from '../components/TestimonialPanel'
import Footer from '../components/footer'

const Home = () => {
  return(
  <Layout>
    <Head>
      <title>Virtual Agent | The home of FIX</title>
      <meta name="description" content="We create Property Management and Real Estate tools. Creating efficiencies agencies have never had before, come explore what we have to offer!" />
      <meta property="og:url" content="https://www.virtualagent.com.au" />
      <meta property="og:type" content="website" />
      <meta property="og:title"  content="We create Property Management and Real Estate tools." />
      <meta property="og:description" content="Creating efficiencies agencies have never had before, come explore what we have to offer" />
    </Head>

    <Navigation />
    <header className='header-uni header-home position-relative h-100'>
        <img className='header-home-img' src="/home-header.jpg" />
        <Container className='h-100'>
          <Row className='h-100'>
            <Col>
              <div className="d-flex h-100 n-header-wrapped-container align-items-start justify-content-center flex-column position-relative">
                  <div className="position-relative" style={{'padding':'0 15px', 'zIndex' : '3'}}>
                      <h1 className="n-header-wrapped-title text-white">Virtual Agent</h1>
                      <p className="n-header-wrapped-p text-white fs-25 f-light mb-0" style={{'maxWidth': '460px'}}>Fast, nimble and user-friendly Real Estate Software. Simply plug in and get going</p>
                      <div className="n-header-wrapped-btn mt-5">
                          <a href="/products/fix" className="btn btn-va-fix btn-big f-light smooth-animation mr-3 d-inline-flex align-items-center">Take a tour <i className='fal fa-long-arrow-right ml-2 smooth-animation btn-moveRight'></i></a>
                          <a href="#enquire-for-a-demo" className="btn btn-outline-white btn-big f-light smooth-animation">Enquire now</a>
                      </div>
                  </div>
              </div>
            </Col>
          </Row>
        </Container>
    </header>
    
    <Container>
      <Row>
        <Col>
        <div className="lead-container content-spacer">
          <p className="dgrey-text lead-text">Virtual Agent is all about powering up your business. And giving you options.</p>

          <p className="dgrey-text lead-text">We offer white-labelled products so your brand remains the hero. Every interaction your customer has with your business will look and feel just like you, it is simply powered by us. We are an Australian business based in Adelaide. Our Team of software engineers work closely with Australia's #1 Real Estate Agency to create market leading software.</p>

          <p className="dgrey-text lead-text">We love building products that push the envelope and power up our customers.</p>
          <div className='mt-5 text-center'>
            <a href="/about" className="btn btn-va-fix btn-big f-light smooth-animation d-inline-flex align-items-center">
              Find out more about us <i className='fal fa-long-arrow-right ml-2 smooth-animation btn-moveRight'></i>
            </a>
          </div>
        </div>
        </Col>
      </Row>
    </Container>
    <Container fluid={true} className="location-panel position-relative content-spacer">
      <img className='location-panel-img' src="./location-panel-bg-two.jpg" />
      <Row>
        <Col xs={12}>
          <section>
              <h2 className="section-secondary-title text-center text-white mb-5">We are helping companies in</h2>
              <div className="companies-grid">
                <div className="text-center">
                  <p className="text-vablue"><i className="fad fa-map-marker-alt fa-3x"></i></p>
                  <p className="text-white mb-2"><strong>Sydney</strong></p>
                  <p className="mb-0 text-white">Australia</p>
                </div>
                <div className="text-center">
                  <p className="text-vablue"><i className="fad fa-map-marker-alt fa-3x"></i></p>
                  <p className="text-white mb-2"><strong>Melbourne</strong></p>
                  <p className="mb-0 text-white">Australia</p>
                </div>
                <div className="text-center">
                  <p className="text-vablue"><i className="fad fa-map-marker-alt fa-3x"></i></p>
                  <p className="text-white mb-2"><strong>Perth</strong></p>
                  <p className="mb-0 text-white">Australia</p>
                </div>
                <div className="text-center">
                  <p className="text-vablue"><i className="fad fa-map-marker-alt fa-3x"></i></p>
                  <p className="text-white mb-2"><strong>Adelaide</strong></p>
                  <p className="mb-0 text-white">Australia</p>
                </div>
                <div className="text-center">
                  <p className="text-vablue"><i className="fad fa-map-marker-alt fa-3x"></i></p>
                  <p className="text-white mb-2"><strong>Alice Springs</strong></p>
                  <p className="mb-0 text-white">Australia</p>
                </div>
              </div>
            
          </section>
        </Col>
        <Col xs={12} className="text-center va-ul-list">
        <ul className="mt-5">
            <li><img src="./mcconnell-bourn-logo-white-thumb.png" alt="McConnell Bourn Real Estate" title="McConnell Bourn Real Estate" /></li>
            <li><img src="./leahjay-logo.png" alt="LeahJay Real Estate" title="LeahJay Real Estate" height="17" /></li>
            <li><img src="./toopandtoop-logo-white-thumb.png" alt="Toop&Toop Real Estate" title="Toop&Toop Real Estate" /></li>
            <li><img src="./jelliscraig-logo-white-thumb.png?v=2" alt="JellisCraig Real Estate" title="JellisCraig Real Estate" /></li>
            <br />
            <li><img src="./professionals-logo.png" alt="Professionals Real Estate" title="Professionals Real Estate" height="17" /></li>
            <li><img src="./realmark-logo-white-thumb.png?v=2" alt="Realmark Real Estate" title="Realmark Real Estate" /></li>
          </ul>
        </Col>
      </Row>
    </Container>
    <Container className='content-spacer'>
      <Row>
        <Col>
          <section>
          <h2 className="text-center mb-5">What our users benefit from</h2>
            <div className="benefits-grid">
              <div className="text-left">
                <p className="text-vablue"><i className="fad fa-plug fa-2x"></i></p>
                <p className="text-dgrey"><strong>Plug in and go</strong></p>
                <p className="text-lgrey f-light mb-0 benefits-paragraph">Our products are bite-size. You simply pick and choose the tools you want.</p>
              </div>
              <div className="text-left">
                <p className="text-vablue"><i className="fad fa-info-circle fa-2x"></i></p>
                <p className="text-dgrey"><strong>White labelling</strong></p>
                <p className="text-lgrey f-light mb-0 benefits-paragraph">No need to send your customers off to unknown portals. We let them interact and connect with your brand. We simply sit in the background. </p>
              </div>
              <div className="text-left">
                <p className="text-vablue"><i className="fad fa-clock fa-2x"></i></p>
                <p className="text-dgrey"><strong>Greater efficiencies</strong></p>
                <p className="text-lgrey f-light mb-0 benefits-paragraph">Our tools remove double handling from the day-to-day, giving your team more time back in their day to spend on client relationships.</p>
              </div>
              <div className="text-left">
                <p className="text-vablue"><i className="fad fa-comments-alt fa-2x"></i></p>
                <p className="text-dgrey"><strong>Live Updates</strong></p>
                <p className="text-lgrey f-light mb-0 benefits-paragraph">Keeping everyone connected and in the loop, in real time.</p>
              </div>
            </div>
          </section>
        </Col>
      </Row>
    </Container>
    <Container fluid={true} className='content-spacer grey-background'>
      <Row>
        <Col>
          <h2 className="section-secondary-title text-center bl-text mb-5">We integrate with</h2>
          <div className="integration-grid">
            <div>
              <img src="./integration-rest-professional.png" alt="" title="" height="40" />
              <p className="mt-3 mb-0" style={{'lineHeight' : 'normal'}}>REST Professional</p>
            </div>
            <div>
              <img src="./integration-console.png" alt="" title="" height="40" />
              <p className="mt-3 mb-0" style={{'lineHeight' : 'normal'}}>Console</p>
            </div>
            <div>
              <img src="./integration-propertyme.png" alt="" title="" height="40" />
              <p className="mt-3 mb-0" style={{'lineHeight' : 'normal'}}>PropertyME</p>
            </div>
            <div>
              {/* <img src="./integration-rest-professional" alt="" title="" height="40" /> */}
              <p className="mt-3 mb-0" style={{'lineHeight' : 'normal'}}>RPOffice</p>
            </div>
            <div>
              <img src="./integration-property-tree.png" alt="" title="" height="40" />
              <p className="mt-3 mb-0" style={{'lineHeight' : 'normal'}}>PropertyTree</p>
            </div>
            <div>
              <img src="./integration-xero.png" alt="" title="" height="40" />
              <p className="mt-3 mb-0" style={{'lineHeight' : 'normal'}}>Xero</p>
            </div>
            <div>
              <img src="./integration-file-smart.png" alt="" title="" height="40" />
              <p className="mt-3 mb-0" style={{'lineHeight' : 'normal'}}>Filesmart</p>
            </div>
            <div>
              <img src="./integration-aroflo.png" alt="" title="" height="40" />
              <p className="mt-3 mb-0" style={{'lineHeight' : 'normal'}}>Aroflo</p>
            </div>
            <div>
              <img src="./integration-palace-logo.jpg" alt="" title="" height="40" />
              <p className="mt-3 mb-0" style={{'lineHeight' : 'normal'}}>Palace</p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
    <TestimonialPanel />
    <Container fluid={true} className='content-spacer content-dark-panel'>
      <Row>
        <Col>
          <section>
            <div id="enquire-for-a-demo">
                <div className="row">
                    <div className="col-xl-12 container-title text-center text-dgrey">
                        <h2 className="section-secondary-title mb-3 text-white">Want to find out more? We'd love to hear from you.</h2>
                        <p className="lead-text mb-5 text-white ">Give us a call any time on 0412 024 210 or fill in details below</p>
                    </div>
                    <div className="col-12 offset-xl-1 col-xl-10 text-center">
                      <FixForm />
                    </div>
                </div>
            </div>
          </section>
        </Col>
      </Row>
    </Container>

    <Footer />
    
  </Layout>
)
}

export default Home
