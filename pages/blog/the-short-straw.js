import React from 'react'
import Head from 'next/head'
import Navigation from '../../components/nav'
import Layout from '../../components/layout'
import { Container, Row, Col, Carousel, CarouselItem } from 'react-bootstrap'
import Footer from '../../components/footer'

const newWorldPartThree = () => {
    return(
        <Layout>
            <Head>
                <title>The Short Straw - Virtual Agent Blog</title>
                <meta name="description" content="Thinking about real estate differently!" />
                <meta property="og:url"                content="https://www.virtualagent.com.au/blog/the-new-world-part-one" />
                <meta property="og:type"               content="article" />
                <meta property="og:title"              content="The Short Straw?" />
                <meta property="og:description"        content="Thinking about real estate differently!" />
                <meta property="og:image"              content="https://www.virtualagent.com.au/Images/the-new-world-banner-fb-bg.jpg" />	
            </Head>
            <Navigation />
            <header className='header-uni header-home position-relative h-100'>
                <img className='header-home-img' src="../blog-header.jpg" />
                <Container className='h-100'>
                <Row className='h-100'>
                    <Col>
                    <div className="d-flex h-100 n-header-wrapped-container align-items-center justify-content-center flex-column position-relative text-center">
                        <div className="position-relative" style={{'padding':'0 15px', 'zIndex' : '3'}}>
                            <p className='text-white'>News</p>
                            <h1 className="n-header-wrapped-title text-white">The Short Straw?</h1>
                            <p className="n-header-wrapped-p text-white" style={{'maxWidth': '460px'}}>Thinking about real estate differently!</p>
                        </div>
                        <div className="header-subcontent d-flex align-items-center flex-column z-index-1 position-absolute">
                            <div>
                                <img className="rounded-circle" src="../suz-bw-thumb.jpg" alt="Photo of Suzannah Toop" title="Photo of Suzannah Toop" width="48" />
                                <p className='mt-3 text-white'><i>by <strong>Suzannah Toop</strong></i></p>
                                <p className=' text-white'><i>on July 18, 2018</i></p>
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
                          <p className="lead-text dgrey-text mt-4 mb-0 text-center">Hey fellow real estate principals,</p>
                      </div>
                  </div>
                  <div className="col-12 offset-xl-2 col-xl-8">
                      <div className="blog-content-container">
                      <p className='mb-5'>After months of thinking about writing a blog, today I put pen to paper (so to speak). After attending a huge number of conferences in the last year on disruption and the future of real estate, there is a whole lot of doom and gloom out there in the industry. Essentially that the real estate world may be ending. (The world is changing, yes, but ending? We don't think so.)</p>

                      <p className='mb-5'>What I found most interesting about these conferences, other than the idea that real estate agencies are the new cab companies and UBER is on its way (but we'll get to that), is that none of the speakers I listened to, gave any sight or suggestions as to what to do. What steps to take. The ultimate cliff hanger and many were left feeling... OK so now what?</p>

                      <p className='mb-5'>This is where this blog comes in - sharing some thoughts and insights into where we are heading at Toop&Toop. We certainly don't have all of the answers (maybe we have none of them) but one thing I do know is we are calm. Calm about change, and I'd even go so far as to say we are excited.</p>

                      <p className='mb-5'>And if we can connect like-minded principals and leaders together, it might spark a conversation or idea. And we might just out-smart this thing.</p>

                      <p className='mb-5'>And what better time to stop procrastinating and actually post this, than the week our start-up real estate tech company (and sister company to Toop&Toop) Virtual Agent turns 1! For those that know Toop&Toop, in our 33 years we have lead the way with innovation. From the first back lit signboard in 1992 (with an extension cord running from the house) to being the first in the Advertiser with colour - thinking differently is in our DNA and Virtual Agent is the next generation of this.</p>

<div className='mb-5'>
    <Carousel>
    <Carousel.Item>
        <img className="d-block w-100" src="../the-short-straw-blog-2.jpg" alt="Birthday celebrations" />
        <Carousel.Caption>
        <p>More first Birthday celebrations!</p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img className="d-block w-100" src="../the-short-straw-blog-1.jpg" alt="Working away!" />
        <Carousel.Caption>
        <p>Keith &amp; Mittali working away!</p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img className="d-block w-100" src="../the-short-straw-blog-4.jpg" alt="Our office dog, Mia!" />
        <Carousel.Caption>
        <p>Our family dog, Mia gets extra points for supporting a party-hat for just enough time for Leanne (our in house photographer) to get a snap!</p>
        </Carousel.Caption>
    </Carousel.Item>
    </Carousel>    
</div>

                      <p className='mb-5'>Putting the Birthday celebrations to one side.. let's dive right in.</p>

                      <p className='mb-5'>I want to start with the biggie first. Disruption. Change. The Future. Whatever you'd like to call it. I'm hearing that there are a lot of people feeling anxious about the change and where it is all going.</p>

                      <p className='mb-5'>Our thoughts? Change isn't coming, it's already here. And we are taking action now. Because we know it can't wait. We can feel the change - fees are being squeezed, consumers are more savvy and we are being forced to do more for less.</p>

                      <p className='mb-5'>So we have worked out a plan of attack. A 2020 Plan. And we are simply actioning it. </p>

                      <p className='mb-5'>I'm big on analogies (mainly because this is my main way of communicating with our team of software engineers!) so here's one that helps me make sense of what we believe we need to do.</p>

                      <p className='mb-5'>Home Reno vs New Build.</p>

                      <p className='mb-5'>Rather than approaching this industry change like a mini home renovation (like putting in new blinds, carpet or tapware), we are taking the opportunity to start over, to rebuild from scratch. We've taken the time to stand on the vacant block (where the house once was), with the foreman, to discuss the footings, drainage, aspect of the home etc. It's a clean slate.</p>

                      <p className='mb-5'>There's a lot of work to do (much more than a renovation) and we know at the end of it we will have a vastly different looking home than the original.</p>

                      <p className='mb-5'>So where did we start first?</p>

                      <p className='mb-5'>Property management. And more specifically, maintenance in property management. 5 years of our research (and the memories burnt into my mind circa 2012 at T&amp;T) has shown that maintenance is the biggest source of conflict, angst, complaints, stress.. and most importantly (with my lawyer hat on)... risk. We found that 80% of phone calls and emails to property management is maintenance related. It makes sense that it is also the biggest source of staff-turnover. </p>

                      <p className='mb-5'>So for us, we had to start there.</p>

                      <p className='mb-5'>We're well into our rebuild phase. And it will be done piece by piece, brick by brick.</p>
                      </div>
                  </div>

                </Container>
            </article>
            <Footer />
        </Layout>
    )
}

export default newWorldPartThree