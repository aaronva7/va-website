import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './PersonBio.css'

class PersonBio extends React.Component {
    render() {
        return(
<section>
    <Container fluid={true} className="content-spacer">
        <Row>
            <div className="col-12 content-spacer">
                <div className="n-container-mw">
                <div className="d-flex flex-column-mob">
                    <div className="n-person-quote n-mw-person-snippets d-flex align-items-start">
                        <p className="n-person-quote-copy n-product-subtext text-dgrey position-relative mb-0">{this.props.quotetext}</p>
                    </div>	
                    <div className="n-person-bio n-mw-person-snippets">
                        {this.props.persontext}
                    </div>
                </div>	
                </div>	
            </div>
            <div className="col-12">
                <div className="n-video-container">
                    <div className="position-relative">
                        <a className="play-testimonial-link position-relative d-flex" role="button" onClick="revealVideo('video','youtube')">
                            <div className="play-testimonial-btn d-flex position-absolute align-self-center">
                                <i className="fas fa-play"></i>
                            </div>
                            <img className="img-fluid" src="../testimonial-video-poster.jpg" />
                        </a>	
                    </div>	
                </div>
            </div>
        </Row>
    </Container>
</section>
)
}
}

export default PersonBio