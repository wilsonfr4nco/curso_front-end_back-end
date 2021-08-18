// criar variável se utiliza VAR.
// para executar o código basta digitar na linha de comando "nodejs nomedoarquivo.js"
var operador = 100;
var operando = 50;

var resultado = operador * operando;

console.log(resultado);

// utilizando o mesmo principio acima com nome e sobrenome
var nome = "Wilson";
var sobrenome = "Franco";

var nomeCompleto = nome + ' ' + sobrenome;

console.log(nomeCompleto)

// subtração
var primeirovalor = 10;
var segundovalor = "azul";

var resultado = primeirovalor - segundovalor;

console.log(resultado);
// o resultado da subtração acima é NaN (not a number),
// por outro lado se no lugar da palavra azul eu colocar o número 3, mesmo entre aspas ele faz a conta 
// o javascript é mais versátil