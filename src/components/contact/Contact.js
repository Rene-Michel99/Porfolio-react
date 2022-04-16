import React, {useRef} from "react";
import './contact.css';
import {MdOutlineEmail} from 'react-icons/md';
import {BsLinkedin} from "react-icons/bs";
import emailjs from 'emailjs-com';
import getLanguage from './langs';

const Contact = (props) => {
    const form = useRef();
    const lang = getLanguage(props.lang);

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_0eflbox', 'template_1nwptgc', form.current, 'a_jZ3yq47JWVZehFs')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

          e.target.reset();

          alert("Message sent!");
      };
    return (
        <section id="contact">
            <h5>{lang.intro}</h5>
            <h2>{lang.contact}</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <div className="contact__option">
                        <MdOutlineEmail className="contact__option-icon"/>
                        <h4>Email</h4>
                        <h5>renemichelsengineer@gmail.com</h5>
                        <a href="mailto:email@gmail.com">{lang.send}</a>
                    </div>
                    <div className="contact__option">
                        <BsLinkedin className="contact__option-icon"/>
                        <h4>Linkedin</h4>
                        <h5>Renê Michel</h5>
                        <a href="https://www.linkedin.com/in/rene-michel-santana-padilha/">{lang.send}</a>
                    </div>
                </div>

                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder={lang.tlFName} required/>
                    <input type="email" name="email" placeholder={lang.tlEmail} required/>
                    <textarea name="message" rows="7" placeholder={lang.tlMessage} required/>
                    <button type="submit" className="btn btn-primary">{lang.send}</button>
                </form>
            </div>
        </section>
    )
}

export default Contact;