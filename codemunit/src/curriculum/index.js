import React, { Component } from 'react'
import Header from "./components/Header"
import Main from "./components/Main"
import "../styles/curriculum/style.css"

export default class Curriculum extends Component {
    render() {
        return (
            <div className="curriculum-container">
                <Header/>
                <Main/>
            </div>
        )
    }
}
