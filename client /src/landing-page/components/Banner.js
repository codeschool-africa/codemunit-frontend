import React from 'react';

const Banner = ({children,title,subtitle}) => {
    return (
        <div className="hero">
            <h1>{title}</h1>
            <div className='intro'>
                {subtitle}
            </div>
            {children}
        </div>
    );
}

export default Banner;