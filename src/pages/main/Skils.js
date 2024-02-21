import style from './Skils.module.css'
import { IoIosArrowForward } from "react-icons/io";
import code from '../../img/code.png'


export default function Skils() {
    const listData = (text, index) => {
        return <li>
                    <IoIosArrowForward/>
                    {text}
                </li>
    }
    
  return (
    <div className={style.content}>
        <h1>Skils</h1>
        <div  className={style.skils_content}>
            <div>
                <div className={style.skil}>
                    <h2>Soft Skils</h2>
                    <ul>
                        {listData("Trabalho em equipe", 1)}
                        {listData("Capacidade de interpessoal", 2)}
                        {listData("Criatividade", 3)}
                        {listData("Pensamento crítico", 4)}
                    </ul>
                </div>
                <div  className={style.skil}>
                    <h2>Hard Skils</h2>
                    <ul>
                        {listData("CSS")}
                        {listData("JavaScript")}
                        {listData("React.js")}
                        {listData("Integração de API")}
                        {listData("Java")}

                    </ul>
                </div>
                
            </div>
            <div>
                <img src={code} alt="" />
            </div>
        </div>
    </div>
  )
}
