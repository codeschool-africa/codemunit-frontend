import React from "react";
import { FaAngleDown } from "react-icons/all";
import { Link } from "react-router-dom";

import Header from "../components/Header";
import Banner from "../components/Banner";
// import Sponsors from '../components/Sponsors'
import News from "../components/News";
import Service from "../components/Service";
import CarrierPath from '../components/CarrierPath'
import Testimonials from '../components/Testimonials'
import Footer from "../components/Footer";
import "../../styles/landing-page/style.css";

// const callFakeAPI = delay =>
//   new Promise(resolve => {
//     setTimeout(resolve, delay)
//   })

// function useOnScreen (options, ) {

// }

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
    this.rootRef = React.createRef();

    const callback = entries => {
      entries.forEach(
        entry =>
          (this.singleRefs[entry.target.id].ratio =
            entry.intersectionRatio),
      );
    };

    this.observer = new IntersectionObserver(callback, {
      root: this.rootRef.current,
      threshold: new Array(101).fill(0).map((v, i) => i * 0.01),
    });

  }

  async componentDidMount() {
    // this.observer.observe(value.ref.current);
    document.title = "Kodemunit | Code + community";
  }
  render() {
    return (
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
        <div className="home-main-content" ref={this.rootRef}>
          <Service />
          <CarrierPath/>
          <News />
          <Testimonials/>
          <Footer />
        </div>
      </>
    );
  }
}

export default Home;
