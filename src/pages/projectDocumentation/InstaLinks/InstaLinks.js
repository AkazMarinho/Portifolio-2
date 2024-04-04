import { Content, Marg, Title, Ul } from "../layoutsDocumentation/DocumentationLayout";
import { BackToHome, MoreInfo, TemplateCopy, TemplateImgDesktop, TemplateImgMobile, TemplateSection, TemplateText } from "../layoutsDocumentation/TemplateSection";

import homeDesk from './img/desktop.png'
import homeDeskdark from './img/desktodark.png'
import mobile from './img/mobile.png'

export default function InstaLinks() {
  return (
    <Content>
        <Title>Links de apresentação de redes sociais</Title>
        <Marg m1='10px' m2='0' m3='25px'>
          <hr />
        </Marg>

        <TemplateSection 
          subTitle="Sobre o Projeto" 
          text='Com uma necessidade de mostrar links importantes de minhas principais redes sociais atraves do meu instagram, tive a ideia de criar uma versão do Linktree com as minhas habilidades, de forma que o resultdo final ficou como esperado, onde foi adicionado tambem um sistema de temas light e dark mode para uma melhor vizualização, e tambem resposividade.'
        />

        <TemplateSection 
          subTitle="Tecnologia utilizadas" 
          text={(
            <>
                O projeto é desenvolvido em 
                <a href="https://react.dev/" target="_blank" rel="noopener noreferrer"> React.js </a> e suas tecnologias como 
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
                <TemplateText text='É um projeto simples e possui apenas uma tela, sendo responvavel por mostrar os links:
                ' />

                <Marg m1='10px' m2='0'/>
                <TemplateImgDesktop src={homeDeskdark}/>
                <TemplateText text='Possui tambem uma versão dark mode que pode ser falcilmente alterada' />
       
                <Marg m1='10px' m2='0'/>
                <TemplateImgMobile src={mobile}/>
                <TemplateText text='e conta com uma versão responsiva' />

              </Ul>
            </> 
          )}
        />

        <TemplateSection 
          subTitle="Dependências necessárias e versão" 
          text={(
            <div>
              <TemplateCopy text='"react": "^18.2.0",
"react-dom": "^18.2.0",
"react-icons": "^5.0.1",
"react-scripts": "5.0.1",
"web-vitals": "^2.1.4"'/>
            </div>

          )}
        />


        <TemplateSection 
          subTitle="Possíveis problemas" 
          text='devido as imagens selecionadas serem de grande qualidade, pode demorar um pouco para abrir em seu dispositivo'
        />  

        <TemplateSection 
          subTitle="Próximos passos" 
          text='Conforme mais links forem adicionados, elesserão adicionados no projeto. O projeto pode ter um gerenciador com um banco de dados para que não seja necessario a remoção ou criação manuais de links'
        />  

        <MoreInfo src='https://github.com/AkazMarinho/link-instagram'/>
        <BackToHome/>
    </Content>
  )
}
