import React from 'react'
import PopupOverlay from '../components/PopupOverlay'
import './VideoContainer.css'

class VideoContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showPopup: false
        };
    }
    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
    }
    render() {
        return (
            <div className="position-relative">
                <a onClick={this.togglePopup.bind(this)} className="play-testimonial-link position-relative d-flex" role="button">
                    <div className="play-testimonial-btn d-flex position-absolute align-self-center">
                        <i className="fas fa-play"></i>
                    </div>
                    <img className="img-fluid" src="../testimonial-video-poster.jpg" />
                </a>	
            { this.state.showPopup ? 
            <PopupOverlay closePopup={this.togglePopup.bind(this)} />
            
            : null
            }
            </div>
        );
    }
}

export default VideoContainer