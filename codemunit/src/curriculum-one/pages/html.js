import React, { useState, useEffect } from 'react'

//components
import { Link } from 'react-router-dom'

const Html = () =>  {
        return (
            <div className="main">
                <div className="bg-container">
                    <div className="bg-color">
                        <div className="title-container">
                            <h2>HTML </h2>
                            <h3>This course will help you to structure the webpage</h3>
                        </div>
                    </div>
                </div>
                <div className="main-container">
                   <div className="top-nav">
                       web-development / frontend web-development / <span>html</span>
                   </div>
                </div> 
            </div>
        )
}

export default Html;
