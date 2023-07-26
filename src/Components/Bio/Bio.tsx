import React from 'react'
import styles from './Bio.module.css'

const Bio = () => {
  return (
    <section className={styles.container}>
      <h1>
        <span className={styles.title}>Hey, i'm Alexey!</span> <span>👋</span>
      </h1>

      <p className={styles.subtitle}>
        26 years old frontend engineer from Togliatty
      </p>
    </section>
  )
}

export default Bio
