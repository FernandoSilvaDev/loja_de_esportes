import { useSelector } from 'react-redux'
import Carousel from 'react-bootstrap/Carousel'

import * as S from './styles'

import cesta from '../../assets/cesta.png'
import { paraReal } from '../Produto'

import { RootReducer } from '../../store'

const Header = () => {
  const itens = useSelector((state: RootReducer) => state.carrinho.itens)
  const favoritos = useSelector(
    (state: RootReducer) => state.favoritar.favoritos
  )

  const valorTotal = itens.reduce((acc, item) => {
    acc += item.preco
    return acc
  }, 0)

  return (
    <div>
      <Carousel interval={3000} fade>
        <Carousel.Item>
          <img className="d-block w-100" src="/img/Desk.jpg" alt="Slide 2" />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/img/desk_nike.png"
            alt="Slide 3"
          />
        </Carousel.Item>
      </Carousel>
      <S.Header>
        <h1>Loja de Esportes</h1>
        <div>
          <span>{favoritos.length} favoritos</span>
          <img src={cesta} />
          <span>
            {itens.length} itens, valor total: {paraReal(valorTotal)}
          </span>
        </div>
      </S.Header>
    </div>
  )
}

export default Header
