import React from 'react'
import { useState, useEffect } from 'react'
import axios, { all } from 'axios'
import {ContainerEmAlta, EmAltaBox} from "./EmAltaStyle"

export default function EmAlta() {

    const [ filmes, setFilmes] = useState([])

    useEffect(() => {
       getFilmes()
    }, [filmes])

    const getFilmes = async () => {
        await axios
          .get(
            "https://api.themoviedb.org/3/movie/popular?api_key=86641266e64be009a74cb0721cf6c720&language=pt-BR&page=1"
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


  return (
    <EmAltaBox>
        <h1>Em Alta</h1>
        <ContainerEmAlta>
                {filmes.map((item) => (
                    
                    <section>
                        <img src={item.image} alt="" />
                        <h3>{item.title}</h3>
                        <p>{item.release_date}</p>
                    </section>
                ))}
        </ContainerEmAlta>
    </EmAltaBox>
  )
}
