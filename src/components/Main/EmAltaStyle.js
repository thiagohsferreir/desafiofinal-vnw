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
    margin: 1em;
    display: flex;
    flex-direction: column;
        h3{
            width: 100%;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            
        }
        p{
            overflow: hidden;
            width: 30px;
            height: 15px;
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
    align-self: start;

    }
    
`

export const Paginacao = styled.div`
display: flex;
gap: 2em;
padding:0 0 5em 0;
    button{
        padding: 1em;
        border: 3px solid white;
        background: none;
        color: white;
        border-radius: 50px;
        font-weight: bold;
        
    }
    :hover{
        cursor: pointer;
        transition: .5s;
        background: white;
        color: black;

    }
`
export const SearchBox = styled.div`
align-self: end;
width: 20%;
background: white;
overflow: hidden;
display: flex;
align-items: center;
border-radius: 20px;
padding: 5px;
img{
    width: 2em;
}
input{
    border: none;
    border-decoration: none;
    padding: 5px;
    width: 100%;
    color: black;
}
:focus{
    outline: none;
}
`