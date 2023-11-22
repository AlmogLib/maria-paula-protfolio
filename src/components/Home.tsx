import { FunctionComponent } from "react";
import '../css/home.css';
import { NavLink } from "react-router-dom";
import { useLanguage } from "./LanguageContext";
interface HomeProps {

}

const Home: FunctionComponent<HomeProps> = () => {
    const { language } = useLanguage();

    return (
        <div className="containerHome">
            <div className="welcome">
                <div className="logo row justify-content-center align-items-center">
                    <div className="col-12 text-center mb-4">
                        <video height="500" controls={false} autoPlay muted>
                            <source src="logo_vid.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
                <div className="navbar row">
                    <nav className="navbar navbar-expand-lg">
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mb-2 mb-lg-0 mx-auto">
                                <li className="nav-item p-5">
                                    <NavLink className="nav-link" to="/about">
                                        {language === 'en' ? 'About' : 'Sobre Mi'}
                                    </NavLink>
                                </li>
                                <li className="nav-item p-5">
                                    <NavLink className="nav-link" to="/protfolio">
                                        {language === 'en' ? 'Portfolio' : 'Portafolio'}
                                    </NavLink>
                                </li>
                                <li className="nav-item p-5">
                                    <NavLink className="nav-link" to="/services">
                                        {language === 'en' ? 'Services' : 'Servicios'}
                                    </NavLink>
                                </li>
                                <li className="nav-item p-5">
                                    <NavLink className="nav-link" to="/contact">
                                        {language === 'en' ? 'Contact' : 'Contacto'}
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div className="social-icons-home mb-2">
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

export default Home;