import React from 'react';
import dummy from "../../images/dummy.jpeg"
import { FaQuoteLeft, FaTwitter} from "react-icons/all"

// import 'aos/dist/aos.css';

const Testimonials = () => {
    return (
        <div className="testimonials">
            <div className="container">
                <h1 className="header">Testimonial</h1>
                <div className="show-case">
                    <article data-aos="fade-up" data-aos-duration="1500" data-aos-delay="100">
                        <img src={dummy} alt=""/>
                        <p>
                            <FaQuoteLeft className="icon"/>
                            Lorem ipsum dolor sit amet <a href="www.twitter.com">@codemunit</a> consectetur adipisicing elit. Asperiores, similique! Aperiam ducimus molestias consectetur neque temporibus eius iure ullam necessitatibus accusantium fugiat! Magnam maxime minus illo veritatis cumque quis excepturi.
                            {/* <FaQuoteRight className="icon"/> */}
                        </p>
                        <div className="witness">
                            <a href="www.twitter.com"><FaTwitter/> @johndoe</a>
                            <small>John Doe</small>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    );
}

export default Testimonials;
