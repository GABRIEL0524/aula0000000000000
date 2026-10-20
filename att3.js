// escreva um programa que converta uma temperatura de celsius para fahrenheit
//e vice versa
//°F = (°C × 1,8) + 32
//°c = (°F - 32) x 9/5 + 32)

var temperatura = 67
var tipoTemperatura = "C"
var temperaturaConvertida = 0

if (tipoTemperatura == "C") {
    console.log("voce escolheu celsius")
    temperaturaConvertida = ((temperatura * 1.8) + 32)
} else {
    console.log("voce escolheu fahrenheit")
    temperaturaConvertida = ((temperatura - 32) * (5/9))
}



console.log("o valor covertido e: "+ temperaturaConvertida)