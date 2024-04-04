import style from './Project.module.css';
import { FaGithub,  FaLinkedin } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

export default function Project({goPage, imgUrl, titlePost, description, gitHubLink, LinkedinLink, techs}) {

    const Navigate = useNavigate();
    
    const goProjet = () => {
        Navigate(`/${goPage}`)
    }
  return (
    <div className={style.content}>
        <img className={style.img} src={imgUrl} alt="" />
        <span>{titlePost}</span>
        <span className={style.description}>{description}</span>
        <div className={style.techs}>
            <span>Tecnologias: </span>
            {techs && 
                techs.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))
            }
        </div>
        <div className={style.buttoms}>
            <button onClick={goProjet}>Acessar Projeto</button>
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
