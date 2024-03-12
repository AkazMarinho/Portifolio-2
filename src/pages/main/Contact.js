import style from './Contact.module.css';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { LinkContact } from './LinkContact'

export function Contact() {

  return (
    <div className={style.content}>
        <div className={style.text}>
            <span>"A programação é o mais próximos que temos de fazer magia"</span>
        </div>
        <span>Me contate. Podemos criar um projeto, ou tomar um café.&#128512;</span><br />
        <div className={style.contact}>
            <LinkContact svg={<FaLinkedin />} link="www.linkedin.com/in/akaz-marinho-b66475230"/>
            <LinkContact svg={<FaGithub />} link="https://github.com/AkazMarinho"/>
            <LinkContact svg={<IoIosMail />} link="mailto:akazmarinho@gmail.com"/>
        </div>
        
    </div>
  )
}
