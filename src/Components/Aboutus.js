import React, { useState } from 'react';
import videoimg from './assest/main-gallery.jpg';

function Aboutus() {
    const [showVideo, setShowVideo] = useState(false);

    return (
        <div className="welcome-section">
            <div className="content-welcome">
                <h2><span>WELCOME TO</span> <strong>INTERIOR</strong></h2>
                <h3>We are the best Interior designer since 1975.</h3>
                <p>
                    Interior brings 41 years of interior design experience right to your home or office.
                    Our design professionals help determine the best products and designs that fit your space.
                </p>
                <button className="btn">MORE ABOUT US</button>
                <p className="quote">
                    Request Quote: <span className="email">explainquote@gmail.com</span>
                </p>
            </div>
            
            <div className="images">
                <div className="video">
                    {showVideo ? (
                        <iframe
                            width="500"
                            height="400"
                            src="https://www.youtube.com/embed/WBqoJVEyJPU?autoplay=1"
                            title="Video Player"
                            frameBorder="0"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                        ></iframe>
                    ) : (
                        <>
                            <img src={videoimg} alt="Video" className="video-thumb" />
                            <div className="play-button" onClick={() => setShowVideo(true)}>▶</div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Aboutus;
