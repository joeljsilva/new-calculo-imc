const peso = document.getElementById("peso").value
const altura = document.getElementById("altura").value
const botao = document.getElementById("botao")

function calc(a,b){
  const imc = a / b*2
  return imc
}
console.log(peso, altura)