import styled from "styled-components"

export const Navegador = styled.nav`
width: 100vw;
justify-content: space-between;
display: flex;
padding: 1em 2em;
align-items: center;
position: fixed;
background-color:#0000003d;
backdrop-filter: blur(15px);
    figure{
        width: 33%;
        img{
            width: 7em;
        }
    }
`
export const Icon = styled.li`
    img{
        width:1.5em;
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

`
export const List = styled.li`
padding: 1em 2em;

`