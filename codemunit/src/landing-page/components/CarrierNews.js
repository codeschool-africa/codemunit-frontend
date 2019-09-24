import React, { Component } from 'react'
import { FaAngleLeft, FaAngleRight} from 'react-icons/all'
import Carrierposts from "../../data/Carrierposts"
import Post from "./Post"

export default class CarrierNews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            properties: Carrierposts.properties,
            property: Carrierposts.properties[0]
        }
    }

     prevBtn = () => {
        const newIndex = this.state.property.id-1;
        if (newIndex < 0) {
            this.setState ({
                property: Carrierposts.properties[Carrierposts.properties.length-1]
            })
        } else {
            this.setState ({
                property: Carrierposts.properties[newIndex]
            })
        }
    }

    nextBtn = () => {
        const newIndex = this.state.property.id+1;
        if (newIndex <= Carrierposts.properties.length-1) {
            this.setState ({
                property: Carrierposts.properties[newIndex]
            })
        } else {
            this.setState ({
                property: Carrierposts.properties[0]
            })
        }
    }

    render() {
        const {properties,
            property
        } = this.state;
        return (
            <div className="carrier-news-showcase news">
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
