import React from 'react';
import 'aos/dist/aos.css';

const Banner = ({children,title,subtitle}) => {
    return (
        <div className="hero">
            <h1 data-aos="fade-in">{title}</h1>
            <div className='intro' data-aos="fade-up">
                {subtitle}
            </div>
            {children}
        </div>
    );
}

export default Banner;
