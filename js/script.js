const btn = document.getElementById("botao")
let resul = document.getElementById("resul")
let resulDetalhe = document.getElementById("resul-detalhe")
let resulbloco = document.getElementById("resultado-final")
function calcular() {
  let peso = parseFloat(document.getElementById("peso").value)
  let altura = parseFloat(document.getElementById("altura").value)
  let imc = peso / (altura * altura)
  let resultado = ""
  if (imc < 18.5) {
    resultado = "Infelizmente você está </strong>abaixo do seu peso ideal</strong>"
  } else if (imc < 25) {
    resultado = "Você está no seu <strong>peso ideal</strong> !"
  } else if (imc < 30) {
    resultado = "Você está um pouco <strong>acima do seu peso ideal!</strong>"
  } else if (imc < 35) {
    resultado = "Você está com <strong>Obesidade grau 1!</strong>"
  } else if (imc < 40) {
    resultado = "Você está com <strong>Obesidade grau 2!</strong>"
  } else if (imc >= 40) {
    resultado = "Você está com <strong>Obesidade grau 3 ou Obesidade Mórbida!</strong>"
  }
  resul.innerHTML = imc.toFixed(1)
  resulDetalhe.innerHTML = resultado
  resulbloco.style.display = "block"
}
btn.addEventListener("click", calcular)


