// PEGAR VALORES GERAL
const inputs = document.querySelectorAll("input:not(:disabled)");
const form = document.querySelector("form");

//PEGAR VALORES INDIVIDUAL
const total = document.getElementById("valorPedido");

let porcentagem = 0;

total.onkeyup = () => {
  calcularTotal(porcentagem);
};

const porcentagemCustom = document.getElementById("gorjetaPersonalizada");
porcentagemCustom.onkeyup = () => {
  porcentagem = porcentagemCustom.value;
  calcularTotal(porcentagem);
};

const porcentagemBotao = document.getElementsByClassName("bt-gorjeta");

const pessoas = document.getElementById("qtdPessoas");
pessoas.onchange = () => {
  calcularTotal(porcentagem);
};

//RESULTADO
const resultadoConta = document.querySelector("#totalGorjeta");
const resultadoPessoa = document.querySelector("#gorjetaPessoa");

let erro = false;

let porcentagemSelected = 1;

porcentagemCustom.onkeyup = () => {
  for (let index = 0; index < porcentagemBotao.length; index++) {
    const botao = porcentagemBotao[index];
    if (botao.checked) {
      botao.checked = false;
    }
  }
  calcularTotal(porcentagemCustom.value);
};
if (porcentagemCustom.value >= 1) {
  botao.checked = false;
}

function verificarInputs() {
  //VERIFICAR OS INPUTS
  const radiosValue = [];

  inputs.forEach((input) => {
    if (input.getAttribute("class") === "bt-gorjeta") {
      radiosValue.push(input.checked);
      if (input.checked) {
        porcentagemSelected = input.value;
        porcentagemCustom.value = "";
      }
    } else if (!input.value || input.value <= 0) {
      input.className = "erro";
      erro = true;

      return;
    }

    if (input.classList.contains("erro")) {
      input.classList.remove("erro");
      erro = false;
    }
  });
  if (radiosValue.indexOf(true) >= 0) {
    if (porcentagemCustom.value != "") {
      porcentagemCustom.className = "erro";
      console.log("Com valor no personalizado");
      erro = true;
    } else {
      porcentagemCustom.classList.remove("erro");
      erro = false;
    }
  }
  if (erro) {
    return false;
  } else {
    return true;
  }
}

function calcularTotal(p) {
  if (verificarInputs()) {
    porcentagem = p;
    resultadoConta.innerHTML = ((total.value * p) / 100).toLocaleString(
      "pt-BR",
      {
        minimumFractionDigits: 2,
      }
    );
    resultadoPessoa.innerHTML = (
      (total.value * p) /
      100 /
      pessoas.value
    ).toLocaleString("pt-BR", { minimumFractionDigits: 2 });
  }
}
