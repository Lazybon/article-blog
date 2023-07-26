/* eslint-disable */
import { createSlice } from '@reduxjs/toolkit'

export type formStateTypes = {
  title: string
  subject: string
  author: string
  date: string
  text: string
}

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
const formSlice = createSlice({
  name: 'form',
  initialState: {
    title: '',
    subject: '',
    author: '',
    date: '',
    text: '',
  } as formStateTypes,
  reducers: {
    updateField: (state, { payload }) => {
      // todo: разобраться чо за нах тут с тс
      state[payload.field] = payload.value
    },
    resetForm: (state) => {
      state.title = ''
      state.subject = ''
      state.author = ''
      state.date = ''
      state.text = ''
    },
  },
})

export const { updateField, editField, resetForm } = formSlice.actions
export default formSlice.reducer
