
import style from './ProfessionalExperience.module.css';
import { Role } from './Role';


export default function ProfessionalExperience() {
  
  return (
    <div className={style.content} >
        <h1>Experiência profisional</h1>
        
        <Role 
          inMon='ABR' 
          inYe={2023} 
          outMon='PRESENTE' 
          role='Projeto Balance App'
          local='UFPA'
          type='Voluntário' 
          contend='O projeto tem como ojetivo criar um aplicativo que colete os dados de atividades fisicas e armazendando em um banco de dados,a sendo realzado en conjunto com a faculdade de educação fisica, onde minha responsabilidade é criar o sistema WEB que consome os dados salvos em um back-end.'
        />
       
        <Role 
          inMon='JAN' 
          outYe='PRESENTE'
          role=' Projeto LOGOS' 
          local='UFPA'
          type='Voluntário' 
          contend='O projeto foi criado para facilitar o gerenciamento de dados de alunos e suas freqeuncias no cursinho popular LOGOS, onde minha contribuição foi criar um sistema WEB de criação, exclusão e listagem de dados de alunos, bem como mostrar, justificar e anular a frequência dos mesmos.'
        />

        <Role 
          inMon='JUN' 
          outYe={2023} 
          outMon='SET' 
          role='Suporte Técnico em Telecom' 
          local='Nevoli Telecon'
          type='Estágio' 
          contend='Minha responsabilidade durante o estagio foram realizar atendimento e suporte tecnico a cliente de telecom, avaiando problemas e apresentado soluções via chat e ligação, tendo acesso remoto a dispositivo como ONU e Roteadores, podendo fazer alterações na rede do usuário, reinicializações e ate mesmo reconfiguraração nesses dispositivos.'
        />
        <Role 
          inYe={2022} 
          inMon='JUN' 
          outYe={2023} 
          outMon='JUN' 
          role='Auxiliar administrativo' 
          local='UFPA'
          type='Bolsa de extensão' 
          contend='Arquivologia, auxiliar alunos com o sistema interno da faculdade, receber e amitir documentos, entrega de diplomas, auxiliar na area tecnológica do setor como edição de imagens e suporte a computadores e impressoras.'
        />

    </div>
  )
}
