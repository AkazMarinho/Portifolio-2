import { AboutMe } from '../main/AboutMe'
import style from './LightComponent.module.css'

export  function LightComponent({element}) {
  return (
    <div className={style.content}>
        {element}
    </div>
  )
}
