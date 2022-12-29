import React from 'react';
import styles from '../styles/Screen.module.css';

const Pantalla = ({ input }) => (
  <div className={styles.input}>
    {input}
    {!input && 0}
  </div>
);

export default Pantalla;
