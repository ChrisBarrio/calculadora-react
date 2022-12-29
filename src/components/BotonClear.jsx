import React from 'react';
import styles from '../styles/BotonClear.module.css';

const BotonClear = (props) => (
  <div className={styles.botonClear} onClick={props.manejarClear}>
    {props.children}
  </div>
);

export default BotonClear;