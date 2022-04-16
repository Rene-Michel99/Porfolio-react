import React from "react";
import './experience.css';
import {BsPatchCheckFill} from 'react-icons/bs';
import getLanguage from './langs';

const Experience = (props) => {
    const lang = getLanguage(props.lang);
    return (
        <section id="experience">
            <h5>{lang.intro}</h5>
            <h2>{lang.experience}</h2>

            <div className="container experience__container">
                <div className="experience_frontend">
                    <h3>{lang.frontend}</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>HTML</h4>
                                <small className="text-light">{lang.experienced}</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>CSS</h4>
                                <small className="text-light">{lang.experienced}</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>Javascript</h4>
                                <small className="text-light">{lang.experienced}</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>Bootstrap</h4>
                                <small className="text-light">{lang.experienced}</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>React</h4>
                                <small className="text-light">{lang.experienced}</small>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="experience_backend">
                    <h3>{lang.backend}</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>Python</h4>
                                <small className="text-light">{lang.experienced}</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>Node JS</h4>
                                <small className="text-light">{lang.experienced}</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>C#</h4>
                                <small className="text-light">{lang.experienced}</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>PHP</h4>
                                <small className="text-light">{lang.experienced}</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>MongoDB</h4>
                                <small className="text-light">{lang.experienced}</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>MySQL</h4>
                                <small className="text-light">{lang.experienced}</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>PostgreSQL</h4>
                                <small className="text-light">{lang.intermediate}</small>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="experience_data-science">
                    <h3>{lang.dataScience}</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>Tensorflow</h4>
                                <small className="text-light">{lang.experienced}</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>sklearn</h4>
                                <small className="text-light">{lang.experienced}</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>Pandas</h4>
                                <small className="text-light">{lang.experienced}</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>Numpy</h4>
                                <small className="text-light">{lang.experienced}</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>OpenCV</h4>
                                <small className="text-light">{lang.experienced}</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>PyTorch</h4>
                                <small className="text-light">{lang.intermediate}</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience;