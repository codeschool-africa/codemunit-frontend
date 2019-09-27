import React from "react"

const Card = ({property}) => {
    const {index, picture, alt} = property;
    return (
        <article id={`card-${index}`}>
            <img src={picture} alt={alt}/>
        </article>
    )
}

export default Card;