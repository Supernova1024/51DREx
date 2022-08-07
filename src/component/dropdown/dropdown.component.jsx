import { useTranslation } from "react-i18next";
import i18n from '../../i18n/config';

import './dropdown.styles.css';

const DropDown = () => {
    const { t } = useTranslation();
    return (
        <div className="humburger" style={{marginLeft: '80%'}}>
        <div className="dropdown">
            <button className="dropbtn">
                <i aria-hidden="true" className="fa fa-bars"></i>
            </button>
            <div className="dropdown-content">
                <a
                    href="#home"
                    aria-current="page"
                    className="elementor-item elementor-item-anchor"
                    >
                    {t('intro')}
                </a>
                <a
                    href="#faq"
                    aria-current="page"
                    className="elementor-item elementor-item-anchor"
                    >
                    {t('faq')}
                </a>
                <a
                    href="#proyects"
                    aria-current="page"
                    className="elementor-item elementor-item-anchor"
                    >
                    {t('projects')}
                </a>
            </div>
        </div>
        </div>
    );
}

export default DropDown;