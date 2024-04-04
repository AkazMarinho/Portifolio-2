import { Content, Marg,Title,Ul,Note} from "../layoutsDocumentation/DocumentationLayout"
import { BackToHome, MoreInfo, TemplateCopy, TemplateImgDesktop, TemplateImgMobile, TemplateSection, TemplateText } from "../layoutsDocumentation/TemplateSection"

import imgLogin from './img/login.jpg'
import imgHome from './img/home.jpg'
import imgQRcode from './img/QRcodeCo.jpg'
import imgNewStudent from './img/newStudent.jpg'
import imgIndividualFrequency from './img//individualFrequency.jpg'
import imgFrequency from './img/Frequency.jpg'
import imgError from './img/Error.jpg'
import { useEffect } from "react"


export function FrequencySystem() {

  useEffect(() => {
    window.scrollTo(0, 0); // Rolar para o topo ao montar o componente
  }, []);

  return (
    <Content>
        <Title>Sistema de frequência</Title>
        <Marg m1='10px' m2='0' m3='25px'>
          <hr />
        </Marg>

        <TemplateSection 
          subTitle="Sobre o Projeto" 
          text='O LOGOS é um cursinho popular de iniciativa voluntária dentro da Universidade Federal do Pará, Campus Castanhal, com objetivo de abordar conteúdo de forma preparatória para vestibulares e o ENEM(Exame Nacional do Ensino Médio). Com o desenvolvimento do Cursinho ao longo do tempo, foi necessário a implementação de um sistema de frequência para um gerenciamento de alunos, como verificações rápida dos seus dados e o controle de frequência. O sistema trás diversas vantagens, como o armazenamento de dados de frequência, onde eram guardados em documentos de planilha, e verificações rápida de dados. Quando um nove aluno era integrado ao sistema, era necessário organizar de forma manual, sendo agora instantâneo a organização na listagem de alunos. O sistema também trás mais segurança, pois é necessário uma identificação e senha para que se tenha acesso aos dados, onde a cada novo login, uma chave de acesso diferente é gerada.'
        />

        <TemplateSection 
          subTitle="Tecnologia utilizadas" 
          text={(
            <>
              O projeto é desenvolvido em 
              <a href="https://react.dev/" target="_blank" rel="noopener noreferrer"> React.js</a>
              , sendo utilizados bibliotecas e funcionalidades dessa tecnologia como useContext para ter mais segurança quanto as requisições, 
              <a href="https://styled-components.com/" target="_blank" rel="noopener noreferrer"> Styled Components</a> para o design system de alguns componentes, 
              <a href="https://reactrouter.com/en/main" target="_blank" rel="noopener noreferrer"> React Router Dom</a> para interação entre páginas, 
              <a href="https://axios-http.com/" target="_blank" rel="noopener noreferrer"> Axios</a> para ralizar as requisições Rest, 
              <a href="https://react-icons.github.io/react-icons/" target="_blank" rel="noopener noreferrer"> React icons</a> para utilização de ícones, em algumas partes, foi utilizado a biblioteca de estilização 
              <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer"> Tailwind</a> para uma rapidez de desenvolvimento.
            </> 
          )}
        />

        <TemplateSection 
          subTitle="Funcionalidades" 
          text={(
            <>
              <Ul>
                <li>Login</li>
                <Marg m1='10px' m2='0'/>
                <TemplateImgDesktop src={imgLogin}/>
                <TemplateText text='Onde é realizado a verificação se os dados informados estão corretos, caso estejam, o usuário será direcionado 
                  para a tela Home. O sistema tambem conta com um sistema de loader para quando o servidor esta verificando os dados e caso os dados 
                  estejam incorretos, irá aparecer uma mensagem informando o erro.' 
                />

                <Marg m1='10px' m2='0'/>
                <li>Home</li>
                <TemplateImgDesktop src={imgHome}/>

                <TemplateText text='Possui uma uma barra lateral que fica disponível durante o usuário estar logado, onde apresenta as opções de 
                  listagem de alunos, criar novo aluno e a frequência por dia. Étambme ossível ver os dados como o nome, CPF, ano de nascimento, 
                  email e duas ações que são a visualização do QRcode e visualização de dados de frequência individual do aluno.' />

                <Marg m1='10px' m2='0'/>
                <li>QR code</li>
                <TemplateImgMobile src={imgQRcode}/>

                <TemplateText text='O QRcode é necessário para validar a frequência do aluno via aplicativo, facilitando e tornando mais seguro o 
                sistema de frequência uma vez que cada QRcode é único, sendo imprescindível que cada aluno tenha o seu.'/>

                <Marg m1='10px' m2='0'/>
                <li>Criar novo aluno</li>
                <TemplateImgDesktop src={imgNewStudent}/>

                <TemplateText text='Pode ser adicionado dados de um novo aluno que esta sendo integrado ao cursinho, onde todos os campos devem ser 
                  preenchidos. Caso uma tentativa de enviar os dados incompletos, irá gerar um erro e ao ser criados os dados, o usuario será 
                  direcionado a tela Home.' 
                />

                <Marg m1='10px' m2='0'/>
                <li>Dados de frequência individual dos alunos</li>
                <TemplateImgDesktop src={imgIndividualFrequency}/>

                <TemplateText text='Fica disponível a frequência por mês do aluno, sendo que a frequência é definida apenas pelos dias em que o 
                  estudante tem presença ou falta justificada, assim como a opção de excluir os dados do aluno. A página conta com um sistema de 
                  justificação de falta caso o aluno tenha faltado, e também a revogação de uma falta justificada.' />
                <TemplateText text='Caso um aluno falte, é possivel justificar a sua falta, com um campo de motivo e dia especifico e se for 
                  realizado uma tentativa de justificar a falta em um dia que o aluno tenha presença,um erro será exibido. Para que tenha sucesso 
                  de envio, é necessario tambem que exista um motivo e uma data, pois uma tentativa de envio de dados vazios resultara na exibição 
                  de um erro.' />
                <TemplateText text='Caso seja verificado que um aluno com uma falta justificada não tenha um comprovação real, a falta justificada, 
                pode ser anulada.' />
                <TemplateText text='Para que dados de um aluno possam ser excluídos, uma tela de confirmação seja exibida.' />

                <Marg m1='10px' m2='0'/>
                <li>Frequência por dia</li>
                <TemplateImgDesktop src={imgFrequency}/>

                <TemplateText text='É possível visualizar um relatório diário de frequência, onde será mostrados todos os alunos, mas podendo ser 
                exibidos apenas os que tiveram presença ou apenas os que tiveram a falta justificada.' />

                <Marg m1='10px' m2='0'/>
                <li>Pagina inexistente</li>
                <TemplateImgDesktop src={imgError}/>

                <TemplateText text='Quando se estiver com acesso, caso seja feita uma tentativa de acessar uma rota indisponível, o sistema conta com uma tela de aviso sobre a página inexistente' />
              </Ul>
            </> 
          )}
        />

        <TemplateSection 
          subTitle="Dependências e versões" 
          text={(
            <div>
              <TemplateCopy text=' "axios": "^1.6.2", 
                  "react": "^18.2.0",
                  "react-dom": "^18.2.0",
                  "react-dotenv": "^0.1.3",
                  "react-icon-base": "^2.1.2",
                  "react-icons": "^4.12.0",
                  "react-router-dom": "^6.20.1",
                  "react-routes": "^0.2.6",
                  "react-scripts": "5.0.1",
                  "styled-components": "^6.1.8",'/>
            </div>

          )}
        />  

        <TemplateSection 
          subTitle="Possíveis problemas" 
          text='O site pode não rodar como esperado, pois é necessario uma chave de acesso para que se tenha acesso a todas as telas, porem, 
          caso queira apenas visualizar as telas, é necessario integrar a um sistema back end que tenha acesso a todas as rotas.'
        />  

        <TemplateSection 
          subTitle="Próximos passos" 
          text='O sistema não possui responsividade, então uma possivel atualziação é realizar responsividade no site todo para que o site se adeque 
            a dispositivos moveis O sistema não conta com a rota de editar dados de alunos, de forma que se um aluno tiver seus dados incorretos, 
            será necessario exclui-lo para poder criar novos dados com correção.'
        />  

        <MoreInfo src='https://github.com/AkazMarinho/frequence-project'/>
        <BackToHome/>

    </Content>
  )
}
