import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import home from  './img/home_instamam.png';
import profile from  './img/profile2_instamam.png';
import explore from './img/explore-instamam.png';
import upload from './img/camera-upload-instamam.png'


const Navbar = () => (
    <nav>
        <h3>instamam</h3>
            <ul>
                <li>
                <Link to="/"><img className="logos" src={home}/></Link>
                </li>
                <li>
                <Link to="/profile/"><img className="logos" src={profile}/></Link>
                </li>
                <li>
                <Link to="/upload"><img className="logos" src={upload}/></Link>
                </li>
                <li>
                <Link to="/explore"><img className="logos" src={explore}/></Link>
                </li>
                <li>
                <Link to="/signin">Signin</Link>
                </li>
            </ul>
    </nav>
)

export default Navbar;