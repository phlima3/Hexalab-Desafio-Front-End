

function formatarDinheiro(input){



    var valorFormatado = parseFloat(input.value).toFixed(2) 
    console.log(valorFormatado)
    input.value =  valorFormatado;
 


    
}
var inputValorPedido = document.getElementById('valorPedido') 
inputValorPedido.onchange = (ev) => {
    console.log(ev.target.value)
    formatarDinheiro(ev.target)

}



