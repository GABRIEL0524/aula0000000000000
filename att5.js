//Faça um programa que leia o nome de um aluno e suas três notas, calcule a média e informe se ele está aprovado (média maior ou igual a 7
//informe seu nome abaixo
var nomeUsuario = "jorge"
var nota_1 = 8
var nota_2 = 10
var nota_3 = 9
 
var media = ((nota_1 + nota_2 + nota_3) /3)


if (media >= 7){
    console.log("voce foi aprovado "+ nomeUsuario)
} else {
    console.log("voce foi reprovado "+ nomeUsuario)
}