import style from './Contact.module.css';
import { useState } from 'react';

export function LinkContact({svg, link}) {
    
    const [hover, setHover] = useState(false);

    const inHover = () => {
        setHover(true);
    }

    const outHover = () => {
        setHover(false);
    }

  return (

    <a href={link} target="_blank" rel="noopener noreferrer" className={hover ? `${style.svg_content} ${style.div_content_hover} ${style.svg_content_hover} ` : style.svg_content} onMouseEnter={inHover} onMouseLeave={outHover}>   
        <span>{svg}</span>
    </a>
  )
}
