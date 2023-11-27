import React, { useState } from 'react';
import '../css/contact.css';
import { NavLink } from 'react-router-dom';
import { useLanguage } from './LanguageContext';
import { useForm, ValidationError } from '@formspree/react';

interface ContactProps { }

const Contact: React.FunctionComponent<ContactProps> = () => {
    // const ContactForm = () => {
    //     const [state, handleSubmit] = useForm("xvojjkww");
    //     if (state.succeeded) {
    //         return <p>Thanks for joining!</p>;
    //     }
    // };


    const { language } = useLanguage();
    const [selectedParagraph, setSelectedParagraph] = useState(
        language === 'en' ? 'englishParagraph' : 'spanishParagraph'
    );

    const handleLanguageChange = (lang: string) => {
        setSelectedParagraph(lang === 'en' ? 'englishAbout' : 'spanishAbout');
    };

    return (
        <div className="container">
            <div className="contact">
                <div className="navbar row">
                    <nav className="navbar navbar-expand-lg">
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mb-lg-0 mx-auto">
                                <li className="nav-item p-4">
                                    <NavLink className="nav-link" to="/">
                                        {language === 'en' ? 'Welcome' : 'Bienvenido'}
                                    </NavLink>
                                </li>
                                <li className="nav-item p-4">
                                    <NavLink className="nav-link" to="/about">
                                        {language === 'en' ? 'About' : 'Sobre Mi'}
                                    </NavLink>
                                </li>
                                <li className="nav-item p-4">
                                    <NavLink className="nav-link" to="/protfolio">
                                        {language === 'en' ? 'Portfolio' : 'Portafolio'}
                                    </NavLink>
                                </li>
                                <li className="nav-item p-4">
                                    <NavLink className="nav-link" to="/services">
                                        {language === 'en' ? 'Services' : 'Servicios'}
                                    </NavLink>
                                </li>
                                <li className="nav-item p-4">
                                    <NavLink className="nav-link" to="/contact">
                                        {language === 'en' ? 'Contact' : 'Contacto'}
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div className="row contactForm justify-content-around align-items-center">
                    <div className="col-md-6 p-5">
                        <form action="https://formspree.io/lieber.almog@gmail.com" method="POST">
                            <b> <h1 className="mb-5">{language === 'en' ? 'Get In Touch' : 'Contacto'}</h1></b>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label visually-hidden">
                                    {language === 'en' ? 'Name' : 'Nombre'}
                                </label>
                                <div className="input-group mb-3">
                                    <input type="text" name="name" className="form-control rounded-pill" id="name" placeholder={language === 'en' ? 'Name' : 'Nombre'} />
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label visually-hidden">
                                    {language === 'en' ? 'Email' : 'Correo Electrónico'}
                                </label>
                                <div className="input-group mb-3">
                                    <input type="email" name="email" className="form-control rounded-pill" id="email" placeholder={language === 'en' ? 'Email' : 'Correo Electrónico'} />
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message" className="form-label visually-hidden">
                                    {language === 'en' ? 'Message' : 'Mensaje'}
                                </label>
                                <div className="input-group mb-3">
                                    <textarea name="message" className="form-control rounded" id="message" rows={3} placeholder={language === 'en' ? 'Message' : 'Mensaje'}></textarea>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary rounded-pill">
                                {language === 'en' ? 'Submit' : 'Enviar'}
                            </button>
                        </form>
                    </div>
                    {/* <div className="col-md-5">
                        <img src="/ContactMe.png" alt="ContactMe" />
                    </div> */}
                </div>
                <div className="social-icons mb-5">
                    <a href="https://api.whatsapp.com/send?phone=5511914894932" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-whatsapp"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/maria-paula-rojas-leal/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin"></i>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Contact;
