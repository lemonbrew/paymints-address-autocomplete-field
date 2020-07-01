import React from 'react'
import classnames from 'classnames'
import styles from './style.module.scss'

const BALL_TYPE = {
  ACTIVE: 'active',
  PENDING: 'pending',
  INACTIVE: 'inactive',
}

export { BALL_TYPE }

export default function PaymintsHarveyBall({ type, className, children }) {
  const css = classnames(className, styles.ball, {
    [styles.active]: type === BALL_TYPE.ACTIVE,
    [styles.pending]: type === BALL_TYPE.PENDING,
    [styles.inactive]: type === BALL_TYPE.INACTIVE,
  })
  return (
    <div className={styles.container}>
      <span className={css} />
      <div className={styles.children}>
        {children}
      </div>
    </div>
  );
}
