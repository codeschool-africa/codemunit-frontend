import React from "react"
import { Link } from 'react-router-dom'

const Post = ({property}) => {
    const { picture} = property;
    return (
        <article>
            <div className="post-description">
                <h2>{property.title}</h2>
                <small>by {property.author}, {property.author_title}</small>
                <p>
                    {property.subdescription}
                </p>
                <Link to="/blog/post">Read the story</Link>
            </div>
            <div className="post-image">
                <img src={picture} alt="post"/>
            </div>
        </article>
    )
}

export default Post;