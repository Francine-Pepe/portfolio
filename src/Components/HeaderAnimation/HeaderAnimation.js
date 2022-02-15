import React from 'react';
import './HeaderAnimation.css';
import Arrow from './../Images/arrow_orange.png';

function HeaderAnimation() {
return (
    <>
    <div class="animated-title">
        <div class="text-top">
            <div>
                <span>Hi. My name is Francine</span>
                {/* <span></span> */}
                {/* <span class="dot1"></span>
                <span class="dot2"></span>
                <span class="dot3"></span>
                <span class="dot4"></span>
                <span class="dot5"></span>
                <span class="dot6"></span>
                <span class="dot7"></span> */}

            </div>
        </div>
        
        <div class="text-bottom">
            <div>I am a Frontend Developer</div>
            
        </div>
        
    </div>
    <div className="self_description">
            <p>Creative, passionate about visual design and animation, <br /> with which I express myself in the most
                <br /> effective and clean way</p>
    </div>
    <div className="photo_image">
        <div className="my_work">
            <p>this is <a href="/" >my work</a></p>
            <a href="/"><img src={Arrow} alt="arrow" /></a>

        </div>
    </div>
   
    </>
    );

}

export default HeaderAnimation;