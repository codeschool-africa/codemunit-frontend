import React, { Component } from "react";
import Brain from "../../images/brain.png";
import { Link } from "react-router-dom";
import { FaAngleDown, FaAngleRight } from "react-icons/all";
import sections from "../../data/sections";

export default class CarrierPath extends Component {
  constructor(props) {
    super();
    this.state = {
      properties: sections.properties,
      property: sections.properties[0],
      isWeb: true,
      isMobile: false,
      isUi: false,
      isDataScience: false,
      isAI: false,
    };
  }

  showSection1 = () => {
    this.setState({isWeb:!this.state.isWeb});
    this.setState({isMobile:false});
    this.setState({isUi:false});
    this.setState({isDataScience:false});
    this.setState({isAI:false});
    const newIndex = 0;
    this.setState ({
      property: sections.properties[newIndex]
   })
  };
  showSection2 = () => {
    this.setState({isUi:!this.state.isUi});
    this.setState({isWeb:false});
    this.setState({isMobile:false});
    this.setState({isDataScience:false});
    this.setState({isAI:false});
    const newIndex = 2;
    this.setState ({
      property: sections.properties[newIndex]
    })
  };
  showSection3 = () => {
    this.setState({isMobile:!this.state.isMobile});
    this.setState({isWeb:false});
    this.setState({isUi:false});
    this.setState({isDataScience:false});
    this.setState({isAI:false});
    const newIndex = 1;
    this.setState ({
      property: sections.properties[newIndex]
    })
  };
  showSection4 = () => {
    this.setState({isDataScience:!this.state.isDataScience});
    this.setState({isWeb:false});
    this.setState({isUi:false});
    this.setState({isMobile:false});
    this.setState({isAI:false});
    const newIndex = 3;
    this.setState ({
      property: sections.properties[newIndex]
    })
  };
  showSection5 = () => {
    this.setState({isAI:!this.state.isAI});
    this.setState({isWeb:false});
    this.setState({isUi:false});
    this.setState({isDataScience:false});
    this.setState({isMobile:false});
    const newIndex = 4;
    this.setState ({
      property: sections.properties[newIndex]
    })
  };

  render() {
    const { properties, property} = this.state;
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
                   {/* {properties.map(property => (
                    <li
                    key={property.index}
                    className={
                      this.state.isOpen ? `active-${property.index}` : ""
                    }
                    property={property}
                    onClick={() => this.showSections()}
                  >
                    <FaAngleRight className="icon" />
                    {property.title}
                  </li>
                   ))} */}
                   <li onClick={() => this.showSection1()} className={this.state.isWeb?"active":""}><FaAngleRight className="icon"/>Full stack Web Development</li>
                   <li onClick={() => this.showSection2()} className={this.state.isUi?"active":""}><FaAngleRight className="icon"/>UI/UX Design</li>
                   <li onClick={() => this.showSection3()} className={this.state.isMobile?"active":""}><FaAngleRight className="icon"/>Mobile App Development</li>
                   <li onClick={() => this.showSection4()} className={this.state.isDataScience?"active":""}><FaAngleRight className="icon"/>Data Science</li>
                   <li onClick={() => this.showSection5()} className={this.state.isAI?"active":""}><FaAngleRight className="icon"/>Artificial Intelligence</li>
                </ul>
              </div>
              <div className="sections">
                <ul>
                    <li key={property.index} property={property}>
                        {properties[property.index].sections.topics}
                      </li>
                </ul>
              </div>
            </section>
          </article>
        </div>
        <div className="after" />
      </div>
    );
  }
}
