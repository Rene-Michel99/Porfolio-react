import React from "react";
import './about.css';
import ME from '../../assets/me.png';
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';
import getLanguage from './langs';

const About = (props) => {
    console.log(props)
    const lang = getLanguage(props.lang);
    console.log(lang)
    return (
        <section id="about">
            <h5>{lang.intro}</h5>
            <h2>{lang.about}</h2>
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
                            <h5>{lang.experience}</h5>
                            <small>{lang.expTime}</small>
                        </article>
                    </div>
                    <div className="about__cards">
                        <article className="about__card">
                            <FiUsers className="about__icon" />
                            <h5>{lang.users}</h5>
                            <small>{lang.usersQty}</small>
                        </article>
                    </div>
                    <div className="about__cards">
                        <article className="about__card">
                            <VscFolderLibrary className="about__icon" />
                            <h5>{lang.projects}</h5>
                            <small>{lang.projectsQty}</small>
                        </article>
                    </div>
                    <p>{lang.resume}</p>
                </div>
            </div>
        </section>
    )
}

export default About;