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
                <title>The New World, Part One - Virtual Agent Blog</title>
                <meta name="description" content="We sit down with Jellis Craig's Simon Mason for a chat about change" />
                <meta property="og:url"                content="https://www.virtualagent.com.au/blog/the-new-world-part-one" />
                <meta property="og:type"               content="article" />
                <meta property="og:title"              content="The New World, Part One" />
                <meta property="og:description"        content="We sit down with Jellis Craig's Simon Mason for a chat about change" />
                <meta property="og:image"              content="https://www.virtualagent.com.au/Images/the-new-world-banner-fb-bg.jpg" />	
            </Head>
            <Navigation />
            <header className='header-uni header-home position-relative h-100'>
                <img className='header-home-img' src="../the-new-world-banner-bg.jpg" />
                <Container className='h-100'>
                <Row className='h-100'>
                    <Col>
                    <div className="d-flex h-100 n-header-wrapped-container align-items-center justify-content-center flex-column position-relative text-center">
                        <div className="position-relative" style={{'padding':'0 15px', 'zIndex' : '3'}}>
                            <p className='text-white'>Interview</p>
                            <h1 className="n-header-wrapped-title text-white">The New World, Part One</h1>
                            <p className="n-header-wrapped-p text-white" style={{'maxWidth': '460px'}}>Interview with Simon Mason</p>
                        </div>
                        <div className="header-subcontent d-flex align-items-center flex-column z-index-1 position-absolute">
                            <div>
                                <img className="rounded-circle" src="../suz-bw-thumb.jpg" alt="Photo of Suzannah Toop" title="Photo of Suzannah Toop" width="48" />
                                <p className='mt-3 text-white'><i>by <strong>Suzannah Toop</strong></i></p>
                                <p className=' text-white'><i>on March 18, 2019</i></p>
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
                          <p className="lead-text dgrey-text mt-4 mb-0 text-center">Virtual Agent's Co-Founder Suzannah Toop catches up with Simon Mason at Jellis Craig Kensington to chat about his property management business and where he sees the industry is heading. A Big thank you to Simon for been the first interviewee for our upcoming blog series, The New World.</p>
                      </div>
                  </div>

                  <div className="col-12 offset-md-1 col-md-10 offset-lg-1 col-lg-10 offset-xl-3 col-xl-6">
                      <div className="d-flex flex-row justify-content-center align-items-center blog-picture-container">
                          <div className="blog-image-right">
                              <img src="../simon-mason-blog-thumb.jpg" className="img-fluid" />
                              <p className="mb-0 small">Simon Mason</p>
                          </div>
                          <div className="blog-image-left">
                              <img src="../jellis-craig-office-blog-thumb.jpg?v=3" className="img-fluid" />
                              <p className="mb-0 small">Jellis Craig Kensington</p>
                          </div>
                      </div>
                  </div>
                  <div className="col-12 offset-xl-2 col-xl-8">
                      <div className="blog-content-container">
                          <div className="mb-5">
                              <p className="bl-text blog-copy-title"><strong>Suzannah Toop: How would you describe your business?</strong></p>
                              <p className="dgrey-text blog-copy-text">Simon Mason: We have built our business on the basis of a cross between a machine and hyper growth model and the values we've created behind this model gives the team an opportunity to strive for ultimate 5-star client experiences in everything we do.</p>
                          </div>

                          <div className="mb-5">
                              <p className="bl-text blog-copy-title"><strong>ST: What do you think is the most exciting thing in the industry right now?</strong></p>
                              <p className="dgrey-text blog-copy-text">SM: Every day we see the tech space in our industry evolving. There's awesome opportunity to tap into this and assist in helping businesses being nimble, adaptable and personalized.</p>
                          </div>
                          <div className="mb-5 inline-quote">
                              <p className="quote-text bl-text text-center">"The challenges we had to overcome relate mainly to communication"</p>
                          </div>
                          <div className="mb-5">
                              <p className="bl-text blog-copy-title"><strong>ST: As a thought leader in technology, what's worked well in the tech space for you?</strong></p>
                              <p className="dgrey-text blog-copy-text">SM: We've had many successes however by far the design and implementation of workflow structures via tech site Trello is the stand out. Trello has enabled us a cloud-based solution around the flow of tasks (outside standard processes built into trust account software) which assists our team to interact with one another as well as our virtual assistants and also allows flexibility in our workplace with the benefits of total transparency still being had.</p>
                          </div>

                          <div className="mb-5">
                              <p className="bl-text blog-copy-title"><strong>ST: Were there any hurdles? How did you overcome them?</strong></p>
                              <p className="dgrey-text blog-copy-text">SM: The challenges we had to overcome relate mainly to communication. When the team rely on virtual assistants to complete tasks it is important the flow of information is managed in a way that everyone is kept up to date. The easiest way to explain this as an example is by having each property manager in a team all working from different rooms in a house independently of one another whilst still all relying on one particular admin person. This admin person needs to learn to prioritise tasks and update the team as required. However, to prioritise there needs to be conversations amongst the team in a structured manner. The best solution for us was another tech add-on called slack. We utilised a group forum for our PM department to manage this communication so each team member can easily identify the completed tasks and priorities our VA team have ahead of them on any given day.</p>
                          </div>
                          <div className="mb-5 inline-quote">
                              <p className="quote-text bl-text text-center">"Personalised service and adaptable payment models are the key in my opinion"</p>
                          </div>
                          <div className="mb-5">
                              <p className="bl-text blog-copy-title"><strong>ST: Where do you think the industry is going next? What opportunities do you think exist?</strong></p>
                              <p className="dgrey-text blog-copy-text">SM: Personalised service and adaptable payment models are the key in my opinion. We've started to consider initiatives in our business that steer us away from the one size fits all process and service structure that the majority of the industry still work off. The opportunities to create a clear point of difference in a given market place around this is enormous in my opinion. </p>
                          </div>

                          <div className="mb-5">
                              <p className="bl-text blog-copy-title"><strong>ST: What do you think future real estate agents will looks like?</strong></p>
                              <p className="dgrey-text blog-copy-text">SM: I feel future real estate agents look more like customer service managers than the admin/tasks-based managers of yesterday. Tech will take control of the flow of tasks and the agents will oversee the traffic management of these tasks whilst building in consistent customer support and positive experiences in the right moments. Performance management and KPI's will be based on client satisfaction and client reviews and not necessarily rent arrears, lease renewals, rent reviews etc.  I also feel flexible working environments with the benefit of cloud-based software is inevitable.</p>
                          </div>
                          <div className="mb-5 inline-quote">
                              <p className="quote-text bl-text text-center">"Being adaptable to change is a key part of our business model"</p>
                          </div>
                          <div>
                              <p className="bl-text blog-copy-title"><strong>ST: How does your business approach 'change'?</strong></p>
                              <p className="dgrey-text blog-copy-text">SM: Being adaptable to change is a key part of our business model. We have roles within our department that are purely based around refinement and improvement of process, structure, work environment, team morale, client satisfaction, brand awareness and so on. We encourage the team to think outside the box with regular case study reviews, scripts and dialogue workshops and mentoring by other thought-provoking leaders in our brand. We're also given great support by our property management business coach who is always challenging us around ideas she sees in the broader property management community Australia wide.</p>
                          </div>
                      </div>
                  </div>
                  <div className="col-12 offset-md-1 col-md-10 offset-lg-1 col-lg-10 offset-xl-3 col-xl-6">
                      <div className="blog-picture-container">
                          <img src="../jelliscraig-blog-banner.jpg?v=2" className="img-fluid" />
                          <p className="mb-0 small">Source: Jellis Craig</p>
                      </div>
                  </div>
                  <div className="col-12 offset-xl-2 col-xl-8">
                      <div className="blog-content-container mb-6rem">
                          <div className="mb-5">
                              <p className="bl-text blog-copy-title"><strong>ST: Now to the really important questions &mdash; please choose one:</strong></p>
                              <p className="dgrey-text blog-copy-text mb-0"><strong>Tech - Friend or Fo?</strong></p>
                              <p className="dgrey-text blog-copy-text">SM: Friend</p>

                              <p className="dgrey-text blog-copy-text mb-0"><strong>Text, Email or Phone Call?</strong></p>
                              <p className="dgrey-text blog-copy-text">SM: Phone Call</p>

                              <p className="dgrey-text blog-copy-text mb-0"><strong>iPhone or Android?</strong></p>
                              <p className="dgrey-text blog-copy-text">SM: iPhone</p>

                              <p className="dgrey-text blog-copy-text mb-0"><strong>Uber Eats or nice Restaurant?</strong></p>
                              <p className="dgrey-text blog-copy-text">SM: Restaurant</p>

                              <p className="dgrey-text blog-copy-text mb-0"><strong>Chocolate or Vanilla Ice-cream?</strong></p>
                              <p className="dgrey-text blog-copy-text">SM: Vanilla</p>
                          </div>

                          <div>
                              <p className="bl-text blog-copy-title"><strong>What's one piece of advice you would give your younger self?</strong></p>
                              <p className="dgrey-text blog-copy-text">SM: Follow your instinct and never settle because it's the easiest solution. If you believe in it, you can make it happen! No excuses...</p>
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