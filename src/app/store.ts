import { configureStore } from '@reduxjs/toolkit'
import formReducer from './formSlice.ts'
import articlesList from './articlesSlice.ts'

// eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-assignment
export const store = configureStore({
  reducer: {
    form: formReducer,
    articles: articlesList,
  },
})

export type StoreType = ReturnType<typeof store.getState>

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
