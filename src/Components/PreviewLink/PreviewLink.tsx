import React from 'react'
import { Link as BaseLink } from 'react-router-dom'
import styles from './Link.module.css'

export type LinkProps = {
  to: string
  controls?: React.ReactNode
  children?: React.ReactNode
}
const PreviewLink = ({ to, controls, children }: LinkProps) => {

  return (
    <li className={styles.item}>
      <BaseLink className={styles.link} to={to}>
        {children}
      </BaseLink>
      {controls && (
        <div className={styles.controls}>
          {controls}
        </div>
      )}
    </li>
  )
}

export default PreviewLink
