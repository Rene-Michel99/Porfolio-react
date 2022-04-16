import React from "react";
import CTA from './CTA';
import ME from '../../assets/me.png'
import HeaderSocials from "./HeaderSocials";
import './header.css';
import getLanguage from './langs';

const Header = (props) => {
    const lang = getLanguage(props.lang);
    return (
        <header id="home">
            <div className="container header__container">
                <h5>{lang.greetings}</h5>
                <h1>{lang.name}</h1>
                <h5 className="text-light">{lang.cargo}</h5>
                <CTA />
                <HeaderSocials />

                <div className="me">
                    <img src={ME} alt="me" />
                </div>

                <a href="#contact" className="scroll__down">{lang.scroll}</a>
            </div>
        </header>
    )
}

export default Header;