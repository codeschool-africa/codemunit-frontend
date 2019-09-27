import React, { Component } from "react";
import Brain from "../../images/brain.png";
import { Link } from "react-router-dom";
import { FaAngleDown, FaAngleRight } from "react-icons/all";
import curriculum from "../../data/curriculum";

export default class CarrierPath extends Component {
  constructor(props) {
    super();
    this.state = {
      properties: curriculum.properties,
      property: curriculum.properties[0]
    };
  }
  render() {
    const { properties } = this.state;
    return (
      <div className="carrier-path">
        <div className="container">
          <div className="carrier-header">
            <h1>A world class Curriculum</h1>
            <p>
              Our curriculum focuses on helping you learn the most in-demand
              skills in software development so you can get a great job no
              matter where you are.
            </p>
          </div>
          <article>
            <section className="image">
              <img src={Brain} alt="brain network" />
            </section>
            <section className="description">
              <div className="syllabuses">
                <ul>
                  {properties.map(property => (
                    <li key={property.index} property={property} onClick={() => this.showSections()}>
                      <FaAngleRight className="icon"/> {property.title}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="sections">
                  {properties.map(property => (
                      <ul>
                        <li key={property.index} property={property}>
                            {property.sections.topics}
                        </li>
                        <Link to={property.link} key={property.index} className="btn-primary">Enroll this course</Link>
                    </ul>
                  ))}
              </div>
            </section>
          </article>
        </div>
        <div className="after" />
      </div>
    );
  }
}
