import { useEffect } from "react";
import { Content, Marg, Note, Title, Ul } from "../layoutsDocumentation/DocumentationLayout";
import { BackToHome, MoreInfo, TemplateCopy, TemplateImgDesktop, TemplateImgMobile, TemplateSection, TemplateText } from "../layoutsDocumentation/TemplateSection";

import homeDesk from './img/home.png'
import homeMobile from './img/mobilehome.png'
import detailsDesk from './img/details.desk.png'
import detailsMobile from './img//mobiledetails.png'

export function Portfolio() {

    useEffect(() => {
        window.scrollTo(0, 0); // Rolar para o topo ao montar o componente
      }, []);
  return (
    <div>
        <Content>
            <Title>Apresentação do Portfólio</Title>
            <Marg m1='10px' m2='0' m3='25px'>
            <hr />
            </Marg>

            
            <TemplateSection 
                subTitle="Sobre o Projeto" 
                text='O sistema web foi desenvolvido com o objetivo de apresentar de forma abrangente minha vida profissional. Nele, são destacadas minhas habilidades técnicas, experiências profissionais e projetos, oferecendo detalhes precisos sobre cada um. Além disso, o sistema também inclui informações de contato para facilitar o acesso e a comunicação. Para garantir uma experiência otimizada para os usuários, foi implementado uma abordagem responsiva, que se adapta perfeitamente a diferentes dispositivos e tamanhos de tela. Isso significa que, independentemente do dispositivo utilizado para acessar o sistema, seja um computador desktop, tablet ou smartphone'
            />

            <TemplateSection 
                subTitle="Sobre o Projeto" 
                text={(
                    <>
                        O projeto é desenvolvido em 
                        <a href="https://react.dev/" target="_blank" rel="noopener noreferrer"> React.js </a>, 
                        sendo utilizados bibliotecas e funcionalidades dessa tecnologia como 
                        <a href="https://styled-components.com/" target="_blank" rel="noopener noreferrer"> Styled Component </a> para o design system de alguns componentes,
                        <a href="https://reactrouter.com/en/main" target="_blank" rel="noopener noreferrer"> React Router Dom </a>
                        para interação entre páginas, 
                        <a href="https://react-icons.github.io/react-icons/" target="_blank" rel="noopener noreferrer"> React icons </a> 
                        para utilização de ícones.
                    </>
                )}
            />

            <TemplateSection
                subTitle="Funcionalidades" 
                text={(
                    <>
                    <Ul>
                        <li>Home</li>
                        <Marg m1='10px' m2='0'/>
                        <TemplateImgDesktop src={homeDesk}/>
                        <TemplateText text='Contém as informções principais do site.' 
                        />

                        <Marg m1='10px' m2='0'/>
            
                        <TemplateImgMobile src={homeMobile}/>

                        <Note>não foi possivel mostrar toda a tela, pois o navegador Chrome aparentemente limita a altura máxima da captura de tela</Note>

                        <Marg m1='10px' m2='0'/>

                        <li>Páginas com informações sobre cada projeto</li>
                        <Marg m1='10px' m2='0'/>
                        <TemplateImgDesktop src={detailsDesk}/>
                        <TemplateText text='São paginas reponsavel por detalhar mais sobre cada projeto, com imagens e informações em texto.' 
                        />

                        <Marg m1='10px' m2='0'/>
            
                        <TemplateImgMobile src={detailsMobile}/>
                    </Ul>

                    </>
                )}>
            </TemplateSection>

            
        <TemplateSection 
          subTitle="Dependências necessárias e versão" 
          text={(
            <div>
              <TemplateCopy text=' "react": "^18.2.0",
                    "react-dom": "^18.2.0",
                    "react-icons": "^5.0.1",
                    "react-router-dom": "^6.22.1",
                    "react-scripts": "5.0.1",
                    "styled-components": "^6.1.8"'/>
            </div>

          )}
        />

        
        <TemplateSection 
          subTitle="Possíveis problemas" 
          text='O site pode apresentar problemas na hora de carregar os dados por um pequeno periodo de tempo, porem, sendo perceptível.'
        />  

        <TemplateSection 
          subTitle="Próximos passos" 
          text='O sistema será melhorado conforme mais projetos serem desenvolvidos e incluidos.'
        />  

        <MoreInfo src='https://github.com/AkazMarinho/Portifolio-2'/>
        <BackToHome/>

        </Content>
    </div>
  )
}
