function getLanguage(lang) {
    const langs = [
        {
            lang: 'pt-br',
            text: {
                intro: "Quais Abilidades Possuo",
                experience: "Minha Experiência",
                frontend: "Desenvolvimento Frontend",
                experienced: "Avançado",
                backend: "Desenvolvimento Backend",
                dataScience: "Ciência de Dados",
                intermediate: "Intermediário"
            }
        },
        {
            lang: 'eng',
            text: {
                intro: "What Skills I Have",
                experience: "My Experience",
                frontend: "Frontend Development",
                experienced: "Experienced",
                backend: "Backend Development",
                dataScience: "Data Science",
                intermediate: "Intermediate"
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