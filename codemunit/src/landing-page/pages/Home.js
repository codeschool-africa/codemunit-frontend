import React from "react";
import { FaAngleDown } from "react-icons/all";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

//components
import Header from "../components/Header";
import Banner from "../components/Banner";
// import Pricing from "../components/Pricing";
import News from "../components/News";
import Service from "../components/Service";
import CarrierPath from "../components/CarrierPath";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

//styles
import "../../styles/landing-page/style.css";

const Home = ({ auth: { isAuthenticated, loading, user } }) => {
  return (
    <>
      <Header hero='home-header'>
        <Banner
          title='Welcome to'
          special='kodemunit'
          subtitle='We monitor and guide software development learners by bringing together learners and experts in a community.
            We equip software developer with skills and knowledge necessary to get software developer jobs'
        >
          <div className='btn'>
            <Link to='/contact-us' className='btn-primary'>
              Hire the Team
            </Link>
            {isAuthenticated ? (
              null
            ) : (
              <Link to='/signin' className='btn-primary'>
                Join Now
              </Link>
            )}
          </div>
          <a href='#service' className='menu'>
            <FaAngleDown
              style={{
                color: "#1a2e3f",
                fontSize: "25px",
                marginTop: "7px"
              }}
            />
          </a>
        </Banner>
      </Header>
      <div className='home-main-content'>
        <Service />
        <CarrierPath />
        <News />
        {/* <Pricing/> */}
        <Testimonials />
        <Footer />
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  auth: state.auth
});

Home.propTypes = {
  auth: PropTypes.object.isRequired
};

export default connect(mapStateToProps, {})(Home);
