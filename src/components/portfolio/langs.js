function getLanguage(lang) {
    const langs = [
        {
            lang: 'pt-br',
            text: [
                'Detector de sinais de mão',
                'Servidor Web do 0',
                'Assistente Virtual Minerva',
                'IA Para o jogo batalha naval',
                'Pet shop website',
                'DPLL'
            ]
        },
        {
            lang: 'eng',
            text: [
                'Hand Sign Detector',
                'Web-Server from scratch',
                'Minerva virtual assistant',
                'AI for battleship game',
                'Pet Shop web site',
                'DPLL'
            ]
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