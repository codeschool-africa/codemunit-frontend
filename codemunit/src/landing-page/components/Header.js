import React from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav'

export default function Header() {
    return (
        <header>
            <div className="bg-color">
                <div className="container">
                    <Nav />
                    <div className="hero">
                        <h1>Lorem Ipsum</h1>
                        <div className='intro'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo itaque, vero est quo at, sit corporis, iusto rem soluta impedit illo! Est, sed ad doloremque hic voluptates iusto dignissimos voluptate!
                        </div>
                        <div className="btn">
                            <Link to='/' className='btn-primary'>Hire</Link>
                            <Link to='/' className='btn-primary'>Join Now</Link>
                        </div>
                        <div className="menu">
                            {/* <span>&gt;</span>
                            <div className="nav-links">

                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
