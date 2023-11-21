import { FunctionComponent, useState } from "react";
import { useLanguage } from "./LanguageContext";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../css/brands.css'

interface NeutrogenaProps {

}

const Neutrogena: FunctionComponent<NeutrogenaProps> = () => {
    const englishParagraph = <p>
        I worked alongside the content teams in Brazil, Argentina and Chile in the <br />
        <b> writing, translation and adaptation of organic content</b> for the brand's social platforms. <br /><br />

        <b>Languages ​​used:</b> Spanish, Argentinian Spanish (dialect), Portuguese (translation). <br /><br />
    </p>
    const spanishParagraph = <p>
        Trabajé de la mano de los equipos de contenido de Brasil, Argentina y Chile en la <br />
        <b> redacción, traducción y adaptación</b> de contenidos orgánicos para las redes sociales de la marca. <br /><br />

        <b>Idiomas empleados:</b> Español, Español Argentino (dialecto), Portugués (traducción). <br /><br />
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
        "/NEUTROGENA/Copy-in/Carrusel/1.png",
        "/NEUTROGENA/Copy-in/Carrusel/2.png",
        "/NEUTROGENA/Copy-in/Carrusel/3.png",
        "/NEUTROGENA/Copy-in/Carrusel/4.png",
        "/NEUTROGENA/Copy-in/Carrusel/carrossel_01.png",
        "/NEUTROGENA/Copy-in/Carrusel/carrossel_02.png",
        "/NEUTROGENA/Copy-in/Carrusel/carrossel_03.png",
        "/NEUTROGENA/Copy-in/Carrusel/carrossel_04_v1.png",
    ];
    const thumbnails2 = [
        "/NEUTROGENA/Copy-in/Post/Captura-de-pantalla2.png",
        "/NEUTROGENA/Copy-in/Post/Captura-de-pantalla3.png",
        "/NEUTROGENA/Copy-in/Post/Captura-de-pantalla1.png",
    ];
    const thumbnails3 = [
        "/NEUTROGENA/Copy-out/Captura-de-pantalla1.png",
        "/NEUTROGENA/Copy-out/Captura-de-pantalla2.png",
        "/NEUTROGENA/Copy-out/Captura-de-pantalla3.png",
        "/NEUTROGENA/Copy-out/Captura-de-pantalla4.png",
        "/NEUTROGENA/Copy-out/Captura-de-pantalla5.png",
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
                <div className="neutrogenaForm mb-5">
                    <h1 className="mb-4">NEUTROGENA® - Argentina, Chile</h1>
                    {language === 'en' && englishParagraph}
                    {language !== 'en' && spanishParagraph}
                    <h1 className="mt-5 mb-5">{language === 'en' ? 'Social media' : 'Redes sociales'}</h1>
                    <h3 className="mt-5 mb-3">Copy In</h3>
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
                    <div className="mx-5"></div>
                    <Slider {...settings} initialSlide={selectedImageIndex}>
                        {thumbnails2.map((thumbnail, index) => (
                            <div key={index} onClick={() => handleThumbnailClick(index)}>
                                <img src={thumbnail} alt={`Image ${index + 1}`} />
                            </div>
                        ))}
                    </Slider>
                    <div className="thumbnail-container mb-5">
                        {thumbnails2.map((thumbnail, index) => (
                            <img
                                key={index}
                                className={`thumbnail ${index === selectedImageIndex ? 'active' : ''}`}
                                src={thumbnail}
                                alt={`Thumbnail ${index + 1}`}
                                onClick={() => handleThumbnailClick(index)}
                            />
                        ))}
                    </div>
                    <div className="row">
                        <div className="col ad mt-5">
                            <video width="640" height="450" controls>
                                <source src="/NEUTROGENA/Copy-in/Post/poster_barbie_LATAM_L.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        {/* <div className="col ad pb-5">
                            <video width="640" height="450" controls>
                                <source src="/NEUTROGENA/Copy-in/Video/copy.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div> */}
                    </div>
                    <h3 className="mt-5 mb-3">Copy Out</h3>
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
                <div className="space my-5"></div>
            </div>
        </div>
    );
}

export default Neutrogena;