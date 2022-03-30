function calcularJantar(){
    var totalConta = document.getElementById("valorPedido").value;
    var taxaServico = document.getElementsByClassName("bt-gorjeta").value;
    var numeroPessoas = document.getElementById("qtdPessoas").value;

    if(totalConta === "" || taxaServico == 0 || isNaN(totalConta) || isNaN(numeroPessoas)){
        alert("Por favor, coloque um valor válido!")
        return;
    }

}
document.getElementById("calcular").onclick = function(){
    e.preventDefault();
    calcularJantar();
}