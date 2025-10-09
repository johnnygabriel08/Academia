const prompt = require('prompt-sync')();

//1. Crie uma função que receba dois números e retorne a soma

function soma (a,b){
    a = parseFloat(prompt("Digite um número: "))
    b = parseFloat(prompt("Digite outro número: "))

    return a + b;
}
console.log(soma())

//2. Use if/else para verificar se uma pessoa é maior de idade.

idade = parseFloat(prompt("Digite sua idade: "))

if (idade <= 17){
    console.log("você é menor de idade!")
}else{
    console.log("Você é maior de idade!")
}

//3. Monte a tabuada do número 7 usando for.

for (i = 0; i <= 10; i++) {
    tabuada = 7 * i
    console.log(`7 x ${i} = ${tabuada}`)
    }

//4.Crie um programa que peça senha e só permita continuar se for “1234”.

let senha;
do {
    senha = prompt("Digite a senha; ")
}while (senha !== "1234")
console.log("Acesso permitido!")

//5. Calcule a média de três notas e informe se o aluno está aprovado (nota ≥ 60).. 
n1 = parseFloat(prompt("Digite a primeira nota: "))
n2 = parseFloat(prompt("Digite a segunda nota: "))
n3 = parseFloat(prompt("Digite a terceira nota: "))

media = (n1 + n2 + n3)/3

console.log(`Sua média é ${media} pontos`)

if (media>= 60) {
    console.log("Você está aprovado! ")
}else {
    console.log("Você esta reprovado! ")
}