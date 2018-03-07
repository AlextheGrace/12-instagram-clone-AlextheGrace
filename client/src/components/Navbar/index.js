import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => (
    <nav>
        <h3>instamam</h3>
        <ul>
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/profile">Profile</Link>
            </li>
            <li>
            <Link to="/explore">Explore</Link>
            </li>
            <li>
            <Link to="/signin">Signin</Link>
            </li>
            <li>
            <Link to="/signup">Signup</Link>
            </li>
        </ul>
    </nav>
)

export default Navbar;