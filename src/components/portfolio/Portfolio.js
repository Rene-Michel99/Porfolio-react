import React from "react";
import './portfolio.css';
import getLanguage from './langs';
import IMG1 from '../../assets/hand-signals.jpg';
import IMG2 from '../../assets/webserver.png';
import IMG3 from '../../assets/minerva_icon_final.png';
import IMG4 from '../../assets/battleship.png';
import IMG5 from '../../assets/petshop.jpg';
import IMG6 from '../../assets/dpll.png';

const data = [
    {
        id: 1,
        image: IMG1,
        title: 0,
        github: 'https://github.com/Rene-Michel99/Hand-Sign-Detector',
        demo: ''
    },
    {
        id: 2,
        image: IMG2,
        title: 1,
        github: 'https://github.com/Rene-Michel99/Web-Server',
        demo: ''
    },
    {
        id: 3,
        image: IMG3,
        title: 2,
        github: 'https://github.com/Rene-Michel99/Minerva',
        demo: ''
    },
    {
        id: 4,
        image: IMG4,
        title: 3,
        github: 'https://github.com/Rene-Michel99/Batalha-Naval-com-bot',
        demo: ''
    },
    {
        id: 5,
        image: IMG5,
        title: 4,
        github: 'https://github.com/Rene-Michel99/Pet-shop-nodejs',
        demo: ''
    },
    {
        id: 6,
        image: IMG6,
        title: 5,
        github: 'https://github.com/Rene-Michel99/Algoritmo-DPLL-em-python',
        demo: ''
    }
]

const Portfolio = (props) => {
    const lang = getLanguage(props.lang);
    return (
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {
                    data.map(({id, image, title, github, demo}) => {
                        return (
                            <article key={id} className="portfolio__item">
                                <div className="portfolio__item-image">
                                    <img src={image} alt={title} />
                                </div>
                                <h3>{lang[title]}</h3>
                                <div className="portfolio__item-cta">
                                    <a href={github} className="btn" target="_blank" rel="noopener noreferrer">Github</a>
                                    { demo && <a href="http://github.com" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Demo</a> }
                                </div>
                            </article>
                        )
                    })
                }
                
            </div>
        </section>
    )
}

export default Portfolio;