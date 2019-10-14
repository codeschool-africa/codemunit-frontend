import React, { Component } from 'react'
import Header from "./components/Header"
import "../styles/curriculum/style.css"

export default class Curriculum extends Component {
    render() {
        return (
            <div className="curriculum-container">
                <Header/>
            </div>
        )
    }
}
