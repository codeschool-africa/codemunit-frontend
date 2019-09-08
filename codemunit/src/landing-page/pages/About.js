import React from 'react';
import Header from '../components/Header'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

const About = () => {
    return (
        <div>
            <Header hero='about-header'>
                <Banner title='About the team' subtitle='Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ipsum vitae omnis fugit natus magnam nesciunt sed cupiditate aliquid quae modi odit quidem, quo repudiandae, ipsam fugiat tenetur maiores. Sunt!'>
                <div className="btn">
                    <Link to='/' className='btn-primary'>Hire the Team</Link>
                    <Link to='/' className='btn-primary'>Join Now</Link>
                </div>
                <div className="menu">
                    {/* <span>&gt;</span>
                    <div className="nav-links">
                    </div> */}
                </div>
            </Banner>
            </Header>
             <div className='service'>
                 <h1>
                     Hello from about page
                 </h1>
             </div>
            <Footer/>
        </div>
    );
}

export default About;