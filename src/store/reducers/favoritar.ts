import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type FavoritarState = {
  favoritos: Produto[]
}

const initialState: FavoritarState = {
  favoritos: []
}

const favoritarSlice = createSlice({
  name: 'favoritar',
  initialState,
  reducers: {
    favoritar: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload

      if (state.favoritos.find((p) => p.id === produto.id)) {
        const favoritosSemProduto = state.favoritos.filter(
          (p) => p.id !== produto.id
        )
        state.favoritos = favoritosSemProduto
      } else {
        state.favoritos.push(produto)
      }
    }
  }
})

export const { favoritar } = favoritarSlice.actions
export default favoritarSlice.reducer
