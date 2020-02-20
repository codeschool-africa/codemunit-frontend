import React, { useState } from "react";
import { Link } from "react-router-dom";

const Curriculum = () => {
  const [courses] = useState([
    {
      index: 1,
      className: "course",
      title: "Introduction to Programming",
      content: "Lorem ipsum dolor, sit amet consectetur",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ar quo molestisoluta veniam cum vero  ",
      link: "introduction-to-programming",
      btn: "Explore"
    },
    {
      index: 2,
      className: "course",
      title: "Frontend Web Development",
      content: "html, css, javascript, react, angular",
      description: "quae eum soluta veniam cum vero officia asperiores. Minima nesciunt placeat accusantium veritatis veniam alias",
      link: "frontend-web-development",
      btn: "Explore"
    },
    {
      index: 3,
      className: "course",
      title: "Backend Web Development",
      content: "nodejs, express, mongodb",
      description: "quo molestias quae eum soluta veniam cum vero officia asperiores. Minima nesciunt placeat accusantium veritatis veniam ratione cum alias",
      link: "backend-web-development",
      btn: "Explore"
    },
    {
      index: 4,
      className: "course",
      title: "UI/UX Design",
      content: "html, css, javascript, react, angular",
      description: "Lore quae eumnesciunt placeat accusantium veritatis veniam ratione cum alias",
      link: "ui-ux-design",
      btn: "Explore"
    },
    {
      index: 5,
      className: "course",
      title: "Mobile APP Development",
      content: "React Native, xml, java, flutter",
      description: "veniam cum vero officia asperiores. Minima veritatis veniam ratione cum alias",
      link: "mobile-app-development",
      btn: "Explore"
    },
    {
      index: 6,
      className: "more-btn",
      link: "curriculum",
      btn: "View more"
    }
  ]);
  return (
    <article className='curriculum-section'>
      <div className='container'>
        <h1 className='header'>Choose your path and start your journey</h1>
        <div className='curriculum-showcase'>
          {courses.map((item, index) => {
            return (
              <section className={`${item.className}`} key={item.index}>
                <div className='content'>
                  <span className='illustrator'></span>
                  <h2>{item.title}</h2>
                  <span className='course__content'>{item.content}</span>
                  <p className='course__description'>{item.description}</p>
                  <Link className='btn btn-primary'>{item.btn}</Link>
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </article>
  );
};

export default Curriculum;
