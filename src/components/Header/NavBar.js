import React from 'react'
import { Navegador, Icon, UlMeio, UlDireita, List } from './NavBar_Style.js'
//assets
import Logo from "./assets/LogoDell.png"
import Lupa from "./assets/Icon ionic-ios-search@2x.png"
export default function NavBar() {
  return (
    <Navegador>
                <figure>
                    <img src={Logo} alt="" />
                </figure>
                <UlMeio>
                    <li>Séries</li>
                    <li>Filmes</li>
                </UlMeio>
                <UlDireita>
                    <Icon><img src={Lupa} alt="" /></Icon>
                    <List>Filtro</List>
                    <List>Login</List>
                </UlDireita>
            </Navegador>
  )
}
