import style from './Skils.module.css'
import { IoIosArrowForward } from "react-icons/io";
import code from '../../img/code.png'
import { useEffect, useState } from 'react';
import { MdDoubleArrow } from "react-icons/md";
import css from '../../img/css.png'
import js from '../../img/js.png'
import api from '../../img/api.png'
import react from '../../img/react.png'
import java from '../../img/java.png'


export default function Skils() {

    const [posicaoDiv, setPosicaoDiv] = useState({ top: 0, left: 0 });
    const [mostrarDiv1, setMostrarDiv1] = useState(false);
    const [mostrarDiv2, setMostrarDiv2] = useState(false);
    const [larguraTela, setLarguraTela] = useState(window.innerWidth);
    const [contentSkils, setContentSkils] = useState({})

    const handleResize = () => {
      setLarguraTela(window.innerWidth);
      console.log(window.innerWidth);
    };
  
    useEffect(() => {
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []); 

    const resize = (vetor) => {
        console.log(vetor);
        if(larguraTela < 530){
            setPosicaoDiv({top: vetor[0]})
            console.log(posicaoDiv);
        } else {
            console.log(posicaoDiv);
            setPosicaoDiv({top: vetor[1]})
        }

    }

    const [arrowInfo, setArrowInfo] = useState(false);
  const skilContent = (e) => {
    const value = e.target.value;
    setArrowInfo(true);

    switch (value) {
        case 1:
            resize([49, 54]);
            setMostrarDiv1(true);
            setContentSkils({...contentSkils, title: "Trabalho em Equipe", text : "Em um ambiente profissional, considero a habilidade de trabalho em equipe crucial, pois o compartilhamento de ideias e contribuição para objetivos comuns promovem resultados mais sólidos."});

            break;
        case 2:
            resize([71, 80]);
            setMostrarDiv1(true);
            setContentSkils({...contentSkils, title: "Capacidade Interpessoal", text : "A demonstração de empatia e boa comunicação cria laços saudáveis tanto em ambientes profissionais quanto nas mais diversas áreas da vida, sendo capaz de fortalecer a dinâmica da equipe."});

            break;
        case 3:
            resize([96, 104]);
            setMostrarDiv1(true);
            setContentSkils({...contentSkils, title: "Criatividade", text : "Sempre esteve presente em minha vida, onde aproveito da melhor forma em todo o meu ambiente profissional, com pensamentos originais e visão além do meu horizonte, e altamente inclinado à inovação."});

            break;
        case 4:
            resize([119, 132]);
            setMostrarDiv1(true);
            setContentSkils({...contentSkils, title: "Pensamento Crítico", text : "Questionar, analisar, refletir são habilidades que facilitam a tomada de decisões mais eficazes, assim como poder observar por diferentes perspectivas, sendo essencial para o progresso individual, em equipe e da organização como um todo."});

            break;
        
        case 5:
            resize([49, 54]);
            setMostrarDiv2(true);
            setContentSkils({...contentSkils, title: "CSS", text : "Minhas habilidades com CSS envolvem a estilização de páginas da web, controlando a apresentação visual. Desde a definição de cores, fontes e tamanhos até posicionamento e layout, utilizo o CSS para criar designs atraentes e responsivos."});

            break;
        case 6:
            resize([71, 80]);
            setMostrarDiv2(true);
            setContentSkils({...contentSkils, title: "JavaScript", text : "Desenvolvi conhecimento e me aprofundei em JavaScript, sendo a espinha dorsal da programação web. Domino conceitos como variáveis, loops e funções, além das novas funcionalidades da ES6+, como spread e desestruturação. Isso me permite criar interatividade dinâmica em páginas web, manipular dados e responder a eventos do usuário."});

            break;
        case 7:
            resize([96, 104]);
            setMostrarDiv2(true);
            setContentSkils({...contentSkils, title: "React.js", text : "Ao mergulhar no React.js, aprimorei a construção de interfaces de usuário reativas. Componentes modulares, estados e props são fundamentais, permitindo-me criar diversas aplicações web escaláveis e de fácil manutenção."});

            break;
        case 8:
            resize([119, 132]);
            setMostrarDiv2(true);
            setContentSkils({...contentSkils, title: "Integração de API Rest", text : "Na integração de API Rest, desenvolvi a habilidade de conectar sistemas de Back-end e aplicativos Front-end, trocando dados de forma eficiente. Aprendi a realizar requisições HTTP, processar respostas e integrar informações externas em meus projetos."});

            break;
        case 9:
            resize([144, 158]);
            setMostrarDiv2(true);
            setContentSkils({...contentSkils, title: "Java", text : "Java é uma linguagem versátil e robusta. Adquiri conhecimentos em orientação a objetos, manipulação de exceções e desenvolvimento de aplicações escaláveis, sendo minha referência para aprender Back-end e criar meus próprios endpoints."});

            break;
        default:
            setMostrarDiv1(false);
            setMostrarDiv2(false);
    }
  }

  const esconderDiv = () => {
    setArrowInfo(false);
    setMostrarDiv1(false);
    setContentSkils(null);
    setMostrarDiv2(false);
  };

  return (
    <div className={style.content}>
        {/* <div className={style.absImg}>
            <img src={css} alt="" />
            <img src={api} alt="" />
            <img src={js} alt="" />
            <img src={java} alt="" />
            <img src={react} alt="" />
        </div> */}

        <h1>Skils</h1>
        <div  className={style.skils_content}>
            <div>
                <div className={style.skil}>
                    <h2>Soft Skils</h2>
                    <ul>
                    
                        <li onMouseEnter={skilContent} onMouseLeave={esconderDiv} value={1}><IoIosArrowForward/>Trabalho em equipe</li>
                        <li onMouseEnter={skilContent} onMouseLeave={esconderDiv} value={2}><IoIosArrowForward/>Capacidade de interpessoal</li>
                        <li onMouseEnter={skilContent} onMouseLeave={esconderDiv} value={3}><IoIosArrowForward/>Criatividade</li>
                        <li onMouseEnter={skilContent} onMouseLeave={esconderDiv} value={4}><IoIosArrowForward/>Pensamento crítico</li>
                       
                        {mostrarDiv1 === true && (
                            <div className={`${style.absPos} ${style.floating}`} style={{ top: posicaoDiv.top  + 5}}>
                                <div className={`${style.absPos} ${style.floatingDetail}`}>
                                <MdDoubleArrow/>
                                </div>
                                {
                                    contentSkils && 
                                    <>
                                        <h3>{contentSkils.title}</h3>
                                        <span>{contentSkils.text}</span>
                                    </>
                                }
                            </div>
                        )}
                    </ul>
                </div>
                <div  className={style.skil}>
                    <h2>Hard Skils</h2>
                    <ul>
                        <li onMouseEnter={skilContent} onMouseLeave={esconderDiv} value={5}><IoIosArrowForward/>CSS</li>
                        <li onMouseEnter={skilContent} onMouseLeave={esconderDiv} value={6}><IoIosArrowForward/>JavaScript</li>
                        <li onMouseEnter={skilContent} onMouseLeave={esconderDiv} value={7}><IoIosArrowForward/>React.js</li>
                        <li onMouseEnter={skilContent} onMouseLeave={esconderDiv} value={8}><IoIosArrowForward/>Integração de API Rest</li>
                        <li onMouseEnter={skilContent} onMouseLeave={esconderDiv} value={9}><IoIosArrowForward/>Java</li>
                       
                        {mostrarDiv2 === true && (
                            <div className={`${style.absPos} ${style.floating}`} style={{ top: posicaoDiv.top + 5}}>
                            <div className={`${style.absPos} ${style.floatingDetail}`}>
                            <MdDoubleArrow/>
                            </div>
                            {
                                contentSkils && 
                                <>
                                    <h3>{contentSkils.title}</h3>
                                    <span>{contentSkils.text}</span>
                                </>
                            }
                        </div>
                        )}
                    </ul>
                </div>
                
            </div>
            <div>
                <img src={code} alt="" />
            </div>
        </div>
        <div className={style.interesting}>
            <span>
                Atualmente, estou inclinado ao desenvolvimento frontend, mas mantenho um grande interesse no backend. Estou dedicando meu 
                tempo aos estudos da tecnologia Java, com a intenção de estabelecer essa linguagem como minha base para essa área específica.
            </span>
        </div>
    </div>
  )
}
