var titulo = document.querySelector('.titulo');//seleciona o elemento da classe "titulo"
titulo.textContent = "Aparecida Nutricionista";//modifica o conteudo HTML do elemento selecionado
var pacientes = document.querySelectorAll('.paciente');//seleciona o elemento com o id "primeiro paciente"


for(var i=0; i<pacientes.length; i++){
    var paciente = pacientes[i];

var tdPeso = paciente.querySelector('.info-peso'); //seleciona um elemento com classe "info-peso", dentro da var paciente
var peso = tdPeso.textContent; //executa o valor numero do elemento correspondente a var peso


var tdAltura = paciente.querySelector('.info-altura');
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector('.info-imc');
var pesoEhValido = true;
var alturaEhValida=true;

if(peso<=0||peso>250 ){
    pesoEhValido=false;
    tdImc.textContent='peso inválido!'
}
if(altura<=0 || altura>3){
    alturaEhValida=false;
    tdImc.textContent='altura inválida!'
}
if (alturaEhValida && pesoEhValido){
    var imc = peso/(altura*altura);
tdImc.textContent = imc; 

}else{
    console.log('medida inválida');
}



}
