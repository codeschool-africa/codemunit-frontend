import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaArrowLeft } from "react-icons/all";

import img1 from "../../images/bg-image.jpg";
import tech from "../../images/tech.jpeg";
import tech1 from "../../images/tech1.png";
import tech2 from "../../images/bg-about.jpg";

const Post = ({ property }) => {
  return (
    <article>
      <div
        className='title__image'
        style={{
          backgroundImage: `url(${property.picture})`
        }}
      >
        <div className='bg-color'>
          <h2>{property.title}</h2>
        </div>
      </div>
      <div className='content'>
        <p>{property.subdescription}</p>
        <Link to={property.link} className='btn btn-primary'>
          Read The Story
        </Link>
      </div>
    </article>
  );
};

const Blog = () => {
  const [posts] = useState([
    {
      id: 0,
      title: "Official launch of kodemunit website",
      author: "Justin Peterson",
      author_title: "CTO of codemunit",
      subdescription:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus magni dicta earum sed architecto ad voluptatum",
      picture: img1,
      link: "/blog/post"
    },
    {
      id: 1,
      title: "Introducing Community Hub",
      author: "Benedict Steven",
      author_title: "CTO of codemunit",
      subdescription:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus magni dicta earum sed architecto ad voluptatum",
      picture: tech,
      link: "/blog/post"
    },
    {
      id: 2,
      title: "Code and create real world projects with kodemunit",
      author: "Justin Peterson",
      author_title: "CTO of codemunit",
      subdescription:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus magni dicta earum sed architecto ad voluptatum",
      picture: tech1,
      link: "/blog/post"
    },
    {
      id: 3,
      title:
        "Become a mentor, share ypur skills with students all over the world",
      author: "Justin Peterson",
      author_title: "CTO of codemunit",
      subdescription:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus magni dicta earum sed architecto ad voluptatum",
      picture: tech2,
      link: "/blog/post"
    }
  ]);

  return (
    <article className='blog'>
      <div className='container'>
        <h1 className='header'>News and resources</h1>
      </div>
      <div className='news-showcase'>
        <div className='arrows'>
          {/* <button className='arrow arrow-left'>
            <FaArrowLeft />
          </button>
          <button className='arrow arrow-right'>
            <FaArrowRight />
          </button> */}
        </div>
        {posts.map(post => (
          <Post key={post.id} property={post} />
        ))}
      </div>
    </article>
  );
};

export default Blog;
