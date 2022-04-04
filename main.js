// PEGAR VALORES
const totalPedido = document.getElementById("valorPedido"); //Valor total do pedido
const gorjetaPorcentagemBotao = document.querySelector(
  'input[name="valorGorjeta"]:checked'
);
const gorjetaPorcentagemPersonal = document.getElementById(
  "gorjetaPersonalizada"
); //Valor da porcentagem personalizada do pedido
const numeroPessoas = document.getElementById("qtdPessoas"); //Quantidade de pessoas que irão pagar
const valorGorjetaTotal = document.getElementById("totalGorjeta"); //Valor a ser exibido da gorjeta total
const valorGorjetaPessoa = document.getElementById("gorjetaPessoa"); //Valor a ser exibido da gorjeta por pessoa

var form = document.querySelector("#enviarForm");
var botao = document.querySelector("#calcular");

let inputsRadio;

function adicionarErro() {
  totalPedido.className = "erro";
  gorjetaPorcentagemPersonal.className = "erro";
  numeroPessoas.className = "erro";
  totalPedido.focus();
}
function removerErro() {
  totalPedido.classList.remove("erro");
  gorjetaPorcentagemPersonal.classList.remove("erro");
  numeroPessoas.classList.remove("erro");
}

// VERIFICAR INPUT
function verificarInput() {
  if (isNaN(totalPedido.value) || totalPedido.value <= 0) {
    adicionarErro();
  } else if (isNaN(form.valorGorjeta.value) || form.valorGorjeta.value <= 0) {
    if (
      gorjetaPorcentagemPersonal.value <= 0 ||
      isNaN(gorjetaPorcentagemPersonal.value)
    ) {
      adicionarErro();
    }
  } else if (
    form.valorGorjeta.value == 1 &&
    gorjetaPorcentagemPersonal.value == 1
  ) {
    adicionarErro();
    console.log("Foi digitado os Dois");
  } else if (isNaN(parseFloat(numeroPessoas.value)) || parseFloat(numeroPessoas.value )  <= 0) {
    adicionarErro();
    console.log("Faltou o número de pessoas")
  } else {
    removerErro();
  }
}
// CONTA

botao.addEventListener("click", function (event) {
  event.preventDefault();

  console.log("A porcentagem escolhida foi de: ", form.valorGorjeta.value);
  console.log(typeof form.valorGorjeta.value);
  console.log("O valor total do pedido em R$ foi de: ", totalPedido.value);
  console.log("O total de pessoas que irão pagar é de: ", numeroPessoas.value);
  console.log(typeof parseFloat(numeroPessoas.value ) );

  verificarInput();
});
