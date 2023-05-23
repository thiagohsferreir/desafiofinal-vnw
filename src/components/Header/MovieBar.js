import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Carousel from "react-elastic-carousel"
//STYLE
import { Car, CarouselContainer, Info, Imdb, Botoes } from "./MovieBar_Style"
//assets
import Star from "./assets/estrela.png"
import IMDB from "./assets/imdb.png"
import Play from "./assets/play.png"
import Filme from "./assets/filme.png"
import Avatar from "./assets/Avatar.png"

export default function MovieBar() {


  const [filmes, setFilmes] = useState([])
  const [fundo, setFundo] = useState([])


  useEffect(() => {
    getFilmes()

  })

  const getFilmes = async () => {
    await axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=86641266e64be009a74cb0721cf6c720&language=pt-BR",
      )
      .then((resposta) => {
        const allApi = resposta.data.results.map((item) => {
          return {
            ...item,
            image: `https://image.tmdb.org/t/p/original/${item.backdrop_path}`,
          };
        });

        setFilmes(allApi);
        setFundo(arrayAntiga => arrayAntiga = filmes.slice(0, 1));


      })
      .catch((error) => {
        alert(`desculpe, você teve um problema na sua api ${error}`);
      });
  };
  

  return (

    <CarouselContainer>

      <Carousel enableAutoPlay autoPlaySpeed={10000} enableMouseSwipe={false} >

        {filmes.map((item) => (
          <Car BackGround={`${item.image}`}>

            <Info>
              <section >
                <h1>{item.title}</h1>
                <h5>{item.release_date}</h5>
                <div>
                  <figure><img src={Star} alt="" /></figure>
                  <h4>{item.vote_average} <span>/10</span></h4>
                  <Imdb>
                    <img src={IMDB} alt="" />
                  </Imdb>
                </div>
                <p>{item.overview}</p>
                <Botoes>
                  <button>
                    <img src={Play} alt="" />
                    Assistir agora
                  </button>
                  <button>
                    <img src={Filme} alt="" />
                    Trailer
                  </button>
                </Botoes>
              </section>
            </Info>
          </Car>

        ))}
      </Carousel>
    </CarouselContainer>

  )
}

