import { useNavigate } from 'react-router-dom';
import style from './Header.module.css'
import { FaHome } from "react-icons/fa";

export function Header() {

  const Navigate = useNavigate();

  return (
    <div className={style.content}>
      <div className={style.contentFixed}>
        <FaHome onClick={() => Navigate('/')} />

      </div>

    </div>
  )
}
