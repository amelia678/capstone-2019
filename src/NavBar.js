import React from 'react';
import {
    Link
} from 'react-router-dom'

const NavBar = (props) => {
    return (
        <div className="navBar">
            <ul className="nav nav-tabs">
                <li role="presentation" className="active"><a href="#">Login/Register</a></li>
                <li role="presentation"><Link to="/home">Search</Link></li>
                <li role="presentation"><Link to="/profile">My Profile</Link></li>
            </ul>
        </div>
    )
}

export default NavBar;