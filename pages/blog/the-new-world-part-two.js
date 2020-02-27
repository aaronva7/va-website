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
                <title>The New World, Part Two - Virtual Agent Blog</title>
                <meta name="description" content="We sit down with LeahJay's Cassandra Lantry for a chat about change" />
                <meta property="og:url"                content="https://www.virtualagent.com.au/blog/the-new-world-part-two" />
                <meta property="og:type"               content="article" />
                <meta property="og:title"              content="The New World, Part Two" />
                <meta property="og:description"        content="We sit down with LeahJay's Cassandra Lantry for a chat about change" />
                <meta property="og:image"              content="https://www.virtualagent.com.au/Images/the-new-world-part-two-thumb.jpg" />
            </Head>
            <Navigation />
            <header className='header-uni header-home position-relative h-100'>
                <img className='header-home-img' src="../the-new-world-part-two.jpg" />
                <Container className='h-100'>
                <Row className='h-100'>
                    <Col>
                    <div className="d-flex h-100 n-header-wrapped-container align-items-center justify-content-center flex-column position-relative text-center">
                        <div className="position-relative" style={{'padding':'0 15px', 'zIndex' : '3'}}>
                            <p className='text-white'>Interview</p>
                            <h1 className="n-header-wrapped-title text-white">The New World, Part Two</h1>
                            <p className="n-header-wrapped-p text-white" style={{'maxWidth': '460px'}}>Interview with Cassandra Lantry</p>
                        </div>
                        <div className="header-subcontent d-flex align-items-center flex-column z-index-1 position-absolute">
                            <div>
                                <img className="rounded-circle" src="../suz-bw-thumb.jpg" alt="Photo of Suzannah Toop" title="Photo of Suzannah Toop" width="48" />
                                <p className='mt-3 text-white'><i>by <strong>Suzannah Toop</strong></i></p>
                                <p className=' text-white'><i>on April 12, 2019</i></p>
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
                          <p className="lead-text dgrey-text mt-4 mb-0 text-center">Virtual Agent's Co-Founder Suzannah Toop catches up with Cassandra Lantry at LeahJay to chat about her property management business and where she sees the industry heading. A Big thank you to Cassandra for being the second interviewee for our blog series, The New World.</p>
                      </div>
                  </div>

                  <div className="col-12 offset-md-1 col-md-10 offset-lg-1 col-lg-10 offset-xl-3 col-xl-6">
                      <div className="d-flex flex-row justify-content-center align-items-center blog-picture-container">
                          <div className="blog-image-right">
                              <img src="../cassandra-lantry-blog-thumb.jpg" className="img-fluid" />
                              <p className="mb-0 small">Cassandra Lantry</p>
                          </div>
                          <div className="blog-image-left">
                              <img src="../leahjay-office-blog-thumb.jpg?v=3" className="img-fluid" />
                              <p className="mb-0 small">LeahJay's Office</p>
                          </div>
                      </div>
                  </div>
                  <div className="col-12 offset-xl-2 col-xl-8">
                      <div className="blog-content-container">
                          <div className="mb-5">
                              <p className="bl-text blog-copy-title"><strong>Suzannah Toop: How would you describe your business?</strong></p>
                              <p className="dgrey-text blog-copy-text">Cassandra Lantry: We've been focussed solely on property management for 25 years. We see our role as being trusted property investment advisors for our clients and as leaders in property management, we are committed to being at the forefront in the property investment space. This means combining leading technology and systems with expertise and genuinely driven individuals and a contemporary approach, to provide a holistic service. We believe in a humanistic approach and in providing a supportive and encouraging environment for our people to build their careers and develop themselves.</p>
                          </div>

                          <div className="mb-5">
                              <p className="bl-text blog-copy-title"><strong>ST: What do you think is the most exciting thing in the industry right now?</strong></p>
                              <p className="dgrey-text blog-copy-text">CL: It is very exciting to be in the industry at a time of significant change... most of which we are yet to see. Transactional elements becoming real time, greater transparency and changes to how clients interact, pose threats and also create opportunity. For me personally, it is these opportunities that come with change is exciting. As well as the sense that those in the industry right now are at the dawn of a new era and will very much shape how it will look in the future.</p>
                          </div>

                          <div className="mb-5 inline-quote">
                              <p className="quote-text bl-text text-center">"It is very exciting to be in the industry at a  time of significant change... most of which we are yet to see."</p>
                          </div>

                          <div className="mb-5">
                              <p className="bl-text blog-copy-title"><strong>ST: As a thought leader in technology, what's worked well in the tech space for you? Were there any hurdles? How did you overcome them?</strong></p>
                              <p className="dgrey-text blog-copy-text">CL: We have adopted a number of new systems and applications that have created internal efficiencies and started us on the pathway to a more transparent and convenient service. The overarching success of those will come from adopting an agile systems model that allows us to implement and decommission systems as new technology is introduced. The greatest challenge for us in doing this has been predominantly around the scale of our business. We have developed robust project plans to overcome this, which include project teams, pilot offices (or sometimes pilot pods or pilot portfolios) and engaging our teams through regular communication and project champions, who play an important role post implementation.</p>
                          </div>

                          <div className="mb-5">
                              <p className="bl-text blog-copy-title"><strong>ST: Where do you think the industry is going next? What opportunities do you think exist?</strong></p>
                              <p className="dgrey-text blog-copy-text">CL: I really believe we have only scratched the surface as far as the impact of technology and disruption thus far. The 'big bang' is still ahead of us and remaining open minded and agile to what may come is key. Long term, the evolution of blockchain and AI will have a further impact on the transactional elements of the industry and areas like fractional investment, Air BnB and iBuyers will have greater impact in changing how we buy, sell and live in property. Shorter term for property management, we feel that real time trust accounting is very much upon us, as is the need to diversify revenue streams.</p>
                          </div>

                          <div className="mb-5 inline-quote">
                              <p className="quote-text bl-text text-center">"The 'big bang' is still ahead of us and remaining open minded and agile to what may come is key."</p>
                          </div>

                          <div className="mb-5">
                              <p className="bl-text blog-copy-title"><strong>ST: What do you think future real estate agents will looks like?</strong></p>
                              <p className="dgrey-text blog-copy-text">CL: Future agents will be more mobile and agile, covering greater geographical areas. We will play more of a trusted advisor role as many transactional elements are automated. Skills such as empathy, communication, adaptability, leadership, creativity and analytical skills will be more sought-after. Agents will be able to work more collaboratively and have a greater focus on the relationships with their clients. I believe this evolution is imperative for agents and agencies to maintain the value and relevance to clients.</p>
                          </div>

                          <div>
                              <p className="bl-text blog-copy-title"><strong>ST: How does your business approach 'change'?</strong></p>
                              <p className="dgrey-text blog-copy-text">CL: We are proactive and are driving the change within our business to stay ahead of the curve. Our approach to change is to be adaptable, agile and innovative. As we are a mature medium size business and not a start-up, the change is transitory and somewhat of a metamorphosis. It is an exciting time but there is no doubt that this comes with its challenges. The first being accessing technology that is not necessarily fully developed or available yet. We are continually out in our market and other industries to see what is here now and what is on the horizon. Secondly is moving our people through this transition and finding those that will be a driver of change. We have identified there is still the need for traditional property managers, however many of the attributes that make a successful traditional property manager, create blocks to evolving into the future PM.</p>
                          </div>

                          <div className="mt-5 inline-quote">
                              <p className="quote-text bl-text text-center">"Our approach to change is to be adaptable, agile and innovative"</p>
                          </div>

                      </div>
                  </div>
                  <div className="col-12 offset-md-1 col-md-10 offset-lg-1 col-lg-10 offset-xl-3 col-xl-6">
                      <div className="blog-picture-container">
                          <img src="../leahjay-blog-banner.jpg?v=2" className="img-fluid" />
                          <p className="mb-0 small">Source: LeahJay</p>
                      </div>
                  </div>
                  <div className="col-12 offset-xl-2 col-xl-8">
                      <div className="blog-content-container mb-6rem">
                          <div className="mb-5">
                              <p className="bl-text blog-copy-title"><strong>ST: Please pick one:</strong></p>
                              <p className="dgrey-text blog-copy-text mb-0"><strong>Tech - Friend or Fo?</strong></p>
                              <p className="dgrey-text blog-copy-text">CL: Friend</p>

                              <p className="dgrey-text blog-copy-text mb-0"><strong>Text, Email or Phone Call?</strong></p>
                              <p className="dgrey-text blog-copy-text">CL: Text</p>

                              <p className="dgrey-text blog-copy-text mb-0"><strong>iPhone or Android?</strong></p>
                              <p className="dgrey-text blog-copy-text">CL: Android</p>

                              <p className="dgrey-text blog-copy-text mb-0"><strong>Uber Eats or nice Restaurant?</strong></p>
                              <p className="dgrey-text blog-copy-text">CL: Uber Eats - I have 2 kids! :)</p>

                              <p className="dgrey-text blog-copy-text mb-0"><strong>Chocolate or Vanilla Ice-cream?</strong></p>
                              <p className="dgrey-text blog-copy-text">CL: Vanilla ice-cream</p>
                          </div>
                          <div>
                              <p className="bl-text blog-copy-title"><strong>What's one piece of advice you would give your younger self?</strong></p>
                              <p className="dgrey-text blog-copy-text">CL: Be bold!</p>
                              <p className="dgrey-text blog-copy-text">I have worked over the past 3 years on understanding and developing myself as a leader of the business and it has given me many opportunities to reflect. The one thing that always stands out to me is to be bold and to be prepared to step outside your comfort zone at every opportunity (something I would have resisted in the past)... it is very true that this where the greatest learning happens.</p>
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