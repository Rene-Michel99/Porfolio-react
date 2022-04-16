function getLanguage(lang) {
    const langs = [
        {
            lang: 'pt-br',
            text: {
                home: "Início",
                about: "Sobre",
                experience: "Experiência",
                services: "Serviços",
                contact: "Contato",
                copyright: " Renê Michel. Todos os direitos reservados."
            }
        },
        {
            lang: 'eng',
            text: {
                home: "Home",
                about: "About",
                experience: "Experience",
                services: "Services",
                contact: "Contact",
                copyright: " Renê Michel. All Rights reserved."
            }
        }
    ]
    const prefixLang = lang.toLowerCase().split('-')[0]
    for (var i = 0; i <langs.length; i++) {
        if (langs[i].lang.indexOf(prefixLang) !== -1) {
            return langs[i].text;
        }
    }
    return null;
}

export default getLanguage;