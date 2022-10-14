let btnC = document.getElementById("casa13");
btnC.addEventListener("click", limpa);

function limpa(event) {
  resposta.innerHTML = "";
}

let resposta = document.getElementById("resposta");

let valor_salvo = null;
let operador_salvo = null;

let btnNumeros = document.getElementsByClassName("casa");
for (let botao of btnNumeros) {
  botao.addEventListener("click", clica_numero);
}
function clica_numero(event) {
  if (isNaN(resposta.innerHTML) === false) {
    resposta.innerHTML = resposta.innerHTML + event.target.innerHTML;
  } else {
    resposta.innerHTML = event.target.innerHTML;
  }
}
let btnOperadores = document.getElementsByClassName("casa-op");
for (let botao of btnOperadores) {
  botao.addEventListener("click", clica_operador);
}
function clica_operador(event) {
  if (isNaN(resposta.innerHTML) === false) {
    if (valor_salvo === null) {
      valor_salvo = Number(resposta.innerHTML);
    } else {
      valor_salvo = executa_operacao(
        valor_salvo,
        operador_salvo,
        Number(resposta.innerHTML)
      );
    }
  }

  operador_salvo = event.target.innerHTML;

  resposta.innerHTML = event.target.innerHTML;
}

let casaIgual = document.getElementById("casa15");

casaIgual.addEventListener("click", calcula_resultado);

function calcula_resultado(event) {
  if (valor_salvo != null && operador_salvo != null && isNaN(resposta.innerHTML) === false) {
    resposta.innerHTML = executa_operacao(valor_salvo,operador_salvo, Number(resposta.innerHTML));
    valor_salvo = null;
    operador_salvo = null;
  }
}

function executa_operacao(valor1, operador, valor2) {
  if (operador === "+") {
    return valor1 + valor2;
  } else if (operador === "-") {
    return valor1 - valor2;
  } else if (operador === "X") {
    return valor1 * valor2;
  } else if (operador === "/") {
    return valor1 / valor2;
  }
}

let body = document.getElementsByTagName("body")[0];

body.addEventListener("keydown", pressionou_tecla);

function pressionou_tecla(event) {
  if (event.key === "*") {
    document.getElementById("casa08").click();
  }else if (event.key === "/") {
    document.getElementById("casa04").click();
  }else if (event.key === "+") {
    document.getElementById("casa16").click();
  }else if (event.key === "-") {
    document.getElementById("casa12").click();
  }else if (event.key === "Enter") {
    document.getElementById("casa15").click();
  }else if (event.key === "Escape") {
    document.getElementById("casa13").click();
  }else if (event.key === "1") {
    document.getElementById("casa09").click();
  }else if (event.key === "2") {
    document.getElementById("casa10").click();
  }else if (event.key === "3") {
    document.getElementById("casa11").click();
  }else if (event.key === "4") {
    document.getElementById("casa05").click();
  }else if (event.key === "5") {
    document.getElementById("casa06").click();
  }else if (event.key === "6") {
    document.getElementById("casa07").click();
  }else if (event.key === "7") {
    document.getElementById("casa01").click();
  }else if (event.key === "8") {
    document.getElementById("casa02").click();
  }else if (event.key === "9") {
    document.getElementById("casa03").click();
  }else if (event.key === "0") {
    document.getElementById("casa14").click();
  }
}


