

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function (event) {
  event.preventDefault();

  var form = document.querySelector("#form-adiciona");
  //Extraindo informações do paciente no form
  var paciente = obtemPacientesDoFormulario(form);
  console.log(paciente);
  //cria a tr e td do paciente
  var pacienteTr = montaTr(paciente);

  //Adicionando o paciente na tabela

  var tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(pacienteTr);

});


function obtemPacientesDoFormulario(form) {
  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value)
  }
  return paciente;
}

function montaTr(paciente) {
  var pacienteTr = document.createElement("tr");

  var alturaTd = document.createElement("td")
  var pesoTd = document.createElement("td")
  var nomeTd = document.createElement("td")
  var gorduraTd = document.createElement("td")
  var imcTd = document.createElement("td");

  alturaTd.textContent = paciente.altura;
  pesoTd.textContent = paciente.peso;
  nomeTd.textContent = paciente.nome;
  gorduraTd.textContent = paciente.gordura;
  imcTd.textContent = paciente.imc;

  pacienteTr.appendChild(nomeTd);
  pacienteTr.appendChild(pesoTd);
  pacienteTr.appendChild(alturaTd);
  pacienteTr.appendChild(gorduraTd);
  pacienteTr.appendChild(imcTd);

  return pacienteTr;

}
