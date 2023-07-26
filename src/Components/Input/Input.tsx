import { forwardRef, InputHTMLAttributes } from 'react'
import styles from './Input.module.css'
import * as classNames from 'classnames'

export type InputProps = InputHTMLAttributes<never> & {
  classes?: string
}

/**
 * @description input allow users to enter text into a UI. They typically appear in forms and dialogs
 */
const Input = forwardRef<HTMLInputElement, InputProps>(({ classes, ...otherProps }, ref) => {
  return (
    <input
      ref={ref}
      className={classNames(styles.input, classes)}
      {...otherProps}
    />
  )
})

export default Input
