import React, { Component } from "react";
import { Link } from "react-router-dom";

import CarrierNews from "./CarrierNews";
import TechNews from "./TechNews";

export default class News extends Component {
  render() {
    return (
      <div className="blog-news">
        <div className="after"></div>
          <div className="container">
            <h1>News and resources</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium quibusdam molestiae temporibus, commodi repellat consectetur? Magni veniam laborum, eaque non commodi nam repellat laboriosam suscipit quibusdam accusamus adipisci voluptatibus velit!</p>
            <Link to="/blog">View all stories</Link>
            <input type="radio" name="n" id="n1" defaultChecked />
            <input type="radio" name="n" id="n2" />
            <div className="news-header">
              <label htmlFor="n1" className="carrier-news">
                Carrier
              </label>
              <label htmlFor="n2" className="technology-news">
                Technology
              </label>
            </div>
            <div className="news-container">
              <CarrierNews />
              <TechNews />
            </div>
          </div>
      </div>
    );
  }
}
