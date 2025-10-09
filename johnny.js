// Declarando váriavel com let

let nome = "Johnny Gabriel";

// Constante

const idade = 17;

console.log ("Seção 01 - Var/const")
console.log (`Nome: ${nome}`)
console.log (`Nome: ${idade}`)

nome = "Jonas"; // Retribuimos 'nome'

console.log ("Nome: (Após retribuição)", nome);

console.log("Seção 02 - funções");

function somar (a,b){
    return a+b;
}

console.log ("Somar 5 + 3 =", somar(5,3));

function multiplicacao (c,d){
    return c*d;
}

console.log ("Multiplicar 5 * 3 =", multiplicacao(5,3));

 
const n1 = 80
const n2 = 90
const n3 = 60

media =(n1 + n2 + n3)/3

console.log(media.toFixed(2))
