//Escreva um programa que leia uma data (dia, mês, ano) e verifique se é uma data válida.
var dia = 5
var mes = 8
var ano = -2009

if (dia >= 1) {
    if (dia <= 31) {
        console.log("seu dia é valido bom-dia")
    } else {
        console.log("seu dia nao é valido")
    }

} else {
    console.log("seu dia nao é valido")
}
if (mes >= 1) {
    if (mes <= 12) {
        console.log("seu mes é valido ")
    } else {
        console.log("seu mes nao é valido")
    }

} else {
    console.log("seu mes nao é valido")
}
if (ano >= 0) {
    console.log("seu ano é valido")
} else {
    console.log("seu ano nao é valido ai é com cristo")
}
