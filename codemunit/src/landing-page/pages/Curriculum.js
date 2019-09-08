import React from 'react'

import Header from '../components/Header'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import Service from '../components/Service'
import Footer from '../components/Footer'
import '../../styles/landing-page/style.css'

const Curriculum = () => {
    return (
        <>
            <Header hero='home-header'>
                <Banner title='Curriculum' subtitle='Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ipsum vitae omnis fugit natus magnam nesciunt sed cupiditate aliquid quae modi odit quidem, quo repudiandae, ipsam fugiat tenetur maiores. Sunt!'>
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
            <Service/>
            <Footer/>
        </>
    );
}

export default Curriculum;
