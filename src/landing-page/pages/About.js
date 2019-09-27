import React from 'react';
import { FaAngleDown } from 'react-icons/all'

import Header from '../components/Header'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

class About extends React.Component{
    componentDidMount(){
        document.title = "Codemunit - The Team"
      }
      render() {
    return (
        <div>
            <Header hero='about-header'>
                <Banner title='About the team' subtitle='Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ipsum vitae omnis fugit natus magnam nesciunt sed cupiditate aliquid quae modi odit quidem, quo repudiandae, ipsam fugiat tenetur maiores. Sunt!'>
                <div className="btn">
                    <Link to='/' className='btn-primary'>Hire the Team</Link>
                    <Link to='/' className='btn-primary'>Join Now</Link>
                </div>
                <a href="#about" className="menu">
                    <FaAngleDown style={{ color: '#1a2e3f',
                        fontSize: '35px',
                        marginTop: '7px'
                    }}/>
                </a>
            </Banner>
            </Header>
             <div className='service' id='about'>
                 <h1>
                     Hello from about page
                 </h1>
             </div>
            <Footer/>
        </div>
    );
                }
}

export default About;