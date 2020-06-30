import React from 'react'
import { Form } from 'antd'
import classnames from 'classnames'
import style from './style.module.scss'

export default function PaymintsLabel({ className, ...props }) {
  const css = classnames(className, style.label)
  return <Form.Item {...props} className={css} />
}
