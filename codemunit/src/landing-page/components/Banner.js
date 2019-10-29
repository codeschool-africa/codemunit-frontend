import React from 'react';
import 'aos/dist/aos.css';

const Banner = ({children, title, special, subtitle}) => {
    return (
        <div className="hero">
            <h1>{title} <code>{special}</code></h1>
            <div className='intro'>
                {subtitle}
            </div>
            {children}
        </div>
    );
}

export default Banner;
