import ytThumb from "@/assets/yt-thumb.png";
import spiderThumb from "@/assets/spider-thumb.png";
import dataThumb from "@/assets/data-python-thumb.png";
import starwarsThumb from "@/assets/starwars-thumb.png";


export const projectsItems = [
  {
    id: 1,
    src: ytThumb.src,
    alt: "Youtube Clone thumbnail",
    title: "Youtube Clone",
    description: "Aplicação em React com TypeScript inspirada no YouTube. Possui pesquisa e navegação por categorias. Permite criar conta, fazer login, cadastrar e excluir vídeos. Usa a API do YouTube e uma API própria em Node.js, integrada ao MongoDB.",
    href_app: "https://yt-project-int-mongo-db.vercel.app/",
    href_repo: "https://github.com/andre-ribeiro93/yt-project_int.mongoDB",
    stacks: [
      { name: "React", id: 1.1 },
      { name: "TypeScript", id: 1.2 },
      { name: "Node.js", id: 1.3 },
      { name: "MongoDB", id: 1.4 },
      { name: "Express", id: 1.5 },
      { name: "API REST", id: 1.6 },
      { name: "Styled-components", id: 1.7 }
    ]
  },

  {
    id: 2,
    src: spiderThumb.src,
    alt: "Spider Showcase e-Shop thumbnail",
    title: "Spider Showcase e-Shop",
    description: "Experiência interativa em React que combina design responsivo e funcionalidades de e-commerce, trazendo uma vitrine temática do Spider-Man 2 com cards dinâmicos e redirecionamento para aquisição de produtos.",
    href_app: "https://andre-ribeiro93.github.io/react-app-spider2/",
    href_repo: "https://github.com/andre-ribeiro93/react-app-spider2",
    stacks: [
      { name: "React", id: 2.1 },
      { name: "JavaScript", id: 2.2 },
      { name: "HTML", id: 2.3 },
      { name: "CSS", id: 2.4 },
    ]
  },
  {
    id: 3,
    src: dataThumb.src,
    alt: "Salary Data Analysis Dashboard thumbnail",
    title: "Salary Data Analysis Dashboard",
    description: "Interface analítica em Python desenvolvida com Streamlit, voltada para a exploração interativa de dados salariais na área de data science. Utiliza uma base em formato .csv com informações globais sobre profissionais, tratadas com Pandas e apresentadas por meio de gráficos dinâmicos e visuais interativos criados com Plotly.",
    href_app: "https://data-python-dashboard-2025.streamlit.app/",
    href_repo: "https://github.com/andre-ribeiro93/data-python-dashboard",
    stacks: [
      { name: "Python", id: 3.1 },
      { name: "Streamlit", id: 3.2 },
      { name: "Pandas", id: 3.3 },
      { name: "Plotly Express", id: 3.4 },
    ]
  },
  {
    id: 4,
    src: starwarsThumb.src,
    alt: "Star Wars Interactive Cards thumbnail",
    title: "Star Wars Interactive Cards",
    description: "Interface web responsiva que exibe informações sobre personagens, espécies, planetas e os seis primeiros filmes da franquia Star Wars. Os dados são obtidos da API pública SWAPI e as imagens são fornecidas pelo site Star Wars Visual Guide.",
    href_app: "https://andre-ribeiro93.github.io/star-wars-interative-cards/",
    href_repo: "https://github.com/andre-ribeiro93/star-wars-interative-cards",
    stacks: [
      { name: "JavaScript", id: 4.1 },
      { name: "HTML", id: 4.2 },
      { name: "CSS", id: 4.3 },
    ]
  }
]