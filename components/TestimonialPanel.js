import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap'
import '../components/TestimonialPanel.css'
import fetch from 'isomorphic-unfetch'

function Testimonials(props) {

    //default testomonials
    const [testimonials, setTestimonials] = useState([])

    //default page
    const [offset, setOffset] = useState("0")

    const [nextOffset, setNextOffset] = useState("0");
    const location = null;
    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        // get airtable data
        fetch(`https://api.airtable.com/v0/apppt70pO3svlPGVH/Imported%20table?api_key=keyeWGXi14Rtk0OPQ&pageSize=${6}&offset=${offset}`)
				.then(res => {
					if(!res.ok) {
						throw new Error(res.status);
                    }
					return res.json();
				})
				.then(data => {
                    setTestimonials([ ...testimonials, ...data.records.map(record => (
                        {
                            rating: record.fields.RatingPercentage * 5,
                            comment: record.fields.Comment,
                            name: record.fields.Tenant,
                            location: record.fields.State,
                        }
                        
                    ))])
                    setNextOffset(data.offset);
                })
                .catch(error => console.log({ error }))	
    }, [offset]);
    if(location != null) {
        alert('1');
    }

    function loadNextPage() {
        setOffset(nextOffset);
    }


    return (
        <section>
            <Container fluid={true} className="n-product-spacer">
             <Row>
                 <Col xs={12}>
                     <div className="n-container-mw">
                         <div className="n-pu-grid">
                            {testimonials.map((testimonial, index) => (
                                <div key={index}>
                                    <p className="lh-normal"><i className="fas fa-quote-left"></i></p>
                                    <Stars count={testimonial.rating}/>
                                    <p className="lh-normal text-lgrey">{testimonial.comment}</p>
                                    <p className="lh-normal text-lgrey">{testimonial.name} {testimonial.location}</p>
                                    <p className="lh-normal text-lgrey">Tenant</p>
                                </div>
                            ))}
                         </div>
                         <div className='review-container text-center'>
                            <button className="btn btn-va-fix btn-big f-light smooth-animation d-inline-flex align-items-center" onClick={loadNextPage}>See more user stories <i className='fal fa-long-arrow-right ml-2 smooth-animation btn-moveRight'></i></button>
                         </div>
                         
                     </div>
                 </Col>
             </Row>
         </Container>
            
        </section>
    )
}

function Stars(props){

    const stars = [];

    for(var i=0; i<props.count; i++){
        stars.push(i)
    }

    return (
        <p className="lh-normal text-dgrey">
            {stars.map(s => <i key={s} className="fas fa-star"></i>)}
        </p>
    );
}

export default Testimonials;