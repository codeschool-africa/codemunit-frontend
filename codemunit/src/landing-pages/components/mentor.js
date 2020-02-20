import React from "react";
import { Link } from "react-router-dom";

import brain from "../../images/brain.png";

const Hire = () => {
  return (
    <article className='mentor'>
      <section className='img'>
        <img src={brain} alt='' />
      </section>
      <section className='content'>
        <h1 className='header'>Become a mentor</h1>
        <h2>Apply to start mentoring software students all across the globe</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus
          magni dicta earum sed architecto ad voluptatum Lorem ipsum dolor sit
          amet consectetur, adipisicing elit. Temporibus magni dicta earum sed
          architecto ad voluptatum Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Temporibus magni dicta earum sed architecto ad
          voluptatum Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Temporibus magni dicta earum sed architecto ad voluptatum
        </p>
        <Link className='btn btn-primary'> Learn more</Link>
      </section>
    </article>
  );
};

export default Hire;
