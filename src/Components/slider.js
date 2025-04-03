import React from 'react';
import SlickSlider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import sampleImage from './assest/demo1-slide-01.webp';
import sam1 from './assest/demo1-slide-02.webp';
import sam2 from './assest/demo1-slide-03.jpg';



const Slider = () => {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    };

    return (
        <div className="slider-container">
            <SlickSlider {...settings}>
                <div className="slide">
                    <img src={sam2} alt="Slide 1" className="slide-image" />
                    <div className="content">
                        <h3>Interior Design For Plaza</h3>
                        <p>Our experience ensures that your projects will be done right and with the utmost professionalism.</p>
                    </div>
                </div>
                <div className="slide">
                    <img src={sampleImage} alt="Slide 2" className="slide-image" />
                    <div className="content">
                        <h3>Modern Architecture Design</h3>
                        <p>We create stunning architectural designs that blend functionality and style.</p>
                    </div>
                </div>
                <div className="slide">
                    <img src={sam1} alt="Slide 3" className="slide-image" />
                    <div className="content">
                        <h3>Luxury Interior Spaces</h3>
                        <p>Bringing comfort and elegance into every space we design.</p>
                    </div>
                </div>
            </SlickSlider>
        </div>
    );
};

export default Slider;
