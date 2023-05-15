import styled from "styled-components"
import Avatar from "./assets/Avatar.png"

export const Corpo = styled.section`
background-image: url(${Avatar});
background-size: cover;
height: 100vh;
display: flex;
align-items: end;
`
export const Info = styled.div`
color:white;
background-image: linear-gradient(#00000000, #0000002a, #000000);
width: 100%;
display: flex;
flex-direction: column;
gap: .7em;
padding: 0 5em;
height: 50%;
    h1{
        font-size: 2em;
    }
    h5{
        font-weight: 200;
    }
    div{
        display: flex;
        gap: 1em;
        figure{
            img{
                width: 2em;
            }
        }
        h4{
            font-size: 1.5em;

            span{
                font-size: .6em;
                font-weight: 200;
            }
        }
    }
    p{
        width: 42%;
        line-height: 2em;
        font-weight: 200;

    }
`
export const Imdb = styled.div`
    width: 5em;

    img{
        width: 4em;
    }
`

export const Botoes = styled.div`
button:nth-child(1){
    background-color: #D53A00;
    padding: 1em 2em;
    display: flex;
    align-items: center;
    font-size: 1em;
    font-weight: bold;
    color: white;
    gap: 10px;
    border: none;

    border-radius: 50px;
    img{
        width: 1.5em;
    }
}
button:nth-child(2){
    background-color: #717171;
    padding: 1em 4em;
    border: none;
    display: flex;
    align-items: center;
    font-size: 1em;
    font-weight: bold;
    color: white;
    gap: 10px;
    border-radius: 50px;
    img{
        width: 1.5em;
    }
}
`