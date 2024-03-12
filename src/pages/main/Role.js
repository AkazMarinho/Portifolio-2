import style from './ProfessionalExperience.module.css'
import { useState } from 'react';

export  function Role({inYe, inMon, outYe, outMon, role, contend, type, local}) {
    const [hovered, setHovered] = useState(false);
  
    const hoverIn = () => {
      setHovered(true);
    }
  
    const hoverOut = () => {
      setHovered(false);
    }
  return (
    <div className={ hovered ? `${style.content_info} ${style.border_contend}` : `${style.content_info}`} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>
          <div className={style.date}>
            <p>{inMon} {inYe} — {outMon} {outYe}</p>
          </div>
          <div className={style.info_datas}>
            <h4 className={hovered === true && `${style.hovered}`}>{role} • {local}</h4>
            <span className={style.type}>{type}</span>
            <span>{contend}</span>
          </div> 
        </div>
  )
}
