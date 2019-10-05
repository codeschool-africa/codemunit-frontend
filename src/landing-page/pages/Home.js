import React from "react";
import { FaAngleDown } from "react-icons/all";
import { Link } from "react-router-dom";
// import ScrollAnimation from 'react-animate-on-scroll'

import Header from "../components/Header";
import Banner from "../components/Banner";
import Sponsors from '../components/Sponsors'
import News from "../components/News";
import Service from "../components/Service";
import CarrierPath from '../components/CarrierPath'
import Testimonials from '../components/Testimonials'
import Footer from "../components/Footer";
import "../../styles/landing-page/style.css";

class Home extends React.Component {
  componentDidMount() {
    document.title = "Codemunit - Home";
  }
  render() {
    return (
      <>
        <Header hero="home-header">
          <Banner
            title="com+code+unit"
            subtitle="We monitor and guide software development learners (from zero to hero)  by bringing together learners and experts in a community.
            We equip software developer with skills and knowledge necessary to get software developer jobs"
          >
            <div className="btn">
              <Link to="/" className="btn-primary">
                Hire the Team
              </Link>
              <Link to="/user" className="btn-primary">
                Join Now
              </Link>
            </div>
            <a href="#service" className="menu">
              <FaAngleDown
                style={{
                  color: "#1a2e3f",
                  fontSize: "25px",
                  marginTop: "7px"
                  // display: 'flex',
                  // justifyContent: 'center',
                  // alignItems: 'center'
                }}
              />
            </a>
          </Banner>
        </Header>
        <Service />
        <CarrierPath/>
        <News />
        {/* <Sponsors/> */}
        <Testimonials/>
        <Footer />
      </>
    );
  }
}

export default Home;
