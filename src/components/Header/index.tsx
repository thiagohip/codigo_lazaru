import * as S from "./styles"
import Logo from "../../assets/truck.svg"
import { IPage } from "../../App"

export function Header({ setPage }: IPage) {
  return (
    <S.Header>
      <picture>
        <img src={Logo} alt="Logo" />
      </picture>
      <S.NavBar>
        <ul>
          <li>
            <a href="#" onClick={() => setPage(1)}>Página Inicial</a>
          </li>
          <li>
            <a href="#" onClick={() => setPage(2)}>Lista</a>
          </li>
          <li>
            <a href="#" onClick={() => setPage(3)}>Nova página</a>
          </li>
        </ul>
      </S.NavBar>
    </S.Header>
  )
}