import { useSelector } from 'react-redux'
import styles from './LatestArticles.module.css'

const LatestArticles = () => {
  const { articlesList } = useSelector((state) => state.articles)
  console.log(articlesList, 'data')
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Latest articles</h2>
      <div>
        {articlesList.map(({ title }) => (
          <div key={title}>{title}</div>
        ))}
      </div>
    </section>
  )
}

export default LatestArticles
