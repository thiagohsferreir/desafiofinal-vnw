import React from 'react'

import { Corpo, Info, Imdb, Botoes } from "./MovieBar_Style"
//assets
import Star from "./assets/estrela.png"
import IMDB from "./assets/imdb.png"
import Play from "./assets/play.png"
import Filme from "./assets/filme.png"
export default function MovieBar() {
    return (
        <Corpo>
            <Info>
                <h1>Avatar: o Caminho da Água</h1>
                <h5>3hr 23 min | Fantasia, Família | 2023</h5>
                <div>
                    <figure><img src={Star} alt="" /></figure>
                    <h4>9,9 <span>/10</span></h4>
                    <Imdb>
                        <img src={IMDB} alt="" />
                    </Imdb>
                </div>
                <p>Após formar uma família, Jake Sully e Ney'tiri fazem de tudo para ficarem juntos. No entanto, eles devem sair de casa e explorar as regiões de Pandora quando uma antiga ameaça ressurge, e Jake deve travar uma guerra difícil contra os humanos.</p>
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
            </Info>
        </Corpo>
    )
}
