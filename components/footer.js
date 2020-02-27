import React from 'react'
import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap'
import './footer.css'

const Footer = () => (
    <footer>
        <Container fluid={true} className="content-spacer">
            <Row>
                <Col xs={12} sm={6} lg={3} xl={{span: 2, offset: 2}} >
                    <img src="../b-virtual-agent-logo.png" width="48" />
                    <p className="mt-3" style={{'maxWidth' : '200px'}}>Created by Real Estate Agents for Real Estate Agents.</p>
                </Col>
                <Col xs={12} sm={6} lg={3} xl={2}>
                    <h6>Products</h6>
                    <ul>
                        <li><a href="/products/fix">FIX</a></li>
                    </ul>
                </Col>
                <Col xs={12} sm={6} lg={3} xl={2}>
                    <h6>About</h6>
                    <ul>
                        <li><a href="/about">Our Story</a></li>
                        <li><a href="/about">Timeline</a></li>
                        <li><a href="/about">Meet the Team</a></li>
                    </ul>
                </Col>
                <Col xs={12} sm={6} lg={3} xl={2}>
                    <h6>Contact</h6>
                    <ul>
                        <li><a href="/contact">Contact Virtual Agent</a></li>
                        <li><a href="/contact">Product Training</a></li>
                        <li><a href="/contact">Enquire about our Platform</a></li>
                    </ul>
                </Col>
            </Row>
            <Row>
                <Col xs={12} xl={{span: 8, offset:2}}>
                    <div className="d-flex flex-row foot-panel-tcsec">
                        <div>
                            <p className='mb-0'><i className="fal fa-copyright"></i> Virtual Agent. All rights reserved.</p>
                        </div>
                        <div className="ml-auto">
                            <a href="/terms">Terms of Service</a>
                            <a href="/privacy" className='ml-3'>Privacy Policy</a>
                            <a href="https://www.facebook.com/virtualagent.com.au/" className='ml-3'><i className="fab fa-facebook-square"></i></a>
                            <a href="https://www.linkedin.com/company/virtualagent/" className='ml-3'><i className="fab fa-linkedin"></i></a>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </footer>
)

export default Footer