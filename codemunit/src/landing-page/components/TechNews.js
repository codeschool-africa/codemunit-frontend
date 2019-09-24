import React, { Component } from 'react'

import { FaAngleLeft, FaAngleRight} from 'react-icons/all'
import Techposts from "../../data/Techposts"
import Post from "./Post"

export default class TechNews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            properties: Techposts.properties,
            property: Techposts.properties[2]
        }
    }

     prevBtn = () => {
        const newIndex = this.state.property.id-1;
        if (newIndex >= 0) {
            this.setState ({
                property: Techposts.properties[newIndex]
            })
        } else {
            this.setState ({
                property: Techposts.properties[Techposts.properties.length-1]
            })
        }
    }

    nextBtn = () => {
        const newIndex = this.state.property.id+1;
        if (newIndex <= Techposts.properties.length-1) {
            this.setState ({
                property: Techposts.properties[newIndex]
            })
        } else {
            this.setState ({
                property: Techposts.properties[0]
            })
        }
    }

    render() {
        const {properties,
             property
            } = this.state;
        return (
            <div className="technology-news-showcase news"
                // style={{
                //     "transform":`translateX(-${property.id*(100/properties.length)}%)`
                // }}
            >
                <div className="arrows">
                    <div className="circle circle-left" onClick={() => this.prevBtn()}><FaAngleLeft/></div>
                    <div className="circle circle-right" onClick={() => this.nextBtn()}><FaAngleRight/></div>
                </div>
                <div className="showcase"
                    style={{
                        "transform":`translateX(-${property.id*(100/properties.length)}%)`
                    }}
                >
                    {properties.map( property =>
                            <Post
                            key = {property.id}
                            property={property}/>
                    )}
                </div>
            </div>
        )
    }
}
