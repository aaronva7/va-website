import React from 'react'
import Head from 'next/head'
import Navigation from '../components/nav'
import Layout from '../components/layout'
import { Container, Row, Col } from 'react-bootstrap'
import Footer from '../components/footer'

const Blog = () => {
    return (
        <Layout>
            <Head>
                <title>Keep up with the latest - Virtual Agent Blog</title>
                <meta name="description" content="" />
            </Head>
            <Navigation />
            <header className='header-uni header-home position-relative h-100'>
                <img className='header-home-img' src="../the-new-world-the-observer-header.jpg" />
                <Container className='h-100'>
                <Row className='h-100'>
                    <Col>
                    <div className="d-flex h-100 n-header-wrapped-container align-items-start justify-content-center flex-column position-relative">
                        <div className="position-relative" style={{'padding':'0 15px', 'zIndex' : '3'}}>
                            <h1 className="n-header-wrapped-title text-white">Blog</h1>
                            <p className="n-header-wrapped-p text-white fs-25 f-light mb-0" style={{'maxWidth': '460px'}}>Catch up with the latest!</p>
                        </div>
                    </div>
                    </Col>
                </Row>
                </Container>
            </header>
            <Container fluid={true} className='content-spacer'>
                <Row>
                    <Col xs={12} sm={6} md={6} lg={4} xl={3} className='blog-thumb mb-5 text-center'>
                        <div className="blog-th-container th-animation">
                            <a className="d-block" href="/blog/the-new-world-part-three"><img src="../the-new-world-part-three.jpg" className="img-fluid" alt="The New World Podcast Poster" title="The New World Podcast Poster" /></a>
                            <p className="blog-category"><strong>Interview</strong></p>
                            <h4 className="text-dark"><a href="/blog/the-new-world-part-three">The New World, Part Three</a></h4>
                            <p className="text-dark blog-subsnippet mb-2">We talk to Shannan Whitney, Director of BresicWhitney about real estate today.</p>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={6} lg={4} xl={3} className='blog-thumb mb-5 text-center'>
                        <div className="blog-th-container th-animation">
                            <a class="d-block" href="/blog/the-new-world-podcast"><img src="../the-new-world-podcast-thumb.jpg" class="img-fluid" alt="The New World Podcast Poster" title="The New World Podcast Poster" /></a>
                            <p class="blog-category"><strong>Podcast</strong></p>
                            <h4 class="text-dark"><a href="/blog/the-new-world-podcast">The New World Podcast</a></h4>
                            <p class="text-dark blog-subsnippet mb-2">Join us for a series of interviews where we explore the new world of real estate</p>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={6} lg={4} xl={3} className='blog-thumb mb-5 text-center'>
                        <div className="blog-th-container th-animation">
                            <a class="d-block" href="/blog/the-observer"><img src="../the-new-world-the-observer-thumb.jpg" class="img-fluid" alt="The Observer Poster" title="The Observer Poster" /></a>
                            <p class="blog-category"><strong>News</strong></p>
                            <h4 class="text-dark"><a href="/blog/the-observer">The Observer</a></h4>
                            <p class="text-dark blog-subsnippet mb-2">Four words. The ultimate wake up call.</p>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={6} lg={4} xl={3} className='blog-thumb mb-5 text-center'>
                        <div className="blog-th-container th-animation">
                            <a class="d-block" href="/blog/the-new-world-part-two"><img src="../the-new-world-part-two-thumb.jpg" class="img-fluid" alt="The New World Poster" title="The New World Poster" /></a>
                            <p class="blog-category"><strong>Interview</strong></p>
                            <h4 class="text-dark"><a href="/blog/the-new-world-part-two">The New World, Part Two</a></h4>
                            <p class="text-dark blog-subsnippet mb-2">We sit down with LeahJay's Cassandra Lantry for a chat about change</p>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={6} lg={4} xl={3} className='blog-thumb mb-5 text-center'>
                        <div className="blog-th-container th-animation">
                            <a class="d-block" href="/blog/the-new-world-part-one"><img src="../the-new-world-blog-main-thumb.jpg" class="img-fluid" alt="The New World Poster" title="The New World Poster" /></a>
                            <p class="blog-category"><strong>Interview</strong></p>
                            <h4 class="text-dark"><a href="/blog/the-new-world-part-one">The New World, Part One</a></h4>
                            <p class="text-dark blog-subsnippet mb-2">We sit down with Jellis Craig's Simon Mason for a chat about change</p>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={6} lg={4} xl={3} className='blog-thumb mb-5 text-center'>
                        <div className="blog-th-container th-animation">
                            <a class="d-block" href="/blog/mind-the-gap"><img src="../mind-the-gap-thumb.jpg" class="img-fluid" alt="Mind the gap Poster" title="It's time to un-bundle Poster" /></a>
                            <p class="blog-category"><strong>News</strong></p>
                            <h4 class="text-dark"><a href="/blog/mind-the-gap">Mind the gap</a></h4>
                            <p class="text-dark blog-subsnippet mb-2">Old world &amp; the new world.</p>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={6} lg={4} xl={3} className='blog-thumb mb-5 text-center'>
                        <div className="blog-th-container th-animation">
                            <a class="d-block" href="/blog/its-time-to-unbundle"><img src="../its-time-to-unbundle-thumb.jpg" class="img-fluid" alt="It's time to un-bundle Poster" title="It's time to un-bundle Poster" /></a>
                            <p class="blog-category"><strong>News</strong></p>
                            <h4 class="text-dark"><a href="/blog/its-time-to-unbundle">It's time to 'un-bundle'</a></h4>
                            <p class="text-dark blog-subsnippet mb-2">The shift is happening.</p>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={6} lg={4} xl={3} className='blog-thumb mb-5 text-center'>
                        <div className="blog-th-container th-animation">
                            <a class="d-block" href="/blog/the-short-straw"><img src="../the-short-straw-thumb.jpg" class="img-fluid" alt="The Short Straw Poster" title="The Short Straw Poster" /></a>
                            <p class="blog-category"><strong>News</strong></p>
                            <h4 class="text-dark"><a href="/blog/the-short-straw">The Short Straw</a></h4>
                            <p class="text-dark blog-subsnippet mb-2">Thinking about real estate differently!</p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </Layout>
    )
}

export default Blog