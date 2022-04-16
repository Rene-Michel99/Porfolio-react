function getLanguage(lang) {
    const langs = [
        {
            lang: 'pt-br',
            text: {
                greetings: "Olá Eu Sou",
                name: "Renê Michel",
                cargo: "Programador",
                scroll: "Rolar para Baixo"
            }
        },
        {
            lang: 'eng',
            text: {
                greetings: "Hello I'm",
                name: "Renê Michel",
                cargo: "Developer",
                scroll: "Scroll Down"
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