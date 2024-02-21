import style from './Header.module.css'
import { FaHome } from "react-icons/fa";

export function Header() {
  return (
    <div className={style.content}>
        <FaHome />

        <button>
            <span>
                Projetos
            </span>
        </button>


    </div>
  )
}
