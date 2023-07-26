/* eslint-disable */
import { createSlice } from '@reduxjs/toolkit'

const ArticlesSlice = createSlice({
  name: 'articles',
  initialState: {
    currentArticle: undefined,
    articlesList: [],
  },
  reducers: {
    addNewArticle(state, { payload }) {
      state.articlesList = [...state.articlesList, payload]
    },
    removeArticle(state, { payload }) {
      state.articlesList = state.articlesList.filter(({ id }) => id !== payload)
    },
  },
})

export const { addNewArticle, removeArticle } = ArticlesSlice.actions
export default ArticlesSlice.reducer
