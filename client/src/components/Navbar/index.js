import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import home from  './home_instamam.png';
import profile from  './profile2_instamam.png';
import explore from './explore-instamam.png';


const Navbar = () => (
    <nav>
        <h3>instamam</h3>
            <ul>
                <li>
                <Link to="/"><img className="logos" src={home}/></Link>
                </li>
                <li>
                <Link to="/profile"><img className="logos" src={profile}/></Link>
                </li>
                <li>
                <Link to="/explore"><img className="logos" src={explore}/></Link>
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