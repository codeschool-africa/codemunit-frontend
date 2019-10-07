import React, { Component } from 'react'

export default class Dashboard extends Component {
    componentDidMount() {
        document.title = "Dashboard - Codemunit";
    }
    render() {
        return (
            <div className="dashboard-home header">
                <aside>
                    Hello
                </aside>
                <div className="main-container">
                    Hello from Dashboard
                </div>
                <div className="aside-right">
                    Hello
                </div>
            </div>
        )
    }
}
