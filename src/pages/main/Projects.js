import Project from './Project'
import style from './Projects.module.css'
import frequencyProject from '../../img/frequencySystem.jpg'
import portFolio from '../../img/Portfolio.jpg'
import balance from '../../img/balance.jpeg'

export function Projects() {
  return (
    <div className={style.content}>
        <h1>Projetos - React.JS</h1>
        <div className={style.projects}>
            
            <Project 
              imgUrl={frequencyProject} 
              description="Sistema projetado para verificaçções e alteração de frequência e alunos do Cursinho popular LOGOS, projeto da Universidade Federal do Pará, campus Castanhal."
              titlePost="Sistema de frequência" 
              gitHubLink="https://github.com/AkazMarinho/frequence-project" 
              LinkedinLink=""/>
            <Project 
              imgUrl={portFolio} 
              description="Página contendo informações sobre minhas habilidades, projetos e experiencias mais recentes, assim como informações de contato."
              titlePost="Portfólio" 
              gitHubLink="https://github.com/AkazMarinho/" 
              LinkedinLink=""/>
            <Project 
              imgUrl={balance} 
              description="Sistema com objetivo de mostrar informações de exercícios físicos praticados por pessoas do projeto Balance, desenvolvido na Universidade Federal do Pará, campus Castanhal."
              titlePost="Projeto Balance" 
              gitHubLink="https://github.com/AkazMarinho/Projeto_Balance"
              LinkedinLink=""/>
        </div>
    </div>
  )
}
