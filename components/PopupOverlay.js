import React from 'react'

class PopupOverlay extends React.Component {
    render() {
        return (
            <div id="video" className="lightbox">
                <div className="lightbox-container">
                    <button className="lightbox-close" onClick={this.props.closePopup}>
                        <i className="fal fa-times"></i>
                    </button>  
                    <div className="lightbox-content">
                        <div className="video-container">
                            <iframe id="youtube" width="960" height="540" src="https://www.youtube.com/embed/pyd5FQFajKE?showinfo=0" frameBorder="0" allowFullScreen></iframe>
                        </div>      
                    </div>
                </div>
            </div>
        );
    }
}
export default PopupOverlay