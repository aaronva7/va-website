import React from 'react'
import Head from 'next/head'
import Navigation from '../../components/nav'
import Layout from '../../components/layout'
import { Container, Row, Col } from 'react-bootstrap'
import Footer from '../../components/footer'

const newWorldPartThree = () => {
    return(
        <Layout>
            <Head>
                <title>Mind the Gap - Virtual Agent Blog</title>
                <meta name="description" content="Mind the Gap" />
                <meta property="og:url"                content="https://www.virtualagent.com.au/blog/mind-the-gap" />
                <meta property="og:type"               content="article" />
                <meta property="og:title"              content="Mind the Gap" />
                <meta property="og:description"        content="So comes this gap between the 'old world' and the 'new world'" />
                <meta property="og:image"              content="https://www.virtualagent.com.au/Images/mind-the-gap-header.jpg" />	  
            </Head>
            <Navigation />
            <header className='header-uni header-home position-relative h-100'>
                <img className='header-home-img' src="../mind-the-gap-header.jpg" />
                <Container className='h-100'>
                <Row className='h-100'>
                    <Col>
                    <div className="d-flex h-100 n-header-wrapped-container align-items-center justify-content-center flex-column position-relative text-center">
                        <div className="position-relative" style={{'padding':'0 15px', 'zIndex' : '3'}}>
                            <p className='text-white'>News</p>
                            <h1 className="n-header-wrapped-title text-white">Mind the gap</h1>
                            <p className="n-header-wrapped-p text-white" style={{'maxWidth': '460px'}}>Old world &amp; the new world</p>
                        </div>
                        <div className="header-subcontent d-flex align-items-center flex-column z-index-1 position-absolute">
                            <div>
                                <img className="rounded-circle" src="../suz-bw-thumb.jpg" alt="Photo of Suzannah Toop" title="Photo of Suzannah Toop" width="48" />
                                <p className='mt-3 text-white'><i>by <strong>Suzannah Toop</strong></i></p>
                                <p className=' text-white'><i>on February 13, 2019</i></p>
                            </div>
                        </div>
                    </div>
                    </Col>
                </Row>
                </Container>
            </header>
            <article>
                <Container fluid={true}>
                <div className="col-12 offset-xl-2 col-xl-8">
                      <div className="blog-content-container mt-5">
                          <p className="lead-text dgrey-text mt-4 mb-5 text-center">Many businesses, whilst in different industries, are facing the same challenge. Consumer expectations are rising (fast) and we are required to do more... for less. And whilst we navigate through these unchartered waters, we have a new generation of workforce, who value flexibility, forcing businesses to completely rethink the way they operate, from the inside out.</p>
                      </div>
                  </div>
                  <div className="col-12 offset-xl-2 col-xl-8">
                      <div className="blog-content-container">
                        <p className='mb-5'>So comes this gap between the "old world" (aka 'the good ol days') and the "new world" (the 'holy crap' era). And somehow we need to get our businesses from one world to the other... or face falling into the gap (and becoming the next Blockbuster).</p>

                        <p className='mb-5'>For those who do make it across to the new world, it's great. Technology is taking care of the grunt work. There's time to think straight and not only meet, but exceed customer expectations. There are challenges but it's not frenetic. It feels a lot like 'the good ol' days', it's calm, you have time to build real relationships with customers again, you've shed unnecessary overheads so you're achieving sustainable profits and the best part.. everyone has time to go for lunch on Fridays again. </p>

                        <p className='mb-5'>Crossing the gap to the new world isn't easy though. It involves reinventing ourselves and doing things which are kind of uncomfortable... </p>

                        <p className='mb-5'>Things like challenging assumptions that have been made in the past (like.. you rent movies from a physical store or that taxis require cab ranks), learning to use valuable technology (that addresses the inherent inefficiencies we've loaded into our businesses since the 1990s) and most importantly, having customers at the centre of every decision we make, not us.</p>

                        <p className='mb-5'>So because it's hard.. some team members may encourage others not to jump or may act as a handbrake in this process. All the while the gap is widening.</p>

                        <p className='mb-5'>To safely cross may take a few trips and perhaps a bit of a nudge here and there. But one thing is for sure, the leap is worth it.. Just ask Netflix. </p>

                        <p className='mb-5'>Safe travels.</p>
                      </div>
                  </div>
                </Container>
            </article>
            <Footer />
        </Layout>
    )
}

export default newWorldPartThree