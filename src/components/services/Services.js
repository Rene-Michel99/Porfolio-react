import React from "react";
import './services.css';
import { BiCheck } from "react-icons/bi";
import getLanguage from './langs';

const Services = (props) => {
    const lang = getLanguage(props.lang);
    return (
        <section id="services">
            <h5>{lang.intro}</h5>
            <h2>{lang.services}</h2>

            <div className="container services__container">
                <article className="service">
                    <div className="service__head">
                        <h3>{lang.gameDev}</h3>
                    </div>
                    <ul className="service__list">
                        {
                            lang.gameDevServs.map((item) => {
                                return (
                                    <li>
                                        <BiCheck className="service__list-icon" />
                                        <p>{item}</p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </article>
                <article className="service">
                    <div className="service__head">
                        <h3>{lang.webDev}</h3>
                    </div>
                    <ul className="service__list">
                        {
                            lang.webDevServs.map((item) => {
                                return (
                                    <li>
                                        <BiCheck className="service__list-icon" />
                                        <p>{item}</p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </article>
                <article className="service">
                    <div className="service__head">
                        <h3>{lang.dataScience}</h3>
                    </div>
                    <ul className="service__list">
                        {
                            lang.dataScienceServs.map((item) => {
                                return (
                                    <li>
                                        <BiCheck className="service__list-icon" />
                                        <p>{item}</p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </article>
            </div>
        </section>
    )
}

export default Services;