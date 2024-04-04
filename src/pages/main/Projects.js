import Project from './Project'
import style from './Projects.module.css'
import frequencyProject from '../../img/frequencySystem.jpg'
import portFolio from '../../img/Portfolio.jpg'
import balance from '../../img/balance.jpeg'
import linksInsta from '../../img/links.jpg'
import { IoLogoReact } from "react-icons/io5";
import { SiTailwindcss, SiAxios, SiStyledcomponents } from "react-icons/si";



export function Projects() {


  const techs = {
    react : <IoLogoReact />, 
    tailwind : <SiTailwindcss />, 
    axios : <SiAxios />, 
    styled : <SiStyledcomponents />, 
  }
  return (
    <div className={style.content}>
        <h1>Projetos - React.JS</h1>
        <div className={style.projects}>
            
            <Project 
              goPage="frequencySystem"
              imgUrl={frequencyProject} 
              description="Sistema projetado para verificaçções e alteração de frequência e alunos do Cursinho popular LOGOS, projeto da Universidade Federal do Pará, campus Castanhal."
              titlePost="Sistema de frequência" 
              gitHubLink="https://github.com/AkazMarinho/frequence-project" 
              techs={[
                techs.react,
                techs.tailwind,
                techs.axios,
                techs.styled,
              ]}
              LinkedinLink=""/>
            <Project 
              goPage="portfolio-info"
              imgUrl={portFolio} 
              description="Página contendo informações sobre minhas habilidades, projetos e experiencias mais recentes, assim como informações de contato."
              titlePost="Portfólio" 
              gitHubLink="https://github.com/AkazMarinho/" 
              techs={[
                techs.react,
                techs.styled,
              ]}
              LinkedinLink=""/>
            <Project 
              goPage="balance-project"
              imgUrl={balance} 
              description="Sistema com objetivo de mostrar informações de exercícios físicos praticados por pessoas do projeto Balance, desenvolvido na Universidade Federal do Pará, campus Castanhal."
              titlePost="Projeto Balance" 
              gitHubLink="https://github.com/AkazMarinho/Projeto_Balance"
              techs={[
                techs.react,
                techs.axios,
              ]}
              LinkedinLink=""
            />
            <Project 
              goPage="page-links"
              imgUrl={linksInsta} 
              description="Com a necessidade de ter varios links no instagram para contato, fiz minha versão do Linketree, onde existem meus contatos, e portifolio, sendo de fácil acesso, e com um distema de temas ligth e dark"
              titlePost="Links para peffil do Instagram" 
              gitHubLink="https://github.com/AkazMarinho/link-instagram"
              techs={[
                techs.react,
              ]}
              LinkedinLink=""
            />
        </div>
    </div>
  )
}
