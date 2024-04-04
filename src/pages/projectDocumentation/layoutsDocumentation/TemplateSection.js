import {Back, Code, ImageDeskTop, ImageMobile, Marg, MoreInformation, SubTitle, Text} from "../layoutsDocumentation/DocumentationLayout"
import { useRef } from "react";
import { FaCopy } from "react-icons/fa";
import styles from './Template.module.css'
import {useNavigate } from "react-router-dom";

export function TemplateSection ({subTitle, text}) {

    return (
        <div>
            <SubTitle>{subTitle}</SubTitle>
            <Marg m1='10px' m3='25px'>
                <Text>{text}</Text>
            </ Marg>
        </div>
    )
}

export function TemplateText({text}) {
    return (
        <div style={{paddingRight: '5px'}}>
            <Marg  m1='10px' m2='0'>
                <Text>{text}</Text>
            </Marg>
        </div>
    ) 
}

export function TemplateImgDesktop({src}) {
    return (
        <ImageDeskTop>
            <img src={src} alt="" />
        </ImageDeskTop>
    ) 
}

export function TemplateImgMobile({src}) {
    return (
        <ImageMobile>
            <img src={src} alt="" />
        </ImageMobile>
    ) 
}


export function TemplateCopy({text}) {
    const textRef = useRef(null);

    const copy = () => {
        if(textRef.current){
        textRef.current.select();
        document.execCommand('copy'); //copia o texto para a area de tranferecia do sipositivo
        window.getSelection().removeAllRanges(); 
        alert('Texto Copiado!');
    }
    }
    return (
        <div style={{position: 'relative', maxWidth: '600px'}} >
            <Code ref={textRef} value={text}
                readOnly
                > 
            </Code>
            <FaCopy onClick={copy} className={styles.svg} />
        </div>
    ) 
}

export function MoreInfo({src}) {
    return (
        <MoreInformation>
            <p>Para Mais informações sobre o projeto, acesse o <a href={src}>link</a> do repositório no GitHub</p>
        </MoreInformation>
    ) 
}

export function BackToHome({src}) {
    const Navigate = useNavigate();
    return (
        <Back>
            <button onClick={() => Navigate('/')}>Voltar para o portfólio</button>
            
        </Back>
    ) 
}







