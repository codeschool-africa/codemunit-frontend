import React from 'react';
import { FaAngleDown } from 'react-icons/all'
// import "../../styles/landing-page/style.css"

import Header from '../components/Header'
import Banner from '../components/Banner'
import AboutIntro from '../components/AboutIntro'
import Team from "../components/Team"
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'


class About extends React.Component{

    state = {
        isLoading: true
    }

    async componentDidMount(){
        // await callFakeAPI(3000)
        // this.setState(() => ({
        //     isLoading: false
        // }))
        document.title = "Codemunit - The Team"
      }
      render() {
    return (
        <>
        <div>
            <Header hero='about-header'>
                <Banner title='The team - Codemunit' subtitle='Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ipsum vitae omnis fugit natus magnam nesciunt sed cupiditate aliquid quae modi odit quidem, quo repudiandae, ipsam fugiat tenetur maiores. Sunt!'>
                <div className="btn">
                    <Link to='/' className='btn-primary'>Hire the Team</Link>
                    {/* <Link to='/' className='btn-primary'>Join Now</Link> */}
                </div>
                <a href="#about" className="menu">
                    <FaAngleDown style={{ color: '#1a2e3f',
                        fontSize: '35px',
                        marginTop: '7px'
                    }}/>
                </a>
            </Banner>
            </Header>
            <div className="content">
                <AboutIntro/>
                <Team/>
            </div>
            <Footer/>
        </div>
        </>
    );
}
}

export default About;