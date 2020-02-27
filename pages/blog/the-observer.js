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
                <title>The Observer - Virtual Agent Blog</title>
                <meta name="description" content="We are chatting about the role technology has in business" />
                <meta property="og:url"                content="https://www.virtualagent.com.au/blog/the-observer" />
                <meta property="og:type"               content="article" />
                <meta property="og:title"              content="The Observer" />
                <meta property="og:description"        content="We are chatting about the role technology has in business" />
                <meta property="og:image"              content="https://www.virtualagent.com.au/Images/the-new-world-the-observer-thumb.jpg" />	  
            </Head>
            <Navigation />
            <header className='header-uni header-home position-relative h-100'>
                <img className='header-home-img' src="../the-new-world-the-observer-header.jpg" />
                <Container className='h-100'>
                <Row className='h-100'>
                    <Col>
                    <div className="d-flex h-100 n-header-wrapped-container align-items-center justify-content-center flex-column position-relative text-center">
                        <div className="position-relative" style={{'padding':'0 15px', 'zIndex' : '3'}}>
                            <p className='text-white'>News</p>
                            <h1 className="n-header-wrapped-title text-white">The Observer</h1>
                            <p className="n-header-wrapped-p text-white" style={{'maxWidth': '460px'}}></p>
                        </div>
                        <div className="header-subcontent d-flex align-items-center flex-column z-index-1 position-absolute">
                            <div>
                                <img className="rounded-circle" src="../suz-bw-thumb.jpg" alt="Photo of Suzannah Toop" title="Photo of Suzannah Toop" width="48" />
                                <p className='mt-3 text-white'><i>by <strong>Suzannah Toop</strong></i></p>
                                <p className=' text-white'><i>on May 23, 2019</i></p>
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
                          <p className="lead-text dgrey-text mt-4 mb-4 text-center">Is the Intermediary dead? The ultimate wake up call.</p>
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
                  <div className="col-12 offset-xl-2 col-xl-8">
                      <div className="blog-content-container">
                          <div className="mb-5">
                              <p className="dgrey-text blog-copy-text">There's someone who has helped shape my thinking significantly over the past 3 years and I feel fortunate to now call him a friend.</p>
                              <p className="dgrey-text blog-copy-text">The first time we met, I asked if I could shout him a coffee to let me pick his brains, to which he happily agreed.</p>

                              <p className="dgrey-text blog-copy-text">So there we were sitting in a coffee shop in Glenelg (a sea-side suburb of Adelaide), and I asked the burning question I was dying to know his thoughts on - what does the future of real estate look like?</p>

                              <p className="dgrey-text blog-copy-text">His reply was cool, calm and collected. "Well first, the intermediary is dead."</p>

                              <p className="dgrey-text blog-copy-text">There it was. The biggest wake up call I'd ever had. And it was really confronting. It was 2016, and I was sitting across the table from Alan Noble, the then, Director of Engineering at Google. I was quite taken a back. I'm thinking "he does know I'm in property management right?"</p>

                              <div className="mt-5 mb-5 inline-quote">
                                  <p className="quote-text bl-text text-center">"His reply was cool, calm and collected. 'Well first, the intermediary is dead'"</p>
                              </div>

                              <p className="dgrey-text blog-copy-text">Four simple words, unfiltered and raw.</p>

                              <p className="dgrey-text blog-copy-text">These words confirmed what I was too uncomfortable to admit. Fundamentally changing our identity as property managers is the only option.</p>

                              <p className="dgrey-text blog-copy-text">So what are we doing?</p>

                              <p className="dgrey-text blog-copy-text">Our proptech start-up company, Virtual Agent is allowing real estate agencies to re-invent themselves.</p>

                              <p className="dgrey-text blog-copy-text">Instead of a property manager being bang, smack in the middle of an interaction between customers and suppliers (eg A to B to C), we are letting them step out of this position, so they can observe the interaction between A to C.</p>

                              <p className="dgrey-text blog-copy-text">We have created a new kind of Property Manager. We call them Observers.</p>

                              <p className="dgrey-text blog-copy-text">Through automation, Observers are freed up to add real value to customers. They are letting go of the admin and are happily allowing technology take over the reins with medial tasks. They are getting themselves out of the middle position.</p>

                              <p className="dgrey-text blog-copy-text">We believe this is the future of property management. A team of highly specialised, customer focused team members who are not bogged down in administration or medial tasks.</p>
                              <div className="mt-5 mb-5 inline-quote">
                                  <p className="quote-text bl-text text-center">"We have created a new kind of Property Manager. We call them Observers."</p>
                              </div>
                              <p className="dgrey-text blog-copy-text">Does this come with challenges? Yes, absolutely. You cannot reinvent yourself, and move property managers out from the middle position, without a bit of pain. Resistance to change is real. So too is the fear of letting go.</p>

                              <p className="dgrey-text blog-copy-text">Adding to the challenge is the vast majority of systems and platforms are built for this middle position - where a property manager touches every aspect of every task. It sounds good in theory, but the hidden risk is the blockage it creates. Especially if they are a closed ecosystem with little flexibility.</p>

                              <p className="dgrey-text blog-copy-text">But disintermediation is real. And it's coming. You only have to look at AirBNB and Uber to see it in action.</p>

                              <p className="dgrey-text blog-copy-text">We are proudly moving agencies away from being the intermediary, for those who are letting go. We build products for Observers. And our users are getting results not previously thought possible.</p>

                              <p className="dgrey-text blog-copy-text">Property Managers want more control. Observers embrace automation.</p>

                              <p className="dgrey-text blog-copy-text">It's time to join the movement.</p>

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