import React from "react";
import { FaAngleDown } from "react-icons/all";
import { Link } from "react-router-dom";


//components
import Header from "../components/Header";
import Banner from "../components/Banner";
import Pricing from "../components/Pricing";
import News from "../components/News";
import Service from "../components/Service";
import CarrierPath from '../components/CarrierPath'
import Testimonials from '../components/Testimonials'
import Footer from "../components/Footer";

//styles
import "../../styles/landing-page/style.css";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }

  async componentDidMount() {
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
          {/* <Pricing/> */}
          <Testimonials/>
          <Footer />
        </div>
      </>
    );
  }
}

export default Home;
