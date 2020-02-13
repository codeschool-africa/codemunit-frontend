import React from "react";

const Banner = ({ children, title, description, image, imgAlt }) => {
  return (
    <article className='banner'>
      <div className='container'>
        <section className='left__section'>
          <img src={image} alt={imgAlt} />
        </section>
        <section className='right__section'>
          <h1 className=''>{title}</h1>
          <p className=''>{description}</p>
          {children}
        </section>
      </div>
    </article>
  );
};

export default Banner;
