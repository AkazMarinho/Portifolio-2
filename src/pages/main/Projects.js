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
            
            <Project imgUrl={frequencyProject} titlePost="Sistema de frequência" gitHubLink="https://github.com/AkazMarinho/frequence-project" LinkedinLink=""/>
            <Project imgUrl={portFolio} titlePost="Portfolio" gitHubLink="https://github.com/AkazMarinho/" LinkedinLink=""/>
            <Project imgUrl={balance} titlePost="Projeto Balance" gitHubLink="https://github.com/AkazMarinho/Projeto_Balance" LinkedinLink=""/>
        </div>
    </div>
  )
}
