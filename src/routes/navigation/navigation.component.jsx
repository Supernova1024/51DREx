import { Fragment, useContext, useState } from "react";
import { Outlet, Link } from "react-router-dom";

import navLogo from '../../assets/logo.png';
import { useTranslation } from "react-i18next";
import i18n from '../../i18n/config';

import DropDown from "../../component/dropdown/dropdown.component";

const Navigation = () => {
  const { t } = useTranslation();
  const [language, setLanguage] = useState('en');
 
  const handleOnclick=(e)=>{
    e.preventDefault();
    i18n.changeLanguage(e.target.innerText);

    if (e.target.innerText === 'en') {
      setLanguage('es');
    } else {
      setLanguage('en');
    }
  }

  return (
    <Fragment>
      <section
        className="elementor-section elementor-top-section elementor-element elementor-element-34c93052 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
        data-id="34c93052"
        data-element_type="section"
      >
        <div className="elementor-container elementor-column-gap-default">
          <div
            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-dc8bbc4"
            data-id="dc8bbc4"
            data-element_type="column"
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              <div
                className="elementor-element elementor-element-6e2dbc80 elementor-widget elementor-widget-template"
                data-id="6e2dbc80"
                data-element_type="widget"
                data-widget_type="template.default"
              >
                <div className="elementor-widget-container">
                  <div className="elementor-template">
                    <div
                      data-elementor-type="header"
                      data-elementor-id="57"
                      className="elementor elementor-57 elementor-location-single"
                      data-elementor-settings="[]"
                    >
                      <div className="elementor-section-wrap">
                        <section
                          className="elementor-section elementor-top-section elementor-element elementor-element-346f3d8b elementor-section-boxed elementor-section-height-default elementor-section-height-default elementor-sticky elementor-sticky--effects elementor-sticky--active elementor-section--handles-inside"
                          data-id="346f3d8b"
                          data-element_type="section"
                          data-settings='{"sticky":"top","background_background":"classNameic","sticky_on":["desktop","tablet","mobile"],"sticky_offset":0,"sticky_effects_offset":0}'
                          style={{
                            position: 'fixed',
                            width: '90%',
                            marginTop: '0px',
                            marginBottom: '0px',
                            top: '0px',
                          }}
                        >
                          <div className="elementor-container elementor-column-gap-default">
                            <div
                              className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-33e60a80"
                              data-id="33e60a80"
                              data-element_type="column"
                            >
                              <div className="elementor-widget-wrap elementor-element-populated">
                                <div
                                  className="elementor-element elementor-element-d6c3a60 elementor-widget elementor-widget-image"
                                  data-id="d6c3a60"
                                  data-element_type="widget"
                                  data-widget_type="image.default"
                                >
                                  <div className="elementor-widget-container">
                                    <div className="elementor-image">
                                      <a href="/#home">
                                        <img
                                          width="300"
                                          height="122"
                                          src={navLogo}
                                          className="attachment-medium size-medium"
                                          alt=""
                                          loading="lazy"
                                          sizes="(max-width: 300px) 100vw, 300px"
                                          data-xblocker="passed"
                                          style={{visibility: 'visible'}}
                                        />
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-3795ede2"
                              data-id="3795ede2"
                              data-element_type="column"
                            >
                              <div className="elementor-widget-wrap elementor-element-populated">
                                <div
                                  className="elementor-element elementor-element-ea8028c elementor-nav-menu--indicator-angle elementor-nav-menu--stretch elementor-nav-menu__align-right elementor-hidden-tablet elementor-hidden-phone elementor-nav-menu--dropdown-tablet elementor-nav-menu__text-align-aside elementor-nav-menu--toggle elementor-nav-menu--burger elementor-widget elementor-widget-nav-menu"
                                  data-id="ea8028c"
                                  data-element_type="widget"
                                  data-settings='{"full_width":"stretch","layout":"horizontal","toggle":"burger"}'
                                  data-widget_type="nav-menu.default"
                                >
                                  <div className="elementor-widget-container">
                                    <nav
                                      role="navigation"
                                      className="elementor-nav-menu--main elementor-nav-menu__container elementor-nav-menu--layout-horizontal e--pointer-text e--animation-none"
                                    >
                                      <ul
                                        id="menu-1-ea8028c"
                                        className="elementor-nav-menu"
                                        data-smartmenus-id="1654522978451837"
                                      >
                                        <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-74">
                                          <a
                                            href="#home"
                                            aria-current="page"
                                            className="elementor-item elementor-item-anchor"
                                          >
                                            {t('intro')}
                                          </a>
                                        </li>
                                        <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-75">
                                          <a
                                            href="#faq"
                                            aria-current="page"
                                            className="elementor-item elementor-item-anchor"
                                          >
                                            {t('faq')}
                                          </a>
                                        </li>
                                        <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-76">
                                          <a
                                            href="#proyects"
                                            aria-current="page"
                                            className="elementor-item elementor-item-anchor"
                                          >
                                            {t('projects')}
                                          </a>
                                        </li>
                                      </ul>
                                    </nav>
                                    <DropDown />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-15f156e9"
                              data-id="15f156e9"
                              data-element_type="column"
                            >
                              <div className="elementor-widget-wrap elementor-element-populated">
                                <div
                                  className="elementor-element elementor-element-2d037cb elementor-view-default elementor-widget elementor-widget-icon"
                                  data-id="2d037cb"
                                  data-element_type="widget"
                                  data-widget_type="icon.default"
                                >
                                  <div className="elementor-widget-container">
                                    <div className="elementor-icon-wrapper" style={{display: 'inline-flex'}}>
                                      <div className="elementor-icon">
                                        <a href="https://instagram.com">
                                          <i
                                            aria-hidden="true"
                                            className="fab fa-instagram"
                                          ></i>
                                        </a>
                                      </div>
                                      <div className="elementor-icon">
                                        <a href="https://twitter.com/DrexNetwork">
                                          <i
                                            aria-hidden="true"
                                            className="fab fa-twitter-square"
                                            // style={{marginLeft: '90%'}}

                                          ></i>
                                        </a>
                                      </div>
                                      <div className="elementor-icon">
                                        <span style={{
                                        cursor: 'pointer',
                                        // marginLeft: '45%'
                                      }} onClick={handleOnclick}>{language}</span>
                                      </div>
                                      
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* <div
                              className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-15f156e9"
                              data-id="15f156e9"
                              data-element_type="column"
                            >
                              <div className="elementor-widget-wrap elementor-element-populated">
                                <div
                                  className="elementor-element elementor-element-2d037cb elementor-hidden-tablet elementor-hidden-phone elementor-view-default elementor-widget elementor-widget-icon"
                                  data-id="2d037cb"
                                  data-element_type="widget"
                                  data-widget_type="icon.default"
                                >
                                  <div className="elementor-widget-container">
                                    <div className="elementor-icon-wrapper">
                                      <div className="elementor-icon">
                                        <i
                                          aria-hidden="true"
                                          className="fab fa-twitter-square"
                                        ></i>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-15f156e9"
                              data-id="15f156e9"
                              data-element_type="column"
                            >
                              <div className="elementor-widget-wrap elementor-element-populated">
                                <div
                                  className="elementor-element elementor-element-2d037cb elementor-hidden-tablet elementor-hidden-phone elementor-view-default elementor-widget elementor-widget-icon"
                                  data-id="2d037cb"
                                  data-element_type="widget"
                                  data-widget_type="icon.default"
                                >
                                  <div className="elementor-widget-container" style={{
                                    cursor: 'pointer',
                                  }}>
                                    <span onClick={handleOnclick}>{language}</span>
                                  </div>
                                </div>
                              </div>
                            </div> */}
                          </div>
                        </section>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
