import React, { Component } from 'react'
import { Link } from "react-router-dom"

import { FaAngleDown, FaAngleRight } from "react-icons/all";

export default class MobileCurriculum extends Component {
    render() {
        return (
            <section className="description mobile-curriculum">
              <div className="syllabuses">
                  <ul>
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
