import styled from "styled-components"

export const ContainerEmAlta = styled.section`
display: flex;
width: 100%;
padding: 3em 0;
justify-content: center;
flex-wrap: wrap;
font-size: .8em;
    img{
        width: 100%;
        justify-self: center;
    }
    section{
    width: 17%;
    align-items: center;
    margin: 1em;
    display: flex;
    flex-direction: column;
        h3{
            width: 100%;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            
        }
}
`

export const EmAltaBox = styled.div`
width: 90%;
display:flex;
justify-content: center;
align-items: center;
flex-direction: column;
    h1{
    width: 14%;
    font-size: 1.5em;
    text-align: center;
    align-self: start;

    }
`