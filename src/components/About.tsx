import { FunctionComponent, useState } from "react";
import '../css/about.css'
import { NavLink } from "react-router-dom";
import { useLanguage } from "./LanguageContext";

interface AboutProps {

}

const About: FunctionComponent<AboutProps> = () => {
    const englishParagraph = <p>
        <b></b>
        Hi! I'm Paula... It's a pleasure to have you here :) <br />
        The first thing you should know about me is that writing is not only my job, it’s also one of my greatest passions. <br /> <br />
        With three years of copywriting experience, I've had the privilege to work with international companies such as the Brazilian language school, <b>Fluency Academy</b>, and globally recognized brands including <b>NEUTROGENA®</b>, <b>Siempre Libre</b> and <b>JOHNSON’S® Baby</b>. <br /> <br />
        My words have resonated with audiences across every corner of Latin America and I dream that they will reach many other places around the world. Therefore, one of my favorite things is learning languages ​​and connecting with people from different cultures. <br /> <br />
        I invite you to <b>explore my portfolio</b> and discover the services I offer. Feel free to reach out,<b> hopefully we’ll be working together very soon!</b> <br /><br />
    </p>
    const spanishParagraph = <p>
        ¡Hola¡ Soy Paula… es un gusto tenerte aquí :)<br />
        Lo primero que debes saber sobre mi es que escribir no solamente es mi oficio, es también una de mis más grandes pasiones.<br /><br />
        En tres años de experiencia como redactora publicitaria, he tenido el privilegio de trabajar  en empresas internacionales como la escuela de idiomas brasileña <b>Fluency Academy</b> y también marcas reconocidas mundialmente como <b>NEUTROGENA®</b>, <b>Siempre Libre</b> y <b>JOHNSON’S® Baby</b>.<br /><br />
        Mis textos han llegado a todos los rincones de América Latina y sueño con que lleguen a muchos otros lugares alrededor del mundo. Por eso, una de mis cosas favoritas es aprender idiomas y conectar con personas de diferentes culturas.<br /><br />
        Te invito a <b>explorar mi portafolio</b> y descubrir los servicios que ofrezco. No dudes en ponerte en contacto conmigo <b>¡ojalá podamos trabajar juntos muy pronto!</b> <br /><br />
    </p>


    const { language } = useLanguage();
    const [selectedParagraph, setSelectedParagraph] = useState(language === 'en' ? 'englishParagraph' : 'spanishParagraph');

    const handleLanguageChange = (lang: string) => {
        setSelectedParagraph(lang === 'en' ? 'englishParagraph' : 'spanishParagraph');
    };

    return (
        <div className="container">
            <div className="about">
                <div className="navbar row">
                    <nav className="navbar navbar-expand-lg">
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mb-2 mb-lg-0 mx-auto">
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
                <div className="row info mt-5 w-75">
                    <div className="col-8">
                        {language === 'en' && englishParagraph}
                        {language !== 'en' && spanishParagraph}
                    </div>
                    <div className="col-4">
                        {language === 'en' && <img src="/Profile-English.png" alt="Me" />}
                        {language !== 'en' && <img src="/Profile-Spanish.png" alt="Yo" />}
                    </div>
                </div>
                <div className="social-icons-about mt-5">
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
}

export default About;