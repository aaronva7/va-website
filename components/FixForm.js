import React, { Component } from 'react'
import './FixForm.css'
class FixForm extends Component {

    render() {
        return(
            <div className='fix-form'>
                <form id="contact-form" action="https://app.99inbound.com/api/e/fxLcVizo" method="POST" target="_blank">
                    <div className="form-row">
                        <div className="col">
                            <input name="name" className="form-control n-form-s" type="text" placeholder="Your Name" tabIndex="1" id="name" required />
                        </div>
                        <div className="col">
                            <input name="phone" className="form-control n-form-s" type="tel" placeholder="Phone Number" tabIndex="2" id="phone" required />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col">
                            <input name="email" className="form-control n-form-s" type="email" placeholder="Email Address" tabIndex="3" id="email" required />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col">
                            <textarea name="message" className="form-control n-form-s" placeholder="Message" tabIndex="4" cols="4"></textarea>
                        </div>
                    </div>
                    <div style={{'position': 'absolute', 'left': '-5000px'}}>
                        <input type="checkbox" name="dancing_black_paisley_shirt" value="1" tabindex="-1" autocomplete="no" />
                    </div>
                    <div className="mt-25 text-center">
                        <button type="submit" className="btn btn-va-fix btn-big f-light smooth-animation d-inline-flex align-items-center">Enquire now <i className='fal fa-long-arrow-right ml-2 smooth-animation btn-moveRight'></i><i className="w-loader-toggle far fa-circle-notch fa-spin d-none"></i></button>
                    </div>
                </form>
            </div>
        )
    }
}

export default FixForm