import styled from "styled-components"
import Lupa from "./assets/white.png"
import  LupaBlack from "./assets/black.png"

export const Navegador = styled.nav`
width: 100vw;
justify-content: space-between;
display: flex;
padding: 1em 2em;
align-items: center;
position: fixed;
z-index: 2;
background-color:#0000003d;
backdrop-filter: blur(15px);
    figure{
        width: 33%;
        img{
            width: 7em;
        }
    }
`
export const Icon = styled.input`
    width: 2em;
    background: url(${Lupa});
    background-size: contain;
    background-repeat: no-repeat;
    border: none;
    text-align: center;
    border-radius: 20px;
    padding: 4px 6px;
    transition: 1s;
    transition-delay: 5s;
    &&:hover{
        width: 15em;
        background: url(${LupaBlack});
        background-color: white;
        background-size: contain;
        background-repeat: no-repeat;
        border: 1px solid white;
        border-radius 100em;
        padding-left: 2em;
        color: black;
        transition: 1s;
    }
`
export const UlMeio = styled.ul`
width: 33%;
list-style: none;
justify-content: center;
display: flex;
    li{
    padding: 1em 3em;
    }
    :hover{
        cursor: pointer;
        border-radius: 50px;
        background-color: #747474;
        transition: .5s;
    }
`
export const UlDireita = styled.ul`
display: flex;
justify-content: end;
align-items: center;
list-style: none;
width: 33%;
gap: 15px;

`
export const List = styled.li`
padding: 1em 2em;
    &&:hover{
        cursor: pointer;
        border-radius: 50px;
        background-color: #747474;
        transition: .5s;
    }
`