import style from './AboutMe.module.css'
import dev from '../../img/imagens-de-programacao-png-0.png'

export function AboutMe() {
  return (
    <div className={style.content}>
        <div className={style.textContent}>
          <h1>SOBRE MIM</h1>

          <span>Estudante do 9º período de Engenharia da Computação na Universidade Federal do Pará (UFPA), com enfase no desenvolvimento Front-end web, com a tech React.js. Contribuí ativamente para projetos voluntários de web desenvolvimento na faculdade. Estou entusiasmado para enfrentar desafios significativos e aplicar meu conhecimento de forma prática e inovadora.</span>
        </div>
        <div className={style.img}>
          <img src={dev} alt="desenho de um Desenvolvedor" />
        </div>
    </div>
  )
}
