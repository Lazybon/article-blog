import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import styles from './ArticleList.module.css'
import PreviewLink from '../PreviewLink/PreviewLink.tsx'
import Button from '../Button/Button.tsx'
import { removeArticle } from '../../app/articlesSlice.ts'
import Modal from '../Modal/Modal.tsx'
import AddArticleForm from '../AddArticleForm/AddArticleForm.tsx'

const ArticleList = () => {
  const { articlesList } = useSelector((state) => state.articles)
  const dispatch = useDispatch()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <section className={styles.container}>
        <h2 className={styles.header}>Articles list</h2>
        <ul className={styles.content}>
          {articlesList.map(({ title, id }) => (
            <PreviewLink
              key={id}
              to={`/articles/${id}`}
              id={id}
              controls={
                <>
                  <Button onClick={() => setIsOpen(true)}>
                    Реадактировать
                  </Button>
                  <Button
                    style={{ marginLeft: 16 }}
                    onClick={() => dispatch(removeArticle(id))}
                  >
                    Удалить
                  </Button>
                </>
              }
            >
              {title}
            </PreviewLink>
          ))}
        </ul>
      </section>
      {isOpen && (
        <Modal
          title="Добавить статью"
          classes={styles.formModal}
          onClose={() => setIsOpen(false)}
        >
          <AddArticleForm mode="edit" onClose={() => setIsOpen(false)} />
        </Modal>
      )}
    </>
  )
}

export default ArticleList
