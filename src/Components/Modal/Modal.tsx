import React, { useEffect } from 'react'
import { createPortal } from 'react-dom'
import Button from '../Button/Button.tsx'
import styles from './Modal.module.css'
import * as classNames from 'classnames'

export type ModalProps = {
  RootProps?: object
  BackdropProps?: object
  onClose?: () => void
  title?: string
  classes?: string
  children: React.ReactNode
}

/**
 * @description The modal component provides a solid foundation for creating dialogs, popovers, lightboxes, or whatever else.
 */
const Modal = ({
  RootProps,
  BackdropProps,
  onClose,
  title,
  classes,
  children,
  ...otherProps
}: ModalProps) => {
  useEffect(() => {
    window.addEventListener(
      'keydown',
      ({ key }) =>
        key === 'Escape' && typeof onClose === 'function' && onClose()
    )

    return () =>
      window.removeEventListener(
        'keydown',
        ({ key }) =>
          key === 'Escape' && typeof onClose === 'function' && onClose()
      )
  }, [])

  return createPortal(
    <div className={styles.modalRoot} {...RootProps}>
      <div className={styles.backdrop} {...BackdropProps} onClick={onClose} />
      <div
        className={classNames(styles.modal, classes)}
        aria-label="Modal"
        aria-description="Modal window"
        {...otherProps}
      >
        {title && <h2 className={styles.title}>{title}</h2>}
        {typeof onClose === 'function' && (
          <div className={styles.control}>
            <Button classes={styles.closeButton} onClick={onClose}>
              X
            </Button>
          </div>
        )}
        {children}
      </div>
    </div>,
    document.body
  )
}

export default Modal
