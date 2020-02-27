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
                <title>The New Word Podcast - Virtual Agent Blog</title>
                <meta name="description" content="Join us for a series of interviews where we explore the new world of real estate, where we are at and where we need to be. We will be chatting with individuals in and outside of the industry to gauge their thoughts and where they believe real estate is heading." />
                <meta property="og:url"                content="https://www.virtualagent.com.au/blog/the-new-world-podcast" />
                <meta property="og:type"               content="article" />
                <meta property="og:title"              content="The New World Podcast, Episode 1" />
                <meta property="og:description"        content="Join us for a series of interviews where we explore the new world of real estate, where we are at and where we need to be. We will be chatting with individuals in and outside of the industry to gauge their thoughts and where they believe real estate is heading." />
                <meta property="og:image"              content="https://www.virtualagent.com.au/assets/the-new-world-podcast-thumb.jpg" />	  
            </Head>
            <Navigation />
            <header className='header-uni header-home position-relative h-100'>
                <img className='header-home-img' src="../the-new-world-banner-bg.jpg" />
                <Container className='h-100'>
                <Row className='h-100'>
                    <Col>
                    <div className="d-flex h-100 n-header-wrapped-container align-items-center justify-content-center flex-column position-relative text-center">
                        <div className="position-relative" style={{'padding':'0 15px', 'zIndex' : '3'}}>
                            <p className='text-white'>Podcast</p>
                            <h1 className="n-header-wrapped-title text-white">The New World Podcast</h1>
                            <p className="n-header-wrapped-p text-white" style={{'maxWidth': '460px'}}></p>
                        </div>
                        <div className="header-subcontent d-flex align-items-center flex-column z-index-1 position-absolute">
                            <div>
                                <img className="rounded-circle" src="../suz-bw-thumb.jpg" alt="Photo of Suzannah Toop" title="Photo of Suzannah Toop" width="48" />
                                <p className='mt-3 text-white'><i>by <strong>Suzannah Toop</strong></i></p>
                                <p className=' text-white'><i>on June 5, 2019</i></p>
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
                          <p className="lead-text dgrey-text mt-5 mb-5 text-center">Join us for a series of interviews where we explore the new world of real estate, where we are at and where we need to be. We will be chatting with individuals in and outside of the industry to gauge their thoughts and where they believe real estate is heading.</p>
                      </div>
                  </div>

                  <div className="col-12 offset-xl-2 col-xl-8">
                      <div className="mb-5 podcast-panel">
                          <div className="d-flex flex-row flex-wrap">
                              <div className="podcast-img-container">
                                  <img className="img-fluid" src="../the-new-world-podcast-cover.jpg" />
                              </div>
                              <div className="podcast-content-container">
                                  <figure>
                                      <figcaption>The New World Podcast</figcaption>
                                      <audio controls
                                             src="../The Observer Podcast.mp3">
                                          Your browser does not support the
                                          <code>audio</code> element.
                                      </audio>
                                  </figure>
                              </div>
                          </div>
                      </div>
                  </div>
                </Container>
            </article>
            <Footer />
        </Layout>
    )
}

export default newWorldPartThree