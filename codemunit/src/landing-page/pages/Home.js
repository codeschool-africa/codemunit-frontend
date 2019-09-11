import React from 'react'
import { FaAngleDown } from 'react-icons/all'
import { Link } from 'react-router-dom'

import Header from '../components/Header'
import Banner from '../components/Banner'
import Sponsors from '../components/Sponsors'
import News from '../components/News'
import Service from '../components/Service'
import CarrierPath from '../components/CarrierPath'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'
import '../../styles/landing-page/style.css'

const Home = () => {
    return (
        <>
            <Header hero='home-header'>
                <Banner title='Com+code+unit' subtitle='Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ipsum vitae omnis fugit natus magnam nesciunt sed cupiditate aliquid quae modi odit quidem, quo repudiandae, ipsam fugiat tenetur maiores. Sunt!'>
                <div className="btn">
                    <Link to='/' className='btn-primary'>Hire the Team</Link>
                    <Link to='/' className='btn-primary'>Join Now</Link>
                </div>
                <a href="#service" className="menu">
                    <FaAngleDown style={{ color: '#1a2e3f',
                        fontSize: '35px',
                        marginTop: '7px'
                    }}/>
                </a>
            </Banner>
            </Header>
            <Service/>
            {/* <Intro/> */}
            {/* <CarrierPath/> */}
            <News/>
            <Sponsors/>
            {/* <Testimonials/> */}
            <Footer/>
        </>
    );
}

export default Home;
