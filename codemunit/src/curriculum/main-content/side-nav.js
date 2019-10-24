import React, { Component } from 'react'
import { FaAngleRight } from "react-icons/all"

export default class SideNav extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                       <FaAngleRight/> Full stack web development
                    </li>
                    <li>
                        <FaAngleRight /> UI/UX Design
                    </li>
                    <li>
                        <FaAngleRight /> Mobile App Development
                    </li>
                    <li>
                        <FaAngleRight /> Data Science
                    </li>
                    <li>
                        <FaAngleRight /> Artificial Intelligence
                    </li>
                </ul>
            </div>
        )
    }
}
