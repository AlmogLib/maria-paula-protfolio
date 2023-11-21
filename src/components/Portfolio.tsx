import { FunctionComponent, useState } from "react";
import { useLanguage } from "./LanguageContext";
import { NavLink } from "react-router-dom";
import '../css/protfolio.css'
interface PortfolioProps {

}

const Portfolio: FunctionComponent<PortfolioProps> = () => {
    const { language } = useLanguage();
    const [selectedParagraph, setSelectedParagraph] = useState(
        language === 'en' ? 'englishServices' : 'spanishServices'
    );

    const handleLanguageChange = (lang: string) => {
        setSelectedParagraph(lang === 'en' ? 'englishAbout' : 'spanishAbout');
    };

    return (
        <div className="container">
            <div className="protfolio">
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
                                        {language === 'en' ? 'About' : 'Acerca de'}
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

                <div className="protfolioForm justify-content-around align-items-center mb-5">
                    <h3 className="head mb-3">{language === 'en' ? 'I invite you to explore my portfolio and discover the services I offer.' : 'Te invito a explorar mi portafolio y descubrir los servicios que ofrezco.'}</h3>
                    <h4 className="head mb-4"> {language === 'en' ? 'Feel free to reach out, hopefully we’ll be working together very soon!' : 'No dudes en comunicarte con nosotros, ¡esperamos que trabajemos juntos muy pronto!'}</h4>
                    <div className="row logoRow mt-4">
                        <div className="col logo">
                            <NavLink className="nav-link" to="/fluencyAcademy">
                                <img src="/Fluency-Academy-New-Logo.png" alt="Fluency-Academy" />
                            </NavLink>
                        </div>
                        <div className="col logo">
                            <NavLink className="nav-link" to="/neutrogena">
                                <img src="/Neutrogena.png" alt="Neutrogena" />
                            </NavLink>
                        </div>
                    </div>
                    <div className="row logoRow">
                        <div className="col logo">
                            <NavLink className="nav-link" to="/siempreLibre">
                                <img src="/Siempre-Libre.jpeg" alt="Siempre-Libre" />
                            </NavLink>
                        </div>
                        <div className="col logo">
                            <NavLink className="nav-link" to="/johnsonsBaby">
                                <img src="/Johnsons-Baby-Emblem.png" alt="Johnsons-Baby" />
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;