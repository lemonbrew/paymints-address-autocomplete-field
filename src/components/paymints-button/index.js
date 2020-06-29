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
  const css = classNames(className, 'button', {
    primary: type === BUTTON_TYPE.PRIMARY,
    blue: type === BUTTON_TYPE.BLUE,
    inverse: type === BUTTON_TYPE.INVERSE,
    link: type === BUTTON_TYPE.LINK,
    linkDark: type === BUTTON_TYPE.LINK_DARK,
    block: block,
    pill: pill,
    noShadow: noShadow,
  })
  return <Button className={css} {...props} />
}
