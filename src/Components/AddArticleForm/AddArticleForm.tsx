import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import Input from '../Input/Input.tsx'
import Button from '../Button/Button.tsx'
import { addNewArticle } from '../../app/articlesSlice.ts'
import { updateField, resetForm, editField } from '../../app/formSlice.ts'
import styles from './AddArticleForm.module.css'
import { useEffect } from 'react'

export type AddArticleFormProps = {
  id?: string
  mode?: 'edit' | 'update'
  onClose?: () => void
}
const AddArticleForm = ({ onClose, mode = 'update' }: AddArticleFormProps) => {
  const dispatch = useDispatch()
  const { title, author, subject, text, date } = useSelector(
    (state) => state.form
  )
  const { currentArticle } = useSelector((state) => state.articles)

  console.log(currentArticle)

  const onChange =
    (field) =>
    ({ target }) => {
      dispatch(updateField({ field, value: target.value }))
    }

//  useEffect(() => {
//     if (mode === 'edit') {
//       dispatch(editField(currentItem))
//     }
//   }, [])

  const onSubmit = (event) => {
    event.preventDefault()
    event.stopPropagation()
    dispatch(
      addNewArticle({ title, author, subject, text, date, id: uuidv4() })
    )
    dispatch(resetForm())
    if (typeof onClose === 'function') {
      onClose()
    }
  }

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <div className={styles.wrapper}>
        <div className={styles.section}>
          <Input
            role="textbox"
            aria-label="Заголовок"
            aria-description="Поле для ввода заголовка"
            classes={styles.input}
            value={title}
            onChange={onChange('title')}
            type="text"
            placeholder="Заголовок"
          />
          <Input
            role="textbox"
            aria-label="Тема"
            aria-description="Поле для ввода темы"
            classes={styles.input}
            value={subject}
            onChange={onChange('subject')}
            type="text"
            placeholder="Тема"
          />
        </div>
        <div className={styles.section}>
          <Input
            role="textbox"
            aria-label="Автор"
            aria-description="Поле для ввода Автора"
            classes={styles.input}
            type="text"
            value={author}
            onChange={onChange('author')}
            placeholder="Автор"
          />
          <Input
            type="date"
            classes={styles.input}
            value={date}
            onChange={onChange('author')}
          />
        </div>
      </div>

      <textarea
        role="textbox"
        aria-label="Автор"
        aria-description="Поле ля ввода текста"
        className={styles.textarea}
        value={text}
        onChange={onChange('text')}
        placeholder="Текст"
      />

      <Button type="submit" classes={styles.submitButton}>
        <span>Добавить статью</span>
      </Button>
    </form>
  )
}

export default AddArticleForm
