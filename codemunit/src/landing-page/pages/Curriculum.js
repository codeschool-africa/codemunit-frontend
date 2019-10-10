import React from 'react'
import { Link } from 'react-router-dom'
import { FaAngleDown } from 'react-icons/all'

import Header from '../components/Header'
import Banner from '../components/Banner'
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
                <a href="#service" className="menu">
                    <FaAngleDown style={{ color: '#1a2e3f',
                        fontSize: '35px',
                        marginTop: '7px'
                    }}/>
                </a>
            </Banner>
            </Header>
            <Service/>
            <Footer/>
        </>
    );
}

export default Curriculum;
