import Header from './components/Header'
import Produtos from './containers/Produtos'

import { useSelector } from 'react-redux'
import { RootReducer } from './store'

import { GlobalStyle } from './styles'
import { Provider } from 'react-redux'
import { store } from './store'
import Rodape from './components/Rodape'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

function App() {
  const favoritos = useSelector(
    (state: RootReducer) => state.favoritar.favoritos
  )

  return (
    <Provider store={store}>
      <GlobalStyle />
      <div className="container">
        <Header />
        <Produtos favoritos={favoritos} />
        <Rodape />
      </div>
    </Provider>
  )
}

export default App
