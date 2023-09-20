// src/calculadora_assets/index.js
async function realizarOperacion() {
  const num1 = parseInt(document.getElementById("numero1").value);
  const num2 = parseInt(document.getElementById("numero2").value);
  const operacion = document.getElementById("operacion").value;

  let resultado;
  switch (operacion) {
      case "sumar":
          resultado = await calculadora.sumar(num1, num2);
          break;
      case "restar":
          resultado = await calculadora.restar(num1, num2);
          break;
      case "multiplicar":
          resultado = await calculadora.multiplicar(num1, num2);
          break;
      case "dividir":
          resultado = await calculadora.dividir(num1, num2);
          break;
      case "raizCuadrada":
            resultado = await calculadora.raizCuadrada(num1);
            break;
      case "potencia":
            resultado = await calculadora.potencia(num1, num2);
            break;
      case "logaritmo":
            resultado = await calculadora.logaritmo(num1);
            break;
      case "seno":
            resultado = await calculadora.seno(num1);
            break;
      case "coseno":
            resultado = await calculadora.coseno(num1);
            break;
      case "tangente":
            resultado = await calculadora.tangente(num1);
            break;
    default:
            alert("Operación no reconocida");
            return;
          
  }

  document.getElementById("resultado").innerText = resultado.toString();
}
