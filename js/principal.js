var titulo = document.querySelector("h1");
titulo.textContent = "Aparecida Melhor Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
  var paciente = pacientes[i];

  var tdpeso = paciente.querySelector(".info-peso");

  var peso = tdpeso.textContent;

  var tdaltura = paciente.querySelector(".info-altura");
  var altura = tdaltura.textContent;
  //console.log(altura);

  var tdImc = paciente.querySelector(".info-imc");

  var pesoEhValido = true;
  var alturaEhValida = true;

  if (peso <= 0 || peso >= 1000) {
    console.log("Peso inválido!");
    pesoEhValido = false;
    tdImc.textContent = "Peso inválido!";
    paciente.classList.add("paciente-invalido");
  }
  if (altura <= 0 || altura >= 3.0) {
    console.log("Altura Inválida!");
    alturaEhValida = false;
    tdImc.textContent = "Altura inválida!";
    paciente.classList.add("paciente-invalido");
  }

  if (alturaEhValida && pesoEhValido) {
    var imc = peso / (altura * altura);

    tdImc.textContent = imc;
  }
}


var botaoAdicionar=document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click",function(event){
   event.preventDefault();
   console.log("Oi!, eu sou o botão e fui clicado");
});

titulo.addEventListener("click",function(){
  console.log("Olá eu fui clicado");
 });
 //titulo.addEventListener("click",function(){console.log("olha! posso também chamar uma função anonima");});


