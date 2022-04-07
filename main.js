// PEGAR VALORES GERAL
const inputs = document.querySelectorAll("input:not(:disabled)");
const form = document.querySelector("form");

//PEGAR VALORES INDIVIDUAL
const total = document.querySelector("#valorPedido");
const porcentagemBotao = document.querySelector(
  'input[name="valorGorjeta"]:checked'
);
const porcentagemCustom = document.querySelector("#gorjetaPersonalizada");

const pessoas = document.querySelector("#qtdPessoas");

//RESULTADO
const resultadoConta = document.querySelector("#totalGorjeta");
const resultadoPessoa = document.querySelector("#gorjetaPessoa");

let erro = false;

let porcentagemSelected = 1;

//VERIFICAR OS INPUTS
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const radiosValue = [];

  inputs.forEach((input) => {
    if (input.getAttribute("class") === "bt-gorjeta") {
      radiosValue.push(input.checked);

      if (input.checked) {
        porcentagemSelected = input.value;
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
  if (!erro) {
    calcularTotal();
  }

  console.log(erro);
});

function calcularTotal() {
  let valorRadioSelected = !porcentagemSelected ? 1 : porcentagemSelected;
  let valorPersonalizado = !porcentagemCustom.value
    ? 1
    : porcentagemCustom.value;

  console.log(valorRadioSelected);
  console.log(valorPersonalizado);

  resultadoConta.innerHTML = (
    (total.value * valorRadioSelected * valorPersonalizado) /
    100
  ).toLocaleString("pt-BR", { minimumFractionDigits: 2 });
  resultadoPessoa.innerHTML = (
    (total.value * valorRadioSelected * valorPersonalizado) /
    100 /
    pessoas.value
  ).toLocaleString("pt-BR", { minimumFractionDigits: 2 });
}
