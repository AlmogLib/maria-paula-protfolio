import { FunctionComponent } from "react";
import { useLanguage } from "./LanguageContext";
import '../css/navbar.css'

interface NavbarProps {

}

const Navbar: FunctionComponent<NavbarProps> = () => {
    const { language, setLanguage } = useLanguage();

    const changeLanguage = (lang: string) => {
        setLanguage(lang);
        // נוסיף כאן גם קוד לשינוי של טקסטים או דברים אחרים בהתאם לשפה החדשה
    };

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid languageSelector">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <button className="nav-link language-button" onClick={() => changeLanguage('en')}>
                                <b>EN</b>
                            </button>
                        </li>
                        <li className="nav-item space">
                            |
                        </li>
                        <li className="nav-item">
                            <button className="nav-link language-button" onClick={() => changeLanguage('es')}>
                                <b>ESP</b>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;