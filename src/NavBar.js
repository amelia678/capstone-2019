import React from 'react';
import {
    Link
} from 'react-router-dom'

const NavBar = (props) => {
    return (
        <div className="navBar">
            <ul>
                <li>Login/Register</li>
                <li><Link to="/home">Search</Link></li>
                <li><Link to="/profile">My Profile</Link></li>
            </ul>
        </div>
    )
}

export default NavBar;