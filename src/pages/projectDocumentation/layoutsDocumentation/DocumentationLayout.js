import styled from "styled-components";

export const Content = styled.div`
    width: 100%;
    background-color: #ebe9e8;
    padding: 20px;

    
`

export const Title = styled.h1`
    font-size: 28px;
    color: #202020;

    @media (max-width: 400px){
        font-size: 24px;
    }
`

export const SubTitle = styled.h2`
    font-size: 20px;
    color: #202020;

    @media (max-width: 400px){
        font-size: 20px;
    }
`

export const Text = styled.p`
    font-size: 16px;

    @media (max-width: 400px){
        font-size: 14px;
    }
`

export const Marg = styled.div`
    margin: ${({m1}) => m1 ? m1 : '0'}  ${({m2}) => m2 ? m2 : '0'}  ${({m3}) => m3 ? m3 : '0'}  ${({m4}) => m4 ? m4 : '0'};
`

export const Ul = styled.ul`
    margin-left: 20px;
    width: 100%;

    & li{
        font-weight: bold;
        margin-bottom: 10px;
    }
    @media (max-width: 400px){
        margin-left: 10px;

    }
`

export const ImageDeskTop = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    & img{
        max-width: 700px;
        width: 90%;

    }
`

export const ImageMobile = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    & img{
        max-width: 300px;
        width: 90%;

    }
`

export const Code = styled.textarea`
    position: relative;
    width:100%;
    height:230px;
    resize: none;
    font-size: 1rem;
    padding: 1rem;
    font-family: 'Consolas';
    white-space: pre-wrap;
    background-color: #161b22;
    border-radius: 5px;
    color: #fff;

    @media (max-width: 400px){
        font-size: 12px;
        height:160px;
        padding: .5rem;
    }
`

export const Note = styled.blockquote`
    margin-top: 10px;
    color: #636363;
    font-size: 16px;
    width: 100%;
    border-left: 3px solid #6e6e6f;
    padding-left: 5px;

`

export const Highlighted = styled.span`
    background-color: #a9a9a9;
    padding:2px 5px;
    border-radius: 5px;
`

export const MoreInformation = styled.div`
    background-color: #a9a9a9;
    max-width: 700px;
    width: 90%;
    padding: 10px;
    border-radius: 8px;
    margin: 0 auto 30px;

    & p{
        font-size: 16px;

        @media (max-width: 400px){
        font-size: 12px;
    }
    }
`
export const Back = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    & button{
        background-color: #0e76a8 ;
        max-width: 200px;
        width: 70%;
        padding: 10px;
        border-radius: 8px;
        margin: 0 auto 30px;
        font-size: 16px;
        border: none;
        cursor: pointer;
        font-weight: bold;
        color: #1a1616;

        &:hover{
            background-color: #208abd ;
            color: #000;
        }

        @media (max-width: 400px){
        font-size: 12px;
    }
    }
`


