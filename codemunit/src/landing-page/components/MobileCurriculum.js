import React, { Component } from 'react'
import { Link } from "react-router-dom"
// import 'aos/dist/aos.css';

import { FaAngleRight } from "react-icons/all";

export default class MobileCurriculum extends Component {
    render() {
        return (
            <section className="description mobile-curriculum" data-aos="fade-in">
              <div className="syllabuses">
                  <ul>
                      <li className="active" >
                            <FaAngleRight className="icon"/>
                            Full Stack Web Development
                      </li>
                      <div className="sections-container">
                            <ul>
                                <li>HTML & CSS</li>
                                <li>Javascript</li>
                                <li>ReactJs & AngularJs</li>
                                <li>NodeJs</li>
                                <li>PHP & Laravel</li>
                                <li>Database Technology</li>
                                <li>
                                    <Link to="/" className="btn-primary">Enroll This Course</Link>
                                </li>
                            </ul>
                        </div>
                      <li>
                         <FaAngleRight className="icon"/>
                          UI/UX Design
                      </li>
                      <div className="sections-container">
                        <ul>
                            <li>Coming soon!!</li>
                            <li>
                                {/* <Link to="/" className="btn-primary">Enroll This Course</Link> */}
                            </li>
                        </ul>
                       </div>
                       <li>
                       <FaAngleRight className="icon"/>
                          Mobile App Development
                      </li>
                      <div className="sections-container">
                        <ul>
                            <li>Coming soon!!</li>
                            <li>
                                {/* <Link to="/" className="btn-primary">Enroll This Course</Link> */}
                            </li>
                        </ul>
                       </div>
                       <li>
                       <FaAngleRight className="icon"/>
                          Data Science
                      </li>
                      <div className="sections-container">
                        <ul>
                            <li>Coming soon!!</li>
                            <li>
                                {/* <Link to="/" className="btn-primary">Enroll This Course</Link> */}
                            </li>
                        </ul>
                       </div>
                       <li>
                       <FaAngleRight className="icon"/>
                          Artificial Intelligence
                      </li>
                      <div className="sections-container">
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
        )
    }
}
