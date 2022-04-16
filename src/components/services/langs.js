function getLanguage(lang) {
    const langs = [
        {
            lang: 'pt-br',
            text: {
                intro: "O Que Ofereço",
                services: "Serviços",
                gameDev: "Desenvolvimento de Jogos",
                webDev: "Desenvolvimento Web",
                dataScience: "Ciência de Dados",
                gameDevServs: [
                    "Desenvolvimento do jogo (código)",
                    "Conhecimento em Godot e Unity",
                    "Design de personagens",
                    "Jogos 2D"
                ],
                webDevServs: [
                    "Frontend responsivo",
                    "API Rest",
                    "Código legível e eficiente",
                    "Arquitetura de micro-serviços e MVC",
                    "Manutenção de aplicaciões"
                ],
                dataScienceServs: [
                    "Pré-processamento de dados",
                    "Conhecimento em NLP e Visão Computacional",
                    "Visualização de dados",
                    "Geração de modelos e avaliação de sua acurácia",
                    "Aprendizado supervisionado e não supervisionado",
                    "Deep Learning"
                ]
            }
        },
        {
            lang: 'eng',
            text: {
                intro: "What I Offer",
                services: "Services",
                gameDev: "Game Development",
                webDev: "Web Development",
                dataScience: "Data Science",
                gameDevServs: [
                    "Development of the game itself (code)",
                    "Knowledge in Godot and Unity",
                    "Design of characters"
                ],
                webDevServs: [
                    "Responsive frontend",
                    "API Rest",
                    "Legible and efficient code",
                    "Architecture of microservices and MVC applications",
                    "Maintenance"
                ],
                dataScienceServs: [
                    "Data preprocessing",
                    "NLP and Computer Vision knowledge",
                    "Data visualization",
                    "Model generation and evaluation",
                    "Supervised and unsupervised learning",
                    "Deep Learning"
                ]
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