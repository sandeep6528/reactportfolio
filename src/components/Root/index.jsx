import React from 'react'
import { Link,Outlet } from 'react-router-dom'
import "./nav.css"

const Root = () => {
  return (
    <div>


        <ul className='Navbar'>
            <li>
                <Link to="/">Home</Link>
            </li>

            <li>
                <Link to="/projects">Projects</Link>
            </li>

            <li>
                <Link to="/contact">Contact</Link>
            </li>

            <li>
                <Link to="/resume">Resume</Link>
            </li>
        </ul>
        <Outlet/>
    </div>
  )
}

export default Root 