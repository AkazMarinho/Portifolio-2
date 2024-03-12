import style from "./Profile.module.css"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import profile from '../../img/profile.png'

export default function Profile() {
  return (
    <div className={style.content}>
        <div  className={style.contact}>
            <h1>Olá &#128075;,</h1>
            <h1>me chamo Akaz,</h1>
            <h1>sou dev Front-end. Seja bem vind@</h1><br />
            <span>Conheça um pouco do meu trabalho nesta pagina</span>
            <br />

        </div>
        <img src={profile} alt="" />
    </div>
  )
}
