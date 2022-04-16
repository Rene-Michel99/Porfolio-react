function getLanguage(lang) {
    const langs = [
        {
            lang: 'pt-br',
            text: {
                intro: "Entrar em contato",
                contact: "Contate-me",
                send: "Enviar Mensagem",
                tlFName: "Seu Nome Completo",
                tlEmail: "Seu Email",
                tlMessage: "Sua Mensagem"
            }
        },
        {
            lang: 'eng',
            text: {
                intro: "Get In Touch",
                contact: "Contact Me",
                send: "Send Message",
                tlFName: "Your Full Name",
                tlEmail: "Your Email",
                tlMessage: "Your Message"
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