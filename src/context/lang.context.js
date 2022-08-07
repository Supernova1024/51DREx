import { createContext, useState } from 'react';
import i18n from '../i18n/config';

export const LangContext = createContext({
    lang: 'en'
})

export const LangProvider = ({children}) => {
    const [lang, setLang] = useState('en');
    const changeLang = (lang) => {
        i18n.changeLanguage(lang);
    }
    const value = { lang, setLang, changeLang };

    return (
        <LangContext.Provider value={value}>{children}</LangContext.Provider>
    );
}