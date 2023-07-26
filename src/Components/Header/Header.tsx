import { useState } from 'react'
import { Link } from 'react-router-dom'
import Modal from '../Modal/Modal'
import Button from '../Button/Button'
import AddArticleForm from '../AddArticleForm/AddArticleForm.tsx'
import styles from './Header.module.css'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <header className={styles.header}>
        <h2>My Blog</h2>
        <nav className={styles.navigation}>
          <Link to="/" className={styles.link}>
            Главная
          </Link>
          <Link to="/articles" className={styles.link}>
            Список статей
          </Link>
          <Button classes={styles.button} onClick={() => setIsOpen(true)}>
            Добавить статью
          </Button>
        </nav>
      </header>
      {isOpen && (
        <Modal
          title="Добавить статью"
          classes={styles.formModal}
          onClose={() => setIsOpen(false)}
        >
          <AddArticleForm onClose={() => setIsOpen(false)} />
        </Modal>
      )}
    </>
  )
}

export default Header
