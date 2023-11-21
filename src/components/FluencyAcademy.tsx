import { FunctionComponent, useState } from "react";
import { useLanguage } from "./LanguageContext";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../css/brands.css'

interface FluencyAcademyProps {

}

const FluencyAcademy: FunctionComponent<FluencyAcademyProps> = () => {
    const englishParagraph = <p>
        My job consisted of writing content that guaranteed the perfect balance between education and entertainment for platforms that teach English, French, Portuguese and Italian  to Hispanics in more than 12 countries.  <br /> <br />
        I was part of more than 10 launch campaigns, in which I participated from the creative conception of each one, to the execution of various texts and scripts of organic, educational and paid content. <br /> <br />
        <b>Languages ​​used:</b> Spanish, Argentinian Spanish (dialect), English, Portuguese.
        <br /><br />
    </p>
    const spanishParagraph = <p>
        Mi trabajo consistió en escribir contenido que garantizara el equilibrio perfecto entre educación y entretenimiento para las plataformas que enseñan inglés, francés, portugués e italiano a hispanos en más de 12 países.   <br /> <br />
        Fui parte de más de 10 campañas de lanzamiento, en las cuáles participé desde la concepción creativa de cada una, hasta la ejecución de diversos textos y guiones de contenido orgánico, educativo y de pago (ads).   <br /> <br />
        <b>Idiomas empleados:</b> Español, Español Argentino (dialecto), Inglés, Portugués.
        <br /><br />
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
        "/Fluency/1.png",
        "/Fluency/2.png",
        "/Fluency/3.png",
        "/Fluency/4.png",
        "/Fluency/5.png",
        "/Fluency/6.png",
        "/Fluency/7.png",
    ];
    const thumbnails2 = [
        "/Fluency/Copies/INGLES.png",
        "/Fluency/Copies/PORTUGUES.png",
        "/Fluency/Copies/FRANCES.png",
        "/Fluency/Copies/ITALIANO.png",
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
                <div className="fluencyForm mb-5">
                    <h1 className="mb-4">Fluency Academy - LATAM</h1>
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
                    <h3 className="mt-5 mb-3">Copy Out</h3>
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
                </div>
                <div className="webContent my-5">
                    <h1 className="mb-4">{language === 'en' ? 'Web Content' : 'Contenido web'}</h1>
                    <p><a href="https://es.fluencytv.com/contenidos/como-empezar-a-hablar-ingles" target="_blank">Cómo empezar a hablar inglés</a></p>
                    <p><a href="https://es.fluencytv.com/contenidos/en-cuantos-paises-se-habla-ingles" target="_blank">En cuántos países se habla inglés</a></p>
                    <p><a href="https://es.fluencytv.com/contenidos/walk-n-talk-essentials-portugues-07-credito-o-debito" target="_blank">
                        Walk 'n' Talk Essentials Portugués #07 - ¿Crédito o débito?</a></p>
                </div>
                <div className="adsPart">
                    <h1 className="pt-3">{language === 'en' ? 'Ads' : 'Anúncios'}</h1>
                    <div className="row adsRow">
                        <div className="col ad mt-5">
                            <video width="640" height="450" controls>
                                <source src="/Fluency/ADS/AD_ADAM_L.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <div className="col ad pb-5">
                            <img src="/Fluency/ADS/ADS_LATAM_E.png" alt="Neutrogena" />
                        </div>
                    </div>
                    <div className="row adsRow">
                        <div className="col ad mt-5">
                            <video width="640" height="450" controls>
                                <source src="/Fluency/ADS/AD_KALLY.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <div className="col ad">
                            <img src="/Fluency/ADS/ADS_LATAM_V.png" alt="Johnsons-Baby" />
                        </div>
                    </div>
                    <div className="row adsRow">
                        <div className="col ad mt-5">
                            <video width="640" height="400" controls>
                                <source src="/Fluency/ADS/AD_SABRINA_L.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <div className="col ad mt-5">
                            <img src="/Fluency/ADS/ADS_LATAM_3.png" alt="Johnsons-Baby" />
                        </div>
                    </div>
                </div>
                <div className="eBook mt-5 mb-5">
                    <h1>E-Books</h1>
                    <a href="/Fluency/LATAM-Ebook.pdf" target="_blank" download="LATAM-Ebook.pdf">
                        <img src="/Fluency/Ebook.png" alt="LATAM-Ebook" />
                    </a>
                </div>
                <div className="videoScripts mt-5 mb-5">
                    <h1>{language === 'en' ? 'Video Scripts' : 'Guiones de videos'}</h1>
                    <div className="row mt-4 mb-2">
                        <h4>{language === 'en' ? 'Platform tour' : 'Tour por la plataforma'}</h4>
                        <p><a href="https://www.youtube.com/watch?v=6COkuQ76eJM" target="_blank">Conoce el curso completo de la Fluency Academy</a></p>
                    </div>
                    <div className="row mb-4">
                        <h4>{language === 'en' ? 'YouTube Videos' : 'Videos de YouTube'}</h4>
                        <p><a href="https://www.youtube.com/watch?v=Oru4BHZg3AA" target="_blank">La diferencia entre SCREAM, SHOUT y YELL - 'Gritar' en inglés | Fluency Academy</a></p>
                        <p><a href="https://www.youtube.com/watch?v=W05nx94GVQI" target="_blank">Cómo hacer un vision board para el 2023 - Tablero para cumplir sueños | Fluency Academy</a></p>
                    </div>
                </div>
                <div className="newsLetter mt-5 mb-5">
                    <h1>NewsLetter</h1>
                    <img className="mb-5" src="/Fluency/Newsletter.png" alt="Newsletter" />
                </div>
                <div className="space my-5"></div>
            </div>
        </div>
    );
}

export default FluencyAcademy;