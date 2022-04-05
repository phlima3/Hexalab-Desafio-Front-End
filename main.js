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
  const radiosValue = [];


  inputs.forEach((input) => {
    
    if(input.getAttribute("class") === "bt-gorjeta"){
      radiosValue.push(input.checked);       
    }
  
    else if (!input.value){
      input.className = "erro";
      
      return;
    }

    if (input.classList.contains("erro")) {
      input.classList.remove("erro");
    }
  })
  if(radiosValue.indexOf(true) >= 0 ){
    console.log("Entrei aqui")
    if(porcentagemCustom.value != '') {
    porcentagemCustom.className = "erro";
      console.log("Com valor no personalizado")
    }
    else {
      porcentagemCustom.classList.remove("erro");
    }


  }


  console.log(radiosValue);
});

// setInterval(()=> {
  
  
//   console.log(porcentagemBotao);

// },1000);
 




 