import Carousel_Api from "./Carousel_Api"
import {Principal, NavMain} from "./MainStyle"
export default function Main() {
  return (
    <Principal>
      <NavMain>
        <ul>
          <li>Popular</li>
          <li>Drama</li>
          <li>Ação</li>
          <li>Aventura</li>
          <li>Comédia</li>
          <li>Crime</li>
          <li>Fantasia</li>
          <li>Família</li>
        </ul>
      </NavMain>
    <Carousel_Api/>
    </Principal>
  )
}
