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
                <title>It's time to un-bundle - Virtual Agent Blog</title>
                <meta name="description" content="The shift is happening." />
                <meta property="og:url"                content="https://www.virtualagent.com.au/blog/its-time-to-unbundle" />
                <meta property="og:type"               content="article" />
                <meta property="og:title"              content="It's time to un-bundle" />
                <meta property="og:description"        content="The shift is happening." />
                <meta property="og:image"              content="https://www.virtualagent.com.au/Images/its-time-to-unbundle-thumb.jpg" />	   
            </Head>
            <Navigation />
            <header className='header-uni header-home position-relative h-100'>
                <img className='header-home-img' src="../its-time-to-unbundle-header.jpg" />
                <Container className='h-100'>
                <Row className='h-100'>
                    <Col>
                    <div className="d-flex h-100 n-header-wrapped-container align-items-center justify-content-center flex-column position-relative text-center">
                        <div className="position-relative" style={{'padding':'0 15px', 'zIndex' : '3'}}>
                            <p className='text-white'>News</p>
                            <h1 className="n-header-wrapped-title text-white">It's time to 'un-bundle'</h1>
                            <p className="n-header-wrapped-p text-white" style={{'maxWidth': '460px'}}>The shift is happening.</p>
                        </div>
                        <div className="header-subcontent d-flex align-items-center flex-column z-index-1 position-absolute">
                            <div>
                                <img className="rounded-circle" src="../suz-bw-thumb.jpg" alt="Photo of Suzannah Toop" title="Photo of Suzannah Toop" width="48" />
                                <p className='mt-3 text-white'><i>by <strong>Suzannah Toop</strong></i></p>
                                <p className=' text-white'><i>on November 20, 2018</i></p>
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
                          <p className="lead-text dgrey-text mt-4 mb-5 text-center">In the last couple of months, I've noticed, 1. how frustrating 'bundles' or 'packages' can be and 2. that they seem to be everywhere.</p>
                      </div>
                  </div>
                  <div className="col-12 offset-xl-2 col-xl-8">
                      <div className="blog-content-container">
                        <p className='mb-5'>Sure, sometimes bundled services or goods are helpful, but when I find myself asking just to have item 1 and 3, and find out I can't, I'm left feeling confused and well... annoyed.</p>

                        <p className='mb-5'>This got me thinking about the shift that's happened.</p>

                        <p className='mb-5'>In 1979 McDonald's brought out the Happy Meal (aka the ultimate meal deal) &ndash; which demonstrated good value. And I have to say, I'm still a fan. But somewhere along the line, we thought it would be useful to bundle.. everything.</p>

                        <p className='mb-5'>Fast forward to 2018, and we have companies like Jetstar and Nike, where everything is optional or highly customisable. You pick and choose what you would like, and it drops into your shopping kart. Put things in or take them out. It's up to you.</p>

                        <p className='mb-5'>So maybe we have Maccas to thank for the "bundle era".. but even Maccas are changing their model. With Kiosks (the self-serve touch screen computers) and meal upgrades, you will always have the choice of which way you want to go. You can even have a sausage and egg McMuffin, without the egg.</p>

                        <p className='mb-5'>Because let's face it, sometimes you want to pick and choose. So we think it's time to unbundle.. and find new ways to give customers' choice.</p>
                      </div>
                  </div>
                </Container>
            </article>
            <Footer />
        </Layout>
    )
}

export default newWorldPartThree