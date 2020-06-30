import React from 'react'
import classNames from 'classnames'
import { Button } from 'antd'
import styles from './style.module.scss'

const BUTTON_TYPE = {
  PRIMARY: 'primary',
  BLUE: 'blue',
  INVERSE: 'inverse',
  LINK: 'link',
  LINK_DARK: 'link-dark',
}

export { BUTTON_TYPE }

export default function PaymintsButton({ noShadow, pill, block, type, className, ...props }) {
  const css = classNames(className, [styles.button], {
    [styles.primary]: type === BUTTON_TYPE.PRIMARY,
    [styles.blue]: type === BUTTON_TYPE.BLUE,
    [styles.inverse]: type === BUTTON_TYPE.INVERSE,
    [styles.link]: type === BUTTON_TYPE.LINK,
    [styles.linkDark]: type === BUTTON_TYPE.LINK_DARK,
    [styles.block]: block,
    [styles.pill]: pill,
    [styles.noShadow]: noShadow,
  })
  return <Button className={css} {...props} />
}
