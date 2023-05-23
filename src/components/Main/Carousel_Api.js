import { useState, useEffect } from 'react'
import axios, { all } from 'axios'
import {Teste, CarouselContainer} from "./CarouselComponent"
import Carousel from "react-elastic-carousel"

export default function Carousel_Api() {


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
        <Teste>

            <h1>Ultimos Lançamentos</h1>
             
            <CarouselContainer>
                <Carousel itemsToShow={5} itemsToScroll={4} >
                    
                {filmes.map((item) => (
                    
                    <section>
                        <img src={item.image} alt="" />
                        <h2>{item.title}</h2>
                        <p>{item.release_date}</p>
                    </section>
                ))}
                </Carousel>
            </CarouselContainer>
        </Teste>
    )
}