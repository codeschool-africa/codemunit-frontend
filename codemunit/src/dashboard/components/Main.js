import React from 'react'
import { Link } from "react-router-dom"

export default function Main() {
    return (
        <div className="main-container">
            This is the main container of the dashboard. <br/>
            <Link to="/">Go back to home page</Link>
        </div>
    )
}
