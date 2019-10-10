import React, { Component } from 'react'
import { Link } from "react-router-dom"
import AOS from 'aos';
import 'aos/dist/aos.css';

import { FaAngleDown, FaAngleRight } from "react-icons/all";

export default class MobileCurriculum extends Component {
    componentDidMount(){
        AOS.init({
          duration : 2000
        })
      }
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
                                <li>HTML & CSS</li>
                                <li>Javascript</li>
                                <li>HTML & CSS</li>
                                <li>Javascript</li>
                                <li>
                                    <Link to="/" className="btn-primary">Enroll this course</Link>
                                </li>
                            </ul>
                        </div>
                      <li>
                         <FaAngleRight className="icon"/>
                          Full Stack Web Development
                      </li>
                      <div className="sections-container">
                        <ul>
                            <li>HTML & CSS</li>
                            <li>Javascript</li>
                            <li>HTML & CSS</li>
                            <li>Javascript</li>
                            <li>HTML & CSS</li>
                            <li>Javascript</li>
                            <li>
                                <Link to="/" className="btn-primary">Enroll this course</Link>
                            </li>
                        </ul>
                       </div>
                       <li>
                       <FaAngleRight className="icon"/>
                          Full Stack Web Development
                      </li>
                      <div className="sections-container">
                        <ul>
                            <li>HTML & CSS</li>
                            <li>Javascript</li>
                            <li>
                                <Link to="/" className="btn-primary">Enroll this course</Link>
                            </li>
                        </ul>
                       </div>
                       <li>
                       <FaAngleRight className="icon"/>
                          Full Stack Web Development
                      </li>
                      <div className="sections-container">
                        <ul>
                            <li>HTML & CSS</li>
                            <li>Javascript</li>
                            <li>
                                <Link to="/" className="btn-primary">Enroll this course</Link>
                            </li>
                        </ul>
                       </div>
                       <li>
                       <FaAngleRight className="icon"/>
                          Full Stack Web Development
                      </li>
                      <div className="sections-container">
                        <ul>
                            <li>HTML & CSS</li>
                            <li>Javascript</li>
                            <li>
                                <Link to="/" className="btn-primary">Enroll this course</Link>
                            </li>
                        </ul>
                       </div>
                  </ul>
              </div>
            </section>
        )
    }
}
