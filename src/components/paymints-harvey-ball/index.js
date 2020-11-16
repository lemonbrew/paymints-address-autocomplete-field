import React from "react";
import classnames from "classnames";
import styles from "./style.module.scss";

const BALL_TYPE = {
  ACTIVE: "active",
  PENDING: "pending",
  INACTIVE: "inactive",
  CREATED: "created",
  SENT: "sent",
  VIEWED: "viewed",
  ERROR: "error",
};

export { BALL_TYPE };

export default function PaymintsHarveyBall({ type, className, children }) {
  const css = classnames(className, styles.ball, {
    [styles.active]: type === BALL_TYPE.ACTIVE,
    [styles.pending]: type === BALL_TYPE.PENDING,
    [styles.inactive]: type === BALL_TYPE.INACTIVE,
    [styles.created]: type === BALL_TYPE.CREATED,
    [styles.sent]: type === BALL_TYPE.SENT,
    [styles.viewed]: type === BALL_TYPE.VIEWED,
    [styles.error]: type === BALL_TYPE.ERROR,
  });
  return (
    <div className={styles.container}>
      <span className={css} />
      <div className={styles.children}>{children}</div>
    </div>
  );
}
