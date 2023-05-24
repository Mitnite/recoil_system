import React from "react";
import styles from './Backdrop.module.css'

type BackdropProps = {
  onClick: any
}

const Backdrop = (props:BackdropProps) => <div className={styles.Backdrop} onClick={props.onClick} />

export default Backdrop