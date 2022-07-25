//tabalho com o  FORM


var botaoAdicionar=document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click",function(event){
   event.preventDefault();
   //console.log("Oi!, eu sou o botão e fui clicado");

var form=document.querySelector("#form-adiciona");

var altura=form.altura.value;
var peso=form.peso.value;
var nome=form.nome.value;
var gordura=form.gordura.value;

var pacienteTr= document.createElement("tr");
var alturaTd=document.createElement("td")
var pesoTd=document.createElement("td")
var nomeTd=document.createElement("td")
var gorduraTd=document.createElement("td")
var imcTd=document.createElement("td");

alturaTd.textContent=altura;
pesoTd.textContent=peso;
nomeTd.textContent=nome;
gorduraTd.textContent=gordura;
imcTd.textContent=calculaImc(peso,altura);



pacienteTr.appendChild(nomeTd);
pacienteTr.appendChild(pesoTd);
pacienteTr.appendChild(alturaTd);
pacienteTr.appendChild(gorduraTd);
pacienteTr.appendChild(imcTd);

var tabela= document.querySelector("#tabela-pacientes");
tabela.appendChild(pacienteTr);




});