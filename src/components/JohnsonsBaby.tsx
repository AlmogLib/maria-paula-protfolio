import { FunctionComponent, useState } from "react";
import { useLanguage } from "./LanguageContext";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../css/brands.css'

interface JohnsonsBabyProps {

}

const JohnsonsBaby: FunctionComponent<JohnsonsBabyProps> = () => {
    const englishParagraph = <p>
        My job consisted of generating monthly organic content strategies that aligned with the brand's communication needs. <br />
        Together with the designers we developed concepts and creative pieces that sought to give relevance to the products and connect with the audience. <br /><br />

        <b>Languages ​​used:</b> Spanish, Argentine Spanish (dialect). <br /><br />
    </p>
    const spanishParagraph = <p>
        Mi trabajo consistió en generar estrategias mensuales de contenido orgánico que se alinearan con las necesidades de comunicación de la marca.  <br />
        Junto a los diseñadores desarrollamos conceptos y piezas creativas que buscaban dar relevancia a los productos y conectar con la audiencia.  <br /><br />

        <b>Idiomas empleados:</b> Español, Español Argentino (dialecto). <br /><br />
    </p>

    const { language } = useLanguage();
    const [selectedParagraph, setSelectedParagraph] = useState(language === 'en' ? 'englishParagraph' : 'spanishParagraph');
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const handleLanguageChange = (lang: string) => {
        setSelectedParagraph(lang === 'en' ? 'englishParagraph' : 'spanishParagraph');
    };

    const handleThumbnailClick = (index: number) => {
        setSelectedImageIndex(index);
    };

    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const thumbnails = [
        "/JOHNSONS/Copy-in/1.png",
        "/JOHNSONS/Copy-in/2.png",
        "/JOHNSONS/Copy-in/3.png",
        "/JOHNSONS/Copy-in/4.png",
    ];
    const thumbnails3 = [
        "/JOHNSONS/Copy-out/Captura-de-pantalla1.png",
        "/JOHNSONS/Copy-out/Captura-de-pantalla2.png",
    ];

    return (
        <div className="container">
            <div className="brand">
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
                <div className="johnsonsBabyForm mb-5">
                    {/* <h1 className="mb-4">JOHNSON’S® Baby - Argentina, Chile</h1> */}
                    <p className="infoP">
                        {language === 'en' && englishParagraph}
                        {language !== 'en' && spanishParagraph}
                    </p>
                    <h1 className="mt-5 mb-3">{language === 'en' ? 'Social media' : 'Redes sociales'}</h1>
                    <div className="row">
                        <div className="col-6">
                            <h3 className="mt-5 mb-4">Copy In</h3>
                            <Slider {...settings} initialSlide={selectedImageIndex}>
                                {thumbnails.map((thumbnail, index) => (
                                    <div key={index} onClick={() => handleThumbnailClick(index)}>
                                        <img src={thumbnail} alt={`Image ${index + 1}`} />
                                    </div>
                                ))}
                            </Slider>
                            <div className="thumbnail-container mb-5">
                                {thumbnails.map((thumbnail, index) => (
                                    <img
                                        key={index}
                                        className={`thumbnail ${index === selectedImageIndex ? 'active' : ''}`}
                                        src={thumbnail}
                                        alt={`Thumbnail ${index + 1}`}
                                        onClick={() => handleThumbnailClick(index)}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="col-6">
                            <h3 className="mt-5 mb-4">Copy Out</h3>
                            <Slider {...settings} initialSlide={selectedImageIndex}>
                                {thumbnails3.map((thumbnail, index) => (
                                    <div key={index} onClick={() => handleThumbnailClick(index)}>
                                        <img src={thumbnail} alt={`Image ${index + 1}`} />
                                    </div>
                                ))}
                            </Slider>
                            <div className="thumbnail-container mb-5">
                                {thumbnails3.map((thumbnail, index) => (
                                    <img
                                        key={index}
                                        className={`thumbnail ${index === selectedImageIndex ? 'active' : ''}`}
                                        src={thumbnail}
                                        alt={`Thumbnail ${index + 1}`}
                                        onClick={() => handleThumbnailClick(index)}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="ad mt-5">
                            <video width="700" height="500" controls>
                                <source src="/JOHNSONS/Copy-in/JohnsonsBabyIn1.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
                <div className="space my-5"></div>
            </div>
        </div>
    );
}

export default JohnsonsBaby;