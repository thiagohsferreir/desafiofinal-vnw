import styled from "styled-components"

export const Icon = styled.li`

    padding: 0 1em;

    img{
        width: 70%;

    }
`
export const UlMeio = styled.ul `
display: flex;
list-style-type: none;
width: 33%;
justify-content: center;
li{
    padding: 1em 2em;

}
:hover{
    background-color: #747474;
    border-radius: 50px;
box-shadow: 0 3px #0000005C;
    
}
`

export const UlDireita = styled.ul `
display: flex;
align-items: center;
justify-content: end;
list-style-type: none;
width: 33%
    
`
export const List = styled.li`
padding: 1em 1.5em;
`
export const Navegador = styled.nav`
display: flex;
font-size: 1.1em;
position: fixed;
width: 100vw;
padding: 1em 2em;
background-color: #0000003d;
backdrop-filter: blur(20px);
align-items: center;
justify-content: space-between;
    figure{
        width: 33%;
        img{
            width: 7em;
        }
    }
}
`