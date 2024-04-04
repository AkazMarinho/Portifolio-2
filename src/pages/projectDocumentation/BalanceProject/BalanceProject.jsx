import { useEffect } from "react";
import { Content, Marg,Title,Ul,Note } from "../layoutsDocumentation/DocumentationLayout";
import { BackToHome, MoreInfo, TemplateCopy, TemplateImgDesktop, TemplateImgMobile, TemplateSection, TemplateText } from "../layoutsDocumentation/TemplateSection"
import homeDesk from './img/homeDesk.png'
import homeMobile from './img/homeMobile.png'
import userDesk from './img/userDetailsdesktop.png'
import userMobile from './img/userDetailsMobile.png'


export default function BalanceProject() {
    useEffect(() => {
        window.scrollTo(0, 0); // Rolar para o topo ao montar o componente
      }, []);
  return (
    <Content>
        <Title>Sistema balance</Title>
        <Marg m1='10px' m2='0' m3='25px'>
          <hr />
        </Marg>

        <TemplateSection 
          subTitle="Sobre o Projeto" 
          text='O Balance é um projeto da Universidade Federal do Pará, Campus Castanhal, que tem como finalidade estudar, demonstrar e promover atividades físicas com o público externo da instituição, sendo majoritariamente composto por pessoas da Faculdade de Educação Física. O desenvolvimento de um sistema web surgiu com a necessidade de democratização dos dados gerados por esses estudos. Dessa forma, foi criado um aplicativo que conta os passos automaticamente e também está integrado com um acelerômetro para verificar a distância percorrida. Esses dados são enviados a um back-end, e minha função foi implementar um sistema web para exibir esses dados recolhidos. O sistema está disponível também para dispositivos móveis, com responsividade aplicada. A fim de lidar com uma grande quantidade de dados, o sistema oferece uma funcionalidade de busca, permitindo aos usuários encontrar rapidamente as informações desejadas.'
        />

        <TemplateSection 
          subTitle="Tecnologia utilizadas" 
          text={(
            <>
                O projeto é desenvolvido em 
                <a href="https://react.dev/" target="_blank" rel="noopener noreferrer"> React.js </a> 
                sendo utilizados bibliotecas e funcionalidades dessa tecnologia como 
                <a href="https://reactrouter.com/en/main" target="_blank" rel="noopener noreferrer"> React Router Dom </a>
                para interação entre páginas, 
                <a href="https://axios-http.com/" target="_blank" rel="noopener noreferrer"> Axios</a> para ralizar as requisições Rest, 
                <a href="https://react-icons.github.io/react-icons/" target="_blank" rel="noopener noreferrer"> React icons </a>
                 para utilização de ícones. Para mostrar o gráfico, foi implemetado a biblioteca externa <a href="https://apexcharts.com/" target="_blank" rel="noopener noreferrer"> Apex charts</a>.
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
                <TemplateText text='Mostra as pessoas cadastradas no sistema, com informações de nome, email e se praticam atividades físicas, sendo essa lista clicável para direcionar para os detalhes da pessoa.' 
                />

                <Marg m1='10px' m2='0'/>
       
                <TemplateImgMobile src={homeMobile}/>

                <TemplateText text='A versão mobile conta apenas com nome e email'/>

                <Marg m1='10px' m2='0'/>
                <li>Dados individuais</li>
                <TemplateImgDesktop src={userDesk}/>

                <TemplateText text='Os dados informados são relativos ao que seçao recolhidos pelo aplicativo, como dados pessoais, dados de distância total, IMC e passos por dia, uma vez que os dados que são vistos são sempre dos últimos 7 dias.' 
                />

                <Marg m1='10px' m2='0'/>
                <li>Dados de frequência individual dos alunos</li>
                <TemplateImgMobile src={userMobile}/>
              </Ul>
            </> 
          )}
        />

        <TemplateSection 
          subTitle="Dependências necessárias e versão" 
          text={(
            <div>
              <TemplateCopy text=' "axios": "^1.6.5",
                    "react": "^18.2.0",
                    "react-apexcharts": "^1.4.1",
                    "react-dom": "^18.2.0",
                    "react-icons": "^5.0.1",
                    "react-router-dom": "^6.21.2",
                    "react-scripts": "5.0.1",
                    "web-vitals": "^2.1.4"'/>
            </div>

          )}
        />


        <TemplateSection 
          subTitle="Possíveis problemas" 
          text='Ao acessar o site pela primeira vez, pode haver um atraso de alguns minutos devido ao servidor da API. No entanto, após esse período inicial, as requisições devem ocorrer em uma velocidade normal.'
        />  

        <TemplateSection 
          subTitle="Próximos passos" 
          text='O sistema está em fase inicial, então, espera-se uma grande evolução nas suas funcionalidades'
        />  

        <MoreInfo src='https://github.com/AkazMarinho/Projeto_Balance'/>
        <BackToHome/>
    </Content>
  )
}
