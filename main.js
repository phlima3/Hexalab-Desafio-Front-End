// PEGAR VALORES
const inputs = document.querySelectorAll("input:not(:disabled)");
const form = document.querySelector("form");

const total = document.querySelector("#valorPedido");
const porcentagemBotao = document.querySelector(
  'input[name="valorGorjeta"]:checked'
);
const porcentagemCustom = document.querySelector("#gorjetaPersonalizada");
const numeroPessoas = document.querySelector("#qtdPessoas");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  inputs.forEach((input) => {
    if (!input.value) {
      input.className = "erro";
      return;
    }

    if (input.classList.contains("erro")) {
      input.classList.remove("erro");
    }
  });
});
 