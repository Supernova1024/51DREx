import { t } from "i18next";

const Footer = () => {
  return (
    <section
      className="elementor-section elementor-top-section elementor-element elementor-element-22c10ccb elementor-section-full_width elementor-section-height-default elementor-section-height-default"
      data-id="22c10ccb"
      data-element_type="section"
    >
      <div className="elementor-container elementor-column-gap-default">
        <div
          className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-64bf5e44"
          data-id="64bf5e44"
          data-element_type="column"
        >
          <div className="elementor-widget-wrap elementor-element-populated">
            <div
              className="elementor-element elementor-element-33cc88c9 elementor-widget elementor-widget-template"
              data-id="33cc88c9"
              data-element_type="widget"
              data-widget_type="template.default"
            >
              <div className="elementor-widget-container">
                <div className="elementor-template">
                  <div
                    data-elementor-type="footer"
                    data-elementor-id="41"
                    className="elementor elementor-41 elementor-location-single"
                    data-elementor-settings="[]"
                  >
                    <div className="elementor-section-wrap">
                      <section
                        className="elementor-section elementor-top-section elementor-element elementor-element-3178c828 elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                        data-id="3178c828"
                        data-element_type="section"
                        data-settings='{"background_background":"classic"}'
                      >
                        <div className="elementor-container elementor-column-gap-default">
                          <div
                            className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-984178d"
                            data-id="984178d"
                            data-element_type="column"
                          >
                            <div className="elementor-widget-wrap elementor-element-populated">
                              <div
                                className="elementor-element elementor-element-6b69d4c elementor-widget elementor-widget-text-editor"
                                data-id="6b69d4c"
                                data-element_type="widget"
                                data-widget_type="text-editor.default"
                              >
                                <div className="elementor-widget-container">
                                  <div className="elementor-text-editor elementor-clearfix">
                                    <p>
                                      Drexall © 2022
                                      <br />
                                      <span className="hidden sm:inline-block">
                                        {t('footer_description')}
                                      </span>
                                      <br />
                                      <span style={{
                                        color: '#011033'
                                      }}>
                                        <a href='mailto:hello@drexall.net'>{t('contact')}</a>
                                      </span>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* <div
                            className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-c8569ca"
                            data-id="c8569ca"
                            data-element_type="column"
                          >
                            <div className="elementor-widget-wrap elementor-element-populated">
                              <div
                                className="elementor-element elementor-element-d4e466d elementor-search-form--skin-full_screen elementor-widget elementor-widget-search-form"
                                data-id="d4e466d"
                                data-element_type="widget"
                                data-settings='{"skin":"full_screen"}'
                                data-widget_type="search-form.default"
                              >
                                <div className="elementor-widget-container">
                                  <form
                                    className="elementor-search-form"
                                    role="search"
                                    action="http://drexall.net/"
                                    method="get"
                                  >
                                    <div className="elementor-search-form__toggle">
                                      <i
                                        aria-hidden="true"
                                        className="fas fa-search"
                                      ></i>
                                      <span className="elementor-screen-only">
                                        Search
                                      </span>
                                    </div>
                                    <div className="elementor-search-form__container">
                                      <input
                                        placeholder={`${"Buscar..."}`}
                                        className="elementor-search-form__input"
                                        type="search"
                                        name="s"
                                        title={`${"Search"}`}
                                      />
                                      <div className="dialog-lightbox-close-button dialog-close-button">
                                        <i
                                          className="eicon-close"
                                          aria-hidden="true"
                                        ></i>
                                        <span className="elementor-screen-only">
                                          Close
                                        </span>
                                      </div>
                                    </div>
                                  </form>
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
  );
};

export default Footer;
