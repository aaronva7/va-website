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
                <title>The New World, Part Three - Virtual Agent Blog</title>
                <meta property="og:url" content="https://www.virtualagent.com.au/blog/the-new-world-part-three" />
                <meta property="og:type" content="article" />
                <meta property="og:title"  content="The New World, Part Three" />
                <meta property="og:description" content="We talk to Shannan Whitney, Director of BresicWhitney, one of Sydney's leading prestigious boutique real estate agencies on the challenges and opportunities facing real estate today" />
                <meta property="og:image" content="https://www.virtualagent.com.au/images/the-new-world-part-three-thumb.png" />
            </Head>
            <Navigation />
            <header className='header-uni header-home position-relative h-100'>
                <img className='header-home-img' src="../the-new-world-part-three.jpg" />
                <Container className='h-100'>
                <Row className='h-100'>
                    <Col>
                    <div className="d-flex h-100 n-header-wrapped-container align-items-center justify-content-center flex-column position-relative text-center">
                        <div className="position-relative" style={{'padding':'0 15px', 'zIndex' : '3'}}>
                            <p className='text-white'>Interview</p>
                            <h1 className="n-header-wrapped-title text-white">The New World, Part Three</h1>
                            <p className="n-header-wrapped-p text-white" style={{'maxWidth': '460px'}}>Interview with Shannan Whitney</p>
                        </div>
                        <div className="header-subcontent d-flex align-items-center flex-column mb-1 z-index-1 position-absolute">
                            <div className="mt-auto">
                                <img className="rounded-circle" src="../suz-bw-thumb.jpg" alt="Photo of Suzannah Toop" title="Photo of Suzannah Toop" width="48" />
                                <p className='mt-3 text-white'><i>by <strong>Suzannah Toop</strong></i></p>
                                <p className='text-white'><i>on July 3, 2019</i></p>
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
                          <p className="lead-text dgrey-text mt-4 mb-0 text-center">We talk to Shannan Whitney, Director of BresicWhitney, one of Sydney's leading prestigious boutique real estate agencies on the challenges and opportunities facing real estate today.</p>
                      </div>
                  </div>

                  <div className="col-12 offset-xl-2 col-xl-8">
                      <div className="blog-content-container">
                          <p className="dgrey-text blog-copy-text">In part 1 of this two-part interview, we discuss the need for change and where we're at. Stay tuned for part 2, where we chat with Shannan about tech and his views on an exciting way forward for real estate.</p>
                      </div>
                  </div>
                  <div className="col-12 offset-md-1 col-md-10 offset-lg-1 col-lg-10 offset-xl-3 col-xl-6">
                      <div className="d-flex flex-row justify-content-center align-items-center blog-picture-container">
                          <div className="blog-image-right">
                              <img src="../shannan-whitney-profile.jpg" className="img-fluid" />
                              <p className="mb-0 small">Shannan Whitney</p>
                          </div>
                          <div className="blog-image-left">
                              <img src="../bresic-whitney-office-thumb.jpg?v=3" className="img-fluid" />
                              <p className="mb-0 small">BresicWhiney's Office</p>
                          </div>
                      </div>
                  </div>
                  <div className="col-12 offset-xl-2 col-xl-8">
                      <div className="blog-content-container">
                          <div className="mb-5">
                              <p className="bl-text blog-copy-title"><strong>Suzannah: let's start off with a bit of background, how would you describe your business?</strong></p>
                              <p className="dgrey-text blog-copy-text">Shannan: BresicWhitney is a stand-alone brand in Sydney. We are in the inner city regions, in 5 locations and about 15 years old, providing both Sales and Property Management Services. We're around 160 staff spread across a fairly large part of metro Sydney, from the Inner West through to the Eastern suburbs.</p>
                          </div>

                          <div className="mb-5">
                              <p className="bl-text blog-copy-title"><strong>Suzannah: Being in real estate as long as you have, what do you think is the most exciting thing that's coming down the line for our industry?</strong></p>
                              <p className="dgrey-text blog-copy-text">Shannan: I think the most exciting thing is it's getting very hard. From my observations over the last 25 years, I think that the barriers, not just barriers of entry, but the barriers to success are getting harder and harder and harder.</p>
                              <p className="dgrey-text blog-copy-text">As a result, what you're seeing are offshoots of different solutions, offering different ways of doing things. I think it's a case of natural evolution. The stakes are higher now and the success metrics are very different. That excites me because it really does force you to stretch yourself, it encourages creativity and forces leadership and decision makers to look at things very differently.</p>
                          </div>

                          <div className="mb-5 inline-quote">
                              <p className="quote-text bl-text text-center">"I think that the barriers, not just barriers of entry, but the barriers to success are getting harder and harder and harder"</p>
                          </div>

                          <div className="mb-5">
                              <p className="bl-text blog-copy-title"><strong>Suzannah: So do you think the way we've always done things, is not going to be enough anymore?</strong></p>
                              <p className="dgrey-text blog-copy-text">Shannan: That's right. We've actually got to really reinvent ourselves and think differently.</p>
                          </div>

                          <div className="mb-5">
                              <p className="bl-text blog-copy-title"><strong>Suzannah: Do you believe we're in that period now?</strong></p>
                              <p className="dgrey-text blog-copy-text">Shannan: Yeah, I do. I think it is still early, in that everything's changing all the time. We're still early in that kind of evolution because from what I observe in Sydney, there are still a lot of existing traditional businesses that are doing well and still surviving. I think they will continue to do so.</p>
                              <p className="dgrey-text blog-copy-text">What you're seeing is a lot more tension and pressure on business models, on service outputs, on people and I think that's going to definitely get harder. It's hard to know exactly what the future is going to look like and I still don't think anyone's really clear about that. We have to accept that the change is happening and you're going to have to take a position somewhere and understand that some positions will be untenable or unsustainable.</p>
                          </div>

                          <div className="mb-5 inline-quote">
                              <p className="quote-text bl-text text-center">"We have to accept that the change is happening and you're going to have to take a position somewhere"</p>
                          </div>

                          <div className="mb-5">
                              <p className="bl-text blog-copy-title"><strong>Suzannah: So in this period of change, and under the theme of 'doing something is better than nothing'. What would be your top 3 things to action for those who may not know what to do?</strong></p>
                              <p className="dgrey-text blog-copy-text">Shannan: That's a good question because you know, this has actually been a problem for a while. It's early on because a lot of people have ignored the question because they could. We certainly realised quite a while ago, that continuing to sail in one direction and ignoring the messages that we're getting from our customers is a pretty dangerous position to be in.</p>
                              <p className="dgrey-text blog-copy-text">We made a decision that the buyer component of the business transaction is the best place for us to focus. That's the place that we think we can deliver the most value to both a buyer and the vendor. Then it's about being really committed to your decision and essentially orientating your business from that place forward.</p>
                              <p className="dgrey-text blog-copy-text">This doesn't necessarily mean that this is right for everyone. I do see a lot of other people in the industry who take a very different route.</p>
                              <p className="dgrey-text blog-copy-text">It all starts with leadership, clear direction and decision making. This is what people are really looking for.</p>
                          </div>

                          <div>
                              <p className="bl-text blog-copy-title"><strong>Suzannah: and how about in Property Management?</strong></p>
                              <p className="dgrey-text blog-copy-text">Shannan: I do think it's more challenging in Property Management frankly because it's a transactional relationship that you have with tenants and landlords, which is quite different to sales. Trying to create an all round experience for our customers, therefore, becomes difficult given the nature of each business.</p>
                          </div>

                          <div className="mt-5 inline-quote">
                              <p className="quote-text bl-text text-center">"It's early on because a lot of people have ignored the question because they could."</p>
                          </div>

                          <div>
                              <p className="bl-text blog-copy-title"><strong>Suzannah: I think you're spot on, it's going to be increasingly important to have different approaches and strategies to Sales and Property Management moving forward</strong></p>
                              <p className="dgrey-text blog-copy-text">Shannan: Exactly. That's why you see many businesses have taken a position or a bias towards one or the other. In many ways the logic to that makes sense, but in practice, you never really commit to that one way or the other because in a perfect world you want both.</p>
                              <p className="dgrey-text blog-copy-text">To have both sales and property management, not just in isolation but working together, from a client point of view is much more difficult than people realise.</p>
                              <p className="dgrey-text blog-copy-text">I think you do need to look at each business differently because the solutions are different.</p>
                          </div>

                          <div className="mt-5 inline-quote">
                              <p className="quote-text bl-text text-center">"Then it's about being really committed to your decision and essentially orientating your business from that place forward"</p>
                          </div>

                      </div>
                  </div>
                  <div className="col-12 offset-md-1 col-md-10 offset-lg-1 col-lg-10 offset-xl-3 col-xl-6">
                      <div className="blog-picture-container">
                          <img src="../bresic-whitney-darlinghurst-thumb.jpg" className="img-fluid" />
                          <p className="mb-0 small">Source: BresicWhitney</p>
                      </div>
                  </div>
                </Container>
            </article>
            <Footer />
        </Layout>
    )
}

export default newWorldPartThree