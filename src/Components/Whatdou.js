import React from 'react';
import Hotell from './assest/hotel.png'
import Hotel2 from './assest/hotel2.png'
import Hotel3 from './assest/hotel3.png'


function Whatdou() {
    return(

        <div class="container">
        <div class="section-title">
            <h6>What We Do</h6>
            <h2>
      We Can Build You The Interior <br /> Of Your Dreams
    </h2>
        </div>
        <div class="service-box">
            <div class="service">
                <img src={Hotell} alt="Architecture" />
                <hr className='border'/>
                <h4>The Art or Science of Architecture</h4>
                <a href="#">Read More</a>
            </div>
            <div class="service">
                <img src={Hotel2} alt="Home Check" />
                <hr className='border'/>
                <h4>Home Check for Safety and Secure</h4>
                <a href="#">Read More</a>
            </div>
            <div class="service">
                <img src={Hotel3} alt="Interior Planner" />
                <hr className='border'/>
                <h4>Patterns and Materials for Interior Plan</h4>
                <a href="#">Read More</a>
            </div>
        </div>
    </div>


    );
}

export default Whatdou;