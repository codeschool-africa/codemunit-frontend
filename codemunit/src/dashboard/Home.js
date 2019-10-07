import React, { Component } from 'react'

export default class Dashboard extends Component {
    componentDidMount() {
        document.title = "Dashboard - Codemunit";
    }
    render() {
        return (
            <div className="dashboard-home header">
                <aside>
                    This is navigation side bar
                </aside>
                <div className="main-container">
                    This is the main container of the dashboard.
                </div>
                <div className="aside-right">
                    this is another container to be aligned on the right hand side for additional features
                </div>
            </div>
        )
    }
}
