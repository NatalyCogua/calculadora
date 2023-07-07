document.addEventListener("DOMContentLoaded", function() {
    const resultado = document.getElementById("resultado");
    const botonesNumeros = document.getElementsByClassName("numero");
    const botonesOperaciones = document.getElementsByClassName("operacion");
    const botonBorrarCE = document.getElementsByClassName("borrar")[0];
    const botonBorrarC = document.getElementsByClassName("borrar")[1];
    const botonIgual = document.getElementsByClassName("igual")[0];
    const botonPunto = document.getElementsByClassName("punto")[0];
    const botonPorcentaje = document.getElementsByClassName("funcion")[0];
    const botonParentesisAbre = document.getElementsByClassName("funcion")[1];
    const botonParentesisCierra = document.getElementsByClassName("funcion")[2];
  
    let expresion = "";
  
    // Event listeners para los botones numéricos
    for (let i = 0; i < botonesNumeros.length; i++) {
      botonesNumeros[i].addEventListener("click", function() {
        expresion += botonesNumeros[i].textContent;
        resultado.value = expresion;
      });
    }
  
    // Event listener para los botones de operación
    for (let i = 0; i < botonesOperaciones.length; i++) {
      botonesOperaciones[i].addEventListener("click", function() {
        expresion += botonesOperaciones[i].textContent;
        resultado.value = expresion;
      });
    }
  
    // Event listener para el botón de igual
    botonIgual.addEventListener("click", function() {
      try {
        const resultadoCalculo = eval(expresion);
        resultado.value = resultadoCalculo;
        expresion = resultadoCalculo.toString();
      } catch (error) {
        resultado.value = "Error";
        expresion = "";
      }
    });
  
    // Event listener para el botón de borrar último carácter (CE)
    botonBorrarCE.addEventListener("click", function() {
      expresion = expresion.slice(0, -1);
      resultado.value = expresion;
    });
  
    // Event listener para el botón de borrar toda la expresión (C)
    botonBorrarC.addEventListener("click", function() {
      expresion = "";
      resultado.value = expresion;
    });
  
    // Event listener para el botón de punto decimal
    botonPunto.addEventListener("click", function() {
      expresion += ".";
      resultado.value = expresion;
    });
  
    // Event listener para el botón de porcentaje
    botonPorcentaje.addEventListener("click", function() {
      expresion += "/100";
      resultado.value = expresion;
    });
  
    // Event listener para el botón de paréntesis de apertura
    botonParentesisAbre.addEventListener("click", function() {
      expresion += "(";
      resultado.value = expresion;
    });
  
    // Event listener para el botón de paréntesis de cierre
    botonParentesisCierra.addEventListener("click", function() {
      expresion += ")";
      resultado.value = expresion;
    });
  });
  