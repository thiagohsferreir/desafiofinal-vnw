import styled from "styled-components"

export const Teste = styled.div`
color: white;
display: flex;
background-color: black;
padding: 2em 4em;
flex-direction: column;
width: 100%;
gap: 1em;
height: 75vh;
h1{
    width: 28%;
    font-size: 1.5em;
    text-align: center;
}`

export const CarouselContainer = styled.div`
width: 100%;
height: 100vh;
flex-direction: column;
display: flex;
justify-self: center;

.rec.rec-item-wrapper{
    height: 100%;
    p{
        width: 2.3em;
        height:1.5em;
        overflow: hidden;
    }
    
}
.rec.rec-arrow {
    background-color: transparent;
    border: none;
    color: white;
    outline: none;
    font-size: 3em;
    box-shadow: none;
}
.rec-dot{
    background: white;
}
.rec.rec-arrow-left{
}
.rec.rec-arrow:hover {
   
    color: #707070;
    


}


    img{
        width: 90%;
    }
    h2{
        font-size: .8em;
        width: 100%;
    }
    p{
        font-weight: 200;
        font-size: .8em
    }

`