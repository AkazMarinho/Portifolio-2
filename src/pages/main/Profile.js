import style from "./Profile.module.css"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import profile from '../../img/profile.png'

export default function Profile() {
  return (
    <div className={style.content}>
        <div  className={style.contact}>
            <h1>O</h1>
            <h1>Dev</h1>
            <h1>Front-end jr</h1><br />
            <span>Conheça meu trabalho conform avança nessa página.</span>
            <br />
            <br />
            <span>Ou conheça meus projetos atraves dos links:</span>
            <br />
            <br />
            <div className={style.button}>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                    <button>
                        <FaGithub/>
                    </button>
                </a>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                    <button>
                        <FaLinkedin/>
                    </button>
                </a>

            </div>

        </div>
        <img src={profile} alt="" />
    </div>
  )
}
