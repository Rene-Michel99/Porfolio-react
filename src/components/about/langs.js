function getLanguage(lang) {
    const langs = [
        {
            lang: 'pt-br',
            text: {
                intro: "Conheça os Projetos",
                about: "Sobre Mim",
                experience: "Experiência",
                expTime: "3+ Anos de Experiência",
                users: "Usuários Afetados",
                usersQty: "+1000 Usuários",
                projects: "Projetos Concluídos",
                projectsQty: "+40 Projetos",
                resume: "Desenvolvedor dedicado com mais de 3 anos de experiência cursando oitavo semestre de Engenheiro de Software na Universidade Federal do Ceará com 25 projetos desenvolvidos e salvos no Github, procuro combinar minha experiência que adquiri em meus projetos desenvolvidos, o aprendizado adquirido na faculdade e meu trabalhos anteriores para fornecer códigos inovadores e eficientes e sempre dentro do prazo."
            }
        },
        {
            lang: 'eng',
            text: {
                intro: "Get To Known Projects",
                about: "About Me",
                experience: "Experience",
                expTime: "3+ Years Working",
                users: "Users",
                usersQty: "+1000 Users",
                projects: "Projects Done",
                projectsQty: "+40 Projects",
                resume: "Dedicated developer with more than 3 years of experience attending the eighth semester of Software at Universidade Federal do Ceará with 25 projects developed and saved on Github combining what I acquired in my developed projects, the learning acquired in college and my previous works to provide innovative and efficient and always on time."
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