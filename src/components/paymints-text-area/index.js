import React from 'react'
import { Input } from 'antd'
import classnames from 'classnames'
import style from './style.module.scss'

export default function PaymintsTextArea({ className, ...props }) {
  const css = classnames(className, style.textArea)
  return <Input.TextArea {...props} className={css} />
}
