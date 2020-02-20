import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaProjectDiagram,
  FaNetworkWired,
  FaServicestack,
  GoProject
} from "react-icons/all";

const Services = () => {
  const [services] = useState([
    {
      index: 0,
      icon: <FaNetworkWired className='service-icon' />,
      title: "Courses",
      subtitle: "Learn anywhere, anytime, at your own pace",
      description:
        "We offer free courses but one can opt to join premium membership to get more resources on the course.",
      link: "/blog/post_id?12345678"
    },
    {
      index: 1,
      icon: <FaProjectDiagram className='service-icon' />,
      title: "Projects",
      subtitle: "subservice 2",
      description: "description for service 2... a whole bunch of paragraph",
      link: "//blog/post_id?12345678"
    },
    {
      index: 2,
      icon: <FaServicestack className='service-icon' />,
      title: "Mentorship",
      subtitle: "subservice 3",
      description: "description for service 3... a whole bunch of paragraph",
      link: "/blog/post_id?12345678"
    },
    {
      index: 3,
      icon: <GoProject className='service-icon' />,
      title: "Community hub",
      subtitle: "subservice 4",
      description: "description for service 4... a whole bunch of paragraph",
      link: "//blog/post_id?12345678"
    }
  ]);
  return (
    <div className='services' id='services'>
      <div className='container'>
        <h1 className='header'>What you will get from us</h1>
        <div className='services-showcase'>
          {services.map((item, index) => {
            return (
              <article
                key={index}
                className="service"
              >
                <section className='front-face'>
                  {item.icon}
                  <h2>{item.title}</h2>
                </section>
                <section className='hovered-face'>
                  <h3>{item.subtitle}</h3>
                  <p>{item.description}</p>
                  <Link to={item.link}>Learn more</Link>
                </section>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
