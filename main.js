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

function verificarInput() {
  if (
    gorjetaPorcentagemBotao == 0 ||
    isNaN(totalPedido) ||
    isNaN(numeroPessoas)
  ) {
    alert("Por favor, coloque um valor válido!");
    return;
  }
}

botao.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("A porcentagem escolhida foi de: ", form.valorGorjeta.value, "%");
  console.log("O valor total do pedido em R$ foi de: ", totalPedido.value);
  console.log("O total de pessoas que irão pagar é de: ", numeroPessoas.value);
});

//   var textoGorjetaPessoa = document.getElementById("gorjetaPessoa").value;

//   var valorPessoa = totalConta / numeroPessoas;

//   textoGorjetaPessoa.innerText = textoGorjetaPessoa;

//   console.log(textoGorjetaPessoa);
//   console.log("Valor da conta por pessoa é:", valorPessoa);
// }

// document.getElementById("enviarForm").onsubmit = function (e) {
//   e.preventDefault();
//   calcularJantar();
// };
