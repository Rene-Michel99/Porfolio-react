import React from "react";
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai';
import {BiBook, BiMessageSquareDetail} from 'react-icons/bi';
import './nav.css';
import {useState} from 'react';
//import {RiServiceLine} from 'react-icons/ri';

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#');
    return (
        <nav>
            <a href="#intro" className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
            <a
                href="#about"
                onClick={() => setActiveNav('#about')}
                className={activeNav === '#about' ? 'active' : ''}
            ><AiOutlineUser/></a>
            <a
                href="#experience"
                onClick={() => setActiveNav('#experience')}
                className={activeNav === '#experience' ? 'active' : ''}
                ><BiBook/></a>
            <a
                href="#contact"
                onClick={() => setActiveNav('#contact')}
                className={activeNav === '#contact' ? 'active' : ''}
                ><BiMessageSquareDetail/></a>
        </nav>
    )
}

export default Nav;