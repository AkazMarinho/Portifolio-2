import { useEffect, useState } from 'react';
import style from './DarkComponent.module.css';

export  function DarkComponent({element}) {

    // const [scrollHeight, setScrollHeight] = useState(0); //armazena a altura da rolagem
    // const [isScrolled, setIsScrolled] = useState(false); //indica se a pagina foi rolada
  
    // const handleScroll = () => {
    //   const currentScrollHeight = window.scrollY; //obtem a posição atual da rolagem vertical da janela do navegador
    //   setScrollHeight(currentScrollHeight); //atualiza a variavel scrollHeight com a altura atual da pagina
    //   setIsScrolled(currentScrollHeight >= 80); //se a altura for maior que 80, armazena em isScrolled
    //   console.log(currentScrollHeight);
    // };
  
    // useEffect(() => {
    //     window.addEventListener('scroll', handleScroll); //adiciona um ouvinte de evento de montagem para quando o componente for montado

    //     return () =>{
    //         window.removeEventListener('scroll', handleScroll); //remove o ouvinte de evento de montagem para quando o componente for desmontado
    //     }
      
    // }, []);

  return (
    <div className={style.content}>
      {element}
    </div>
  )
}
