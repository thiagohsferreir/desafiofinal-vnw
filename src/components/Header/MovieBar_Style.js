import styled from "styled-components"
import Avatar from "./assets/Avatar.png"


export const Corpo = styled.section`
height: 100vh;
background-image: url(${(props) => props.BackGround || `${Avatar}`});
background-size: 100%;
display: flex;
align-items: end;
.rec.rec-arrow, .rec.rec-dot, .rec-dot_active{
    display: none;
}
`
export const CarouselContainer = styled.div`
width: 70%;

`
export const Info = styled.div`
color:white;
background-image: linear-gradient(#00000000, #0000002a, #000000);
width: 100%;
gap: .7em;
padding: 0 5em;
height: 50%;
    h1{
        font-size: 2em;
        width: 45vw;
    }
    h5{
        font-weight: 200;
    }
    div{
        display: flex;
        
        figure{
            img{
                width: 2em;
            }
        }
        h4{
            font-size: 1.5em;
            padding: 0 0 0 .5em;

            span{
                font-size: .6em;
                font-weight: 200;
            }
        }
    }
    p{
        width: 60%;
        height: 20vh;
        line-height: 1.5em;
        font-weight: 200;
        overflow: hidden;
    }
`
export const Imdb = styled.div`
    width: 5em;
padding: 0 1em;
    img{
        width: 4em;
    }
`

export const Botoes = styled.div`
padding-top: 1em;
display: flex;
gap: 2em;
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

`