import React from 'react';
import styles from '../styles/Boton.module.css';

function Boton(props) {

//   const esOperador = valor => {
//     return isNaN(valor) && (valor != '.') && (valor != '=');
//   };

  return (
    <div
    //   className={`styles.boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}
      className={styles.botonContenedor}
      onClick={() => props.manejarClic(props.children)}>
      {props.children}
    </div>
  );
}

export default Boton;