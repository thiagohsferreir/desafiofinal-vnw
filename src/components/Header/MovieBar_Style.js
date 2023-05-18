import styled from "styled-components"
import Avatar from "./assets/Avatar.png"



export const Car = styled.div`
background-image: url(${(props) => props.BackGround || `${Avatar}`});
background-size: cover;
height: 90vh;
width: 100vw;
display: flex;
align-items: end;

`
export const CarouselContainer = styled.div`
width: 100%;
overflow:hidden;
.rec-carousel{
    background: black;
width: 110vw;

}
.rec.rec-arrow, .rec.rec-dot, .rec-dot_active{
    display: none;

}

`
export const Info = styled.div`
color:white;
background-image: linear-gradient(to bottom,  #00000000, #0000003a, #000000);

width: 100%;
padding: 8em 5em;
height: 100%;
display: flex;
align-items: end;
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
        
        width: 40%;
        height: 10vh;
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
    :hover{
        cursor: pointer;
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
    :hover{
        cursor: pointer;
`
