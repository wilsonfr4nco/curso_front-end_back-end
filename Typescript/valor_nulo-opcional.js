// o campo null está no tsconfig.json comentado para ser checado.
// se eu criar uma variável com algum valor e depois desejar atribuir null, eu vou ter que declarar ele senão dará erro.
var altura = 1.78;
altura: null;
// abaixo eu não precisei declarar o telefone2 por que utilizei a "?" após a variável e com isso ela pode ser string e undefined. 
var contact = {
    nome: 'Wilson',
    telefone1: '22223333'
};
