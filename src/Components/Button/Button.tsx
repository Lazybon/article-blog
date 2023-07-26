import { ButtonHTMLAttributes, forwardRef } from 'react'
import styles from './Button.module.css'
import * as classNames from 'classnames'

// Тут чет хз правильно или нет сделал)
export type ButtonProps = ButtonHTMLAttributes<never> & {
  classes?: string
}

/**
 * @description Buttons allow users to take actions, and make choices, with a single tap.
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ classes, ...otherProps }, ref) => {
    return (
      <button
        ref={ref}
        role="button"
        aria-label="Close"
        aria-description="Close current modal"

        className={classNames(styles.button, classes)}
        {...otherProps}
      />
    )
  }
)

export default Button
