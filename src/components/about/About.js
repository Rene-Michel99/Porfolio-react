import React from "react";
import './about.css';
import ME from '../../assets/me.png';
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';

const About = () => {
    return (
        <section id="about">
            <h5>Get To Known Projects</h5>
            <h2>About Me</h2>
            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt=""/>
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FaAward className="about__icon" />
                            <h5>Experience</h5>
                            <small>3+ Years Working</small>
                        </article>
                    </div>
                    <div className="about__cards">
                        <article className="about__card">
                            <FiUsers className="about__icon" />
                            <h5>Experience</h5>
                            <small>3+ Years Working</small>
                        </article>
                    </div>
                    <div className="about__cards">
                        <article className="about__card">
                            <VscFolderLibrary className="about__icon" />
                            <h5>Experience</h5>
                            <small>3+ Years Working</small>
                        </article>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis orci vitae hendrerit consectetur. Phasellus porttitor sapien a vestibulum efficitur. Proin vel nunc fermentum, vestibulum justo quis, consequat diam. Nunc eu mattis augue. Praesent fermentum rhoncus dictum. Morbi risus massa, sagittis non mollis et, consectetur fermentum nisi. 
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About;