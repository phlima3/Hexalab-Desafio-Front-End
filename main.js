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




//VERIFICAR OS INPUTS
form.addEventListener("submit", (event) => {
  event.preventDefault();
  resultadoConta.innerHTML = (total.value) * (porcentagemCustom.value) / 100;

  const radiosValue = [];

  inputs.forEach((input) => {
    if (input.getAttribute("class") === "bt-gorjeta") {
      radiosValue.push(input.checked);
    } else if (!input.value) {
      input.className = "erro";

      return;
    }

    if (input.classList.contains("erro")) {
      input.classList.remove("erro");
    }
  });
  if (radiosValue.indexOf(true) >= 0) {
    
    if (porcentagemCustom.value != "") {
      porcentagemCustom.className = "erro";
      console.log("Com valor no personalizado");
    } else {
      porcentagemCustom.classList.remove("erro");
    }
  }
});

//CALCULAR GORJETA



  // resultadoConta.innerHTML = (((parseFloat(total)) * (parseFloat(porcentagemCustom)) * (parseFloat(porcentagemBotao)) /100) / parseFloat(pessoas.value)) .toFixed(2)




