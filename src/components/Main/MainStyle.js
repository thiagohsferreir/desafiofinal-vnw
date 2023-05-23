import styled from "styled-components"

export const Principal = styled.div`
color: white;
padding-top: 3em;
height: 50vh;
margin-top: -1em;
display: flex;
flex-direction: column;
align-items: center;
gap: 2em;
background-color: black;
`

export const NavMain = styled.nav`
width: 90%;

ul{
    display: flex;
    list-style: none;
    justify-content: space-evenly;
    li{
        padding: 0 1em 1em 1em;
    }
    :hover{
    margin-bottom: -3px;
    border-bottom: 3px solid white;
    cursor: pointer;
}

`
export const Pesquisa = styled.input``