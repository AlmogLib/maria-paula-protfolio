import { FunctionComponent, useState } from "react";
import { useLanguage } from "./LanguageContext";
import { NavLink } from "react-router-dom";
import '../css/services.css'

interface ServicesProps {

}

const Services: FunctionComponent<ServicesProps> = () => {
    const { language } = useLanguage();
    const [selectedParagraph, setSelectedParagraph] = useState(
        language === 'en' ? 'englishServices' : 'spanishServices'
    );

    const handleLanguageChange = (lang: string) => {
        setSelectedParagraph(lang === 'en' ? 'englishAbout' : 'spanishAbout');
    };

    return (
        <div className="container">
            <div className="services">
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
                                        {language === 'en' ? 'Protfolio' : 'Protafolio'}
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
                <div className="servicesForm justify-content-around align-items-center mb-5">
                    <div className="row servicesDetailsLeft">
                        <h3>{language === 'en' ? 'Social Media' : 'Redes Sociales'}</h3>
                        <ul style={{ listStyleType: "disc" }}>
                            <li>{language === 'en' ? 'Organic social media posts' : 'Publicaciones orgánicas para redes sociales'}</li>
                            <li>Hashtags</li>
                            <li>Captions</li>
                        </ul>
                    </div>
                    <div className="row servicesDetailsRight">
                        <h3>{language === 'en' ? 'Web Content Writing' : 'Redacción de Contenido Web'}</h3>
                        <ul style={{ listStyleType: "disc" }}>
                            <li>{language === 'en' ? 'Homepages' : 'Páginas de inicio'}</li>
                            <li>{language === 'en' ? 'Product pages' : 'Páginas de productos'}</li>
                            <li>E-books</li>
                            <li>Blogs</li>
                            <li>{language === 'en' ? 'SEO articles' : 'Artículos SEO'}</li>
                        </ul>
                    </div>
                    <div className="row servicesDetailsLeft">
                        <h3>{language === 'en' ? 'Advertising Content Writing' : 'Redacción de Contenido Publicitario'}</h3>
                        <ul style={{ listStyleType: "disc" }}>
                            <li>{language === 'en' ? 'Google Ads' : 'Anuncios de Google Ads'}</li>
                            <li>{language === 'en' ? 'Static and video ads for social media' : 'Anuncios para redes sociales estáticos y en vídeo'}</li>
                        </ul>
                    </div>
                    <div className="row servicesDetailsRight">
                        <h3>{language === 'en' ? 'Email Marketing' : 'Correo de propaganda'}</h3>
                        <ul style={{ listStyleType: "disc" }}>
                            <li>{language === 'en' ? 'Promotional emails' : 'Correos electrónicos promocionales'}</li>
                            <li>{language === 'en' ? 'Newsletters' : 'Boletines informativos (newsletters)'}</li>
                            <li>{language === 'en' ? 'Email marketing campaign sequences' : 'Secuencias de mailing para campañas de email marketing'}</li>
                        </ul>
                    </div>
                    <div className="row servicesDetailsLeft">
                        <h3>{language === 'en' ? 'Script Writing' : 'Redacción de Guiones'}</h3>
                        <ul style={{ listStyleType: "disc" }}>
                            <li>{language === 'en' ? 'Video scripts' : 'Guiones para videos'}</li>
                            <li>{language === 'en' ? 'Presentation scripts' : 'Guiones para presentaciones'}</li>
                            <li>{language === 'en' ? 'Podcasts and other audiovisual media scripts' : 'Podcasts y otros medios audiovisuales'}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Services;