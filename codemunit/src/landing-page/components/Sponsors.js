import React, { Component } from "react"
// import {FaAngleLeft,FaAngleRight} from "react-icons/all"
import data from '../../data/sponsorData'
import Card from '../components/Card'
import Arrows from './Arrows'

export default class Sponsors extends Component {
    constructor(props) {
        super(props);
        this.state = {
            properties: data.properties,
            property: data.properties[1]
        }
    }

    // prevBtn = () => {
    //     const newIndex = this.state.property.index-1;
    //     if (newIndex >= 0) {
    //         this.setState ({
    //             property: data.properties[newIndex]
    //         })
    //     } else {
    //         this.setState ({
    //             property: data.properties[data.properties.length-1]
    //         })
    //     }
    // }

    // nextBtn = () => {
    //     const newIndex = this.state.property.index+1;
    //     if (newIndex <= data.properties.length-1) {
    //         this.setState ({
    //             property: data.properties[newIndex]
    //         })
    //     } else {
    //         this.setState ({
    //             property: data.properties[0]
    //         })
    //     }
        
    // }

    render() {
        const {properties, property} = this.state;
        return (
            <div id='sponsors' className="sponsors">
                <div className="container">
                    <h1>Sponsors</h1>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium quibusdam molestiae temporibus, commodi repellat consectetur? Magni veniam laborum, eaque non commodi nam repellat laboriosam suscipit quibusdam accusamus adipisci voluptatibus velit!
                    </p>
                    <div className="wrapper">
                    <   Arrows/>
                        <div className={`sponsor-showcase active-slide-${property.index}`}>
                            <div className="slider-wrapper" 
                            // style={{"transform":`translateX(-${property.index*(100/properties.length)}%)`}}
                            >
                                {properties.map( property =>  <Card key = {property.index} property={property}/>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
