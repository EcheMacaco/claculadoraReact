import React from "react";
import "../hojas-de-estilo/Boton.css"

function Boton(props) {
  const esOperador = (valor) => {
    //si no es numero y tampoco es un "." ni un "=" entonces retorna que es operador
    return isNaN(valor) && (valor) != "." && (valor) != "=";
  };
  return (
    <div
      className={`boton-contenedor ${
        esOperador(props.children) ? "operador" : ""
      }` .trimEnd() } onClick={()=>props.manejarClic(props.children)}>
      {props.children}
    </div>
  );
}

export default Boton;
