import React, { Component } from 'react'
import "../styles/dashboard/style.css"

//pages
import Sidebar from "./components/Sidebar"
import Main from "./components/Main"

export default class Dashboard extends Component {
    componentDidMount() {
        document.title = "Dashboard - Codemunit";
    }
    render() {
        return (
            <div className="dashboard dashboard-home">
                <Sidebar/>
                <Main/>
                <div className="aside-right">
                    this is another container to be aligned on the right hand side for additional features
                </div>
            </div>
        )
    }
}
