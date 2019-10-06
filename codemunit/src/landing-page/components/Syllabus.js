import React from "react"

const Syllabus = ({properties, property}) => {
    const { index } = property;
    return (
        <div className="syllabuses">
            <ul>
                {properties.map(property => (
                <li key={property.index} property={property}>
                    {property.title}
                </li>
                ))}
            </ul>
        </div>
    )
}

export default Syllabus;