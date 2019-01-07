import React from 'react';
import {
    Link
} from 'react-router-dom'

const NavBar = (props) => {
    return (
        <div className="navBar ">
            <ul className="">
                <li  className=""><Link to="/register">Register</Link></li>
                <li  className=""><Link to="/login">Login</Link></li>
                <li className=""><Link to="/home">Search</Link></li>
                <li className="" ><Link to="/profile">My Profile</Link></li>
            </ul>
        </div>
    )
}

export default NavBar;