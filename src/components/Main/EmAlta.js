import React from 'react'
import Lupa from "./assets/lupa.png"
import { useState, useEffect } from 'react'
import axios, { all } from 'axios'
import {ContainerEmAlta, EmAltaBox, Paginacao, SearchBox} from "./EmAltaStyle"

export default function EmAlta() {

    const [ filmes, setFilmes] = useState([])
    const [ pagina, setPagina] = useState(1)
    const [filtrados, setFiltrados] = useState([])
    const [input, setInput] = useState('')
    const [mode, setMode] = useState(false)


    useEffect(() => {
       getFilmes()
       filtrar()
    }, [filmes, filtrados, mode, input])

  const paginas = () => {
    return setPagina(pagina + 1)
  }    
  const paginasant = () => {
     if(pagina > 1) {
      setPagina(pagina -1)
     } else {
        
     }
  }    
    

    const getFilmes = async () => {
        await axios
          .get(
            `https://api.themoviedb.org/3/movie/popular?api_key=86641266e64be009a74cb0721cf6c720&language=pt-BR&page=${pagina}`
          )
          .then((resposta) => {
            const allApi = resposta.data.results.map((item) => {
              return {
                ...item,
                image: `https://image.tmdb.org/t/p/w500/${item.poster_path}`
              };
            });
            setFilmes(allApi);
          })
          .catch((error) => {
            alert(`desculpe, você teve um problema na sua api ${error}`);
          });
      };


      const filtrar = () => {
          const FilmesFiltrados = filmes.filter((item) => {
            if(item.title.toLowerCase().includes(input.toLowerCase())){
              return true 
            } else {
              return false
            }
          })
          setFiltrados(FilmesFiltrados)
      
      }

  return (
    <EmAltaBox>
        <h1>Em Alta</h1>
        <SearchBox>
          <img onClick={() => setMode(!mode)} src={Lupa} alt='Lupa' />
          <input type='search' show={mode === false ? 'none' :'initial'}  onChange={(e) => setInput(e.target.value)} /></SearchBox>
        <ContainerEmAlta>
                {filtrados.map((item, index) => (
                    
                    <section key={index}>
                        <img src={item.image} alt="" />
                        <h3>{item.title}</h3>
                        <p>{item.release_date}</p>
                    </section>
                ))}
                
              
              
        </ContainerEmAlta>
        <Paginacao>
          <button onClick={paginasant}> Anterior </button>
                <button id='anterior' onClick={paginas}> Seguinte </button>
        </Paginacao>
    </EmAltaBox>
  )
}


