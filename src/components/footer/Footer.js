import React from "react";
import "./footer.css";
import {BsLinkedin} from "react-icons/bs";
import {FaGithub} from "react-icons/fa";
import getLanguage from './langs';

const Footer = (props) => {
    const lang = getLanguage(props.lang);

    return (
        <footer>
            <a href="#home" className="footer__logo">Renê Michel</a>

            <ul className="permalinks">
                <li><a href="#home">{lang.home}</a></li>
                <li><a href="#about">{lang.about}</a></li>
                <li><a href="#experience">{lang.experience}</a></li>
                <li><a href="#services">{lang.services}</a></li>
                <li><a href="#contact">{lang.contact}</a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://www.linkedin.com/in/rene-michel-santana-padilha/"><BsLinkedin/></a>
                <a href="https://github.com/Rene-Michel99"><FaGithub/></a>
            </div>

            <div className="footer__copyright">
                <small>&copy; {lang.copyright}</small>
            </div>
        </footer>
    )
}

export default Footer;