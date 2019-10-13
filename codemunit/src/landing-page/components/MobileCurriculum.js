import React, { Component } from "react";
import { Link } from "react-router-dom";
// import 'aos/dist/aos.css';

import { FaAngleRight } from "react-icons/all";

export default class MobileCurriculum extends Component {
  constructor(props) {
    super();
    this.state = {
      isWeb: false,
      isMobile: false,
      isUi: false,
      isDataScience: false,
      isAI: false
    };
  }

  showSection1 = () => {
    this.setState({ isWeb: !this.state.isWeb });
    this.setState({ isMobile: false });
    this.setState({ isUi: false });
    this.setState({ isDataScience: false });
    this.setState({ isAI: false });
  };
  showSection2 = () => {
    this.setState({ isUi: !this.state.isUi });
    this.setState({ isWeb: false });
    this.setState({ isMobile: false });
    this.setState({ isDataScience: false });
    this.setState({ isAI: false });
  };
  showSection3 = () => {
    this.setState({ isMobile: !this.state.isMobile });
    this.setState({ isWeb: false });
    this.setState({ isUi: false });
    this.setState({ isDataScience: false });
    this.setState({ isAI: false });
  };
  showSection4 = () => {
    this.setState({ isDataScience: !this.state.isDataScience });
    this.setState({ isWeb: false });
    this.setState({ isUi: false });
    this.setState({ isMobile: false });
    this.setState({ isAI: false });
  };
  showSection5 = () => {
    this.setState({ isAI: !this.state.isAI });
    this.setState({ isWeb: false });
    this.setState({ isUi: false });
    this.setState({ isDataScience: false });
    this.setState({ isMobile: false });
  };
  render() {
    return (
      <section className="description mobile-curriculum" data-aos="fade-in">
        <div className="syllabuses">
          <ul>
            <li
              onClick={() => this.showSection1()}
              className={this.state.isWeb ? "active" : ""}
            >
              <FaAngleRight className="icon" />
              Full Stack Web Development
            </li>
            <div
              className={
                this.state.isWeb
                  ? "sections-container sections-container-active"
                  : "sections-container"
              }
            >
              <ul>
                <li>HTML & CSS</li>
                <li>Javascript</li>
                <li>ReactJs & AngularJs</li>
                <li>NodeJs</li>
                <li>PHP & Laravel</li>
                <li>Database Technology</li>
                <li>
                  <Link to="/" className="btn-primary">
                    Enroll This Course
                  </Link>
                </li>
              </ul>
            </div>
            <li onClick={() => this.showSection2()}
              className={this.state.isUi ? "active" : ""}>
              <FaAngleRight className="icon" />
              UI/UX Design
            </li>
            <div className={
              this.state.isUi
                ? "sections-container sections-container-active"
                : "sections-container"
            }>
              <ul>
                <li>Coming soon!!</li>
                <li>
                  {/* <Link to="/" className="btn-primary">Enroll This Course</Link> */}
                </li>
              </ul>
            </div>
            <li onClick={() => this.showSection3()}
              className={this.state.isMobile ? "active" : ""}>
              <FaAngleRight className="icon" />
              Mobile App Development
            </li>
            <div className={
              this.state.isMobile
                ? "sections-container sections-container-active"
                : "sections-container"
            }>
              <ul>
                <li>Coming Soon!!</li>
                <li>
                  {/* <Link to="/" className="btn-primary">Enroll This Course</Link> */}
                </li>
              </ul>
            </div>
            <li onClick={() => this.showSection4()}
              className={this.state.isDataScience ? "active" : ""}>
              <FaAngleRight className="icon" />
              Data Science
            </li>
            <div className={
              this.state.isDataScience
                ? "sections-container sections-container-active"
                : "sections-container"
            }>
              <ul>
                <li>Coming soon!!</li>
                <li>
                  {/* <Link to="/" className="btn-primary">Enroll This Course</Link> */}
                </li>
              </ul>
            </div>
            <li onClick={() => this.showSection5()}
              className={this.state.isAI ? "active" : ""}>
              <FaAngleRight className="icon" />
              Artificial Intelligence
            </li>
            <div className={
              this.state.isAI
                ? "sections-container sections-container-active"
                : "sections-container"
            }>
              <ul>
                <li>Coming soon!!</li>
                <li>
                  {/* <Link to="/" className="btn-primary">Enroll This Course</Link> */}
                </li>
              </ul>
            </div>
          </ul>
        </div>
      </section>
    );
  }
}
