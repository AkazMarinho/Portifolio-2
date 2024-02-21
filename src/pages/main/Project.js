import style from './Project.module.css';
import { FaGithub,  FaLinkedin } from "react-icons/fa";

export default function Project({imgUrl, titlePost, gitHubLink, LinkedinLink}) {
  return (
    <div className={style.content}>
        <img className={style.img} src={imgUrl} alt="" />
        <span>{titlePost}</span>
        <div className={style.buttoms}>
            <button>Acessar Projeto</button>
            <button>
                <a href={gitHubLink} target="_blank" rel="noopener noreferrer">
                    <FaGithub/>
                </a>
            </button>
            <button>
                <a href={LinkedinLink} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin/>
                </a>
            </button>
        </div>
    </div>
  )
}
