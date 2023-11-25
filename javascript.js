

class Calculadora {
    constructor(textoValorInferior, textoValorSuperior) {
      this.textoValorInferior = textoValorInferior;
      this.textoValorSuperior = textoValorSuperior;
      this.valorInferior = '';
      this.valorSuperior = '';
      this.operador = undefined;
    }
  
    agregarNumero(numero) {
      if (numero === "." && this.valorInferior.includes(".")) {
        return;
      }
      this.valorInferior += numero;
    }
  
    imprimirDisplay() {
      this.textoValorInferior.innerText = this.valorInferior;
      
      if (this.operador) {
        this.textoValorSuperior.innerText = `${this.valorSuperior} ${this.operador}`;
      } else {
        this.textoValorSuperior.innerText = "";
      }
    }
  
    borrar() {
      this.valorInferior = this.valorInferior.slice(0, -1);
    }
  
    elegirOperacion(operador) {
      if (this.valorInferior === "") {
        return;
      }
      if (this.valorSuperior !== "") {
        this.realizarCalculo();
      }
      this.operador = operador;
      this.valorSuperior = this.valorInferior;
      this.valorInferior = "";
    }
  
    realizarCalculo() {
      let resultado;
      let conversionValorSuperior = parseFloat(this.valorSuperior);
      let conversionValorInferior = parseFloat(this.valorInferior);
  
      if (isNaN(conversionValorSuperior) || isNaN(conversionValorInferior)) {
        return;
      }
  
      switch (this.operador) {
        case "+":
          resultado = conversionValorSuperior + conversionValorInferior;
          break;
        case "-":
          resultado = conversionValorSuperior - conversionValorInferior;
          break;
        case "*":
          resultado = conversionValorSuperior * conversionValorInferior;
          break;
        case "/":
          resultado = conversionValorSuperior / conversionValorInferior;
          break;
        default:
          return;
      }
  
      this.valorInferior = resultado;
      this.operador = undefined;
      this.valorSuperior = "";
    }
  
    limpiarPantalla() {
      this.valorInferior = "";
      this.valorSuperior = "";
      this.operador = undefined;
    }
  }
  
  const botonNumero = document.querySelectorAll('[data-numero]');
  const botonOperador = document.querySelectorAll('[data-operador]');
  const botonIgual = document.querySelector('[data-igual]');
  const botonBorrarTodo = document.querySelector('[data-borrar-todo]');
  const botonBorrar = document.querySelector('[data-borrar]');
  const textoValorSuperior = document.querySelector('.valor_superior');
  const textoValorInferior = document.querySelector('.valor_inferior');
  
  const calculadora = new Calculadora(textoValorInferior, textoValorSuperior);
  
  botonNumero.forEach((boton) => {
    boton.addEventListener("click", () => {
      calculadora.agregarNumero(boton.innerText);
      calculadora.imprimirDisplay();
    });
  });
  
  botonBorrar.addEventListener("click", () => {
    calculadora.borrar();
    calculadora.imprimirDisplay();
  });
  
  botonOperador.forEach((boton) => {
    boton.addEventListener("click", () => {
      calculadora.elegirOperacion(boton.innerText);
      calculadora.imprimirDisplay();
    });
  });
  
  botonIgual.addEventListener("click", () => {
    calculadora.realizarCalculo();
    calculadora.imprimirDisplay();
  });
  
  botonBorrarTodo.addEventListener("click", () => {
    calculadora.limpiarPantalla();
    calculadora.imprimirDisplay();
  });


  /*
  OLIWIA ESTUVO AQUI
  */
  
