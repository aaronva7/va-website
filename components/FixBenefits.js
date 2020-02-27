import React from 'react'
import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap'
import './FixBenefits.css'

const FixBenefits = () => (
    <section>
    <Container fluid={true} id="learn-about-fix" className="n-fix-product-container">
        <Row className="h-100">
            <Col xs={12} className="h-100">
                <div className="n-container-mw position-relative h-100"> 
                    <div className="d-flex flex-wrap align-items-center justify-content-center h-100 n-fix-product-snippets">
                        <div className="d-flex flex-wrap n-fix-products-info-snippets">
                            <div className="w-100">
                                <p className="lh-normal text-dgrey n-fix-product-snippet-title">Staff Retention</p>
                                <p className="lh-normal text-lgrey n-fix-product-snippet-body mb-0">In an industry famous for high turnover, FIX reduces staff turnover and paves the way for happier and healthier teams.</p>
                            </div>
                            <div className="w-100">
                                <p className="lh-normal text-dgrey n-fix-product-snippet-title">Client Retention</p>
                                <p className="lh-normal text-lgrey n-fix-product-snippet-body mb-0">With more time back in their day, staff can deliver greater customer service resulting in increased client retention.</p>
                            </div>
                            <div className="w-100">
                                <p className="lh-normal text-dgrey n-fix-product-snippet-title">Reduction of emails</p>
                                <p className="lh-normal text-lgrey n-fix-product-snippet-body mb-0">No more overflowing inbox's, no more missing quotes and no more unknowns. FIX collects the important information and keeps maintenance on track.</p>
                            </div>
                            <div className="w-100">
                                <p className="lh-normal text-dgrey n-fix-product-snippet-title">Time Saved</p>
                                <p className="lh-normal text-lgrey n-fix-product-snippet-body mb-0">Inbuilt smarts following up trades, notifying tenants and so much more! FIX gives Property Managers back time in their day.</p>
                            </div>
                        </div>	
                    </div>
                    <img className="position-absolute n-fix-product-screen" src="../fix-product-thumb.png" />
                </div>
            </Col>
        </Row>
    </Container>
    </section>
)

export default FixBenefits