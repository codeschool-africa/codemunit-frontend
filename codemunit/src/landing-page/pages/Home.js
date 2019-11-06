import React from "react";
import { FaAngleDown } from "react-icons/all";
import { Link } from "react-router-dom";
import { NProgress } from '@tanem/react-nprogress'
// import img from "../../images/bg-image.jpg"
import Bar from '../../components/loader/bar'
import Spinner from "../../components/loader/spinner"
import Container from "../../components/loader/container"

import Header from "../components/Header";
import Banner from "../components/Banner";
// import Sponsors from '../components/Sponsors'
import News from "../components/News";
import Service from "../components/Service";
import CarrierPath from '../components/CarrierPath'
import Testimonials from '../components/Testimonials'
import Footer from "../components/Footer";
import "../../styles/landing-page/style.css";

const callFakeAPI = delay =>
  new Promise(resolve => {
    setTimeout(resolve, delay)
  })

class Home extends React.Component {

  state = {
    isLoading: true
  }

  async componentDidMount() {
    await callFakeAPI(3000)
    this.setState(() => ({
      isLoading: false
    }))
    document.title = "Kodemunit | Code + community";
  }
  render() {
    return (
      <>
        <NProgress isAnimating={this.state.isLoading}>
          {({ isFinished, progress, animationDuration }) => (
            <Container
              isFinished={isFinished}
              animationDuration={animationDuration}
            >
              <Bar progress={progress} animationDuration={animationDuration} />
              <Spinner />
            </Container>
          )}
        </NProgress>
        {this.state.isLoading ? '' :
        <>
        <Header hero="home-header">
          <Banner
            title="Welcome to" special="kodemunit"
            subtitle="We monitor and guide software development learners by bringing together learners and experts in a community.
            We equip software developer with skills and knowledge necessary to get software developer jobs"
          >
            <div className="btn">
              <Link to="/contact-us" className="btn-primary">
                Hire the Team
              </Link>
              <Link to="/account" className="btn-primary">
                Join Now
              </Link>
            </div>
            <a href="#service" className="menu">
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
        <Service />
        <CarrierPath/>
        <News />
        <Testimonials/>
        <Footer />
        </>
        }
      </>
    );
  }
}

export default Home;
