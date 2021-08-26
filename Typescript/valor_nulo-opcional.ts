// o campo null está no tsconfig.json comentado para ser checado.
// se eu criar uma variável com algum valor e depois desejar atribuir null, eu vou ter que declarar ele senão dará erro.

let altura: number | null = 1.78;
altura: null;

type contato = {
    nome: string;
    telefone1: string;
    telefone2?: string; // colocando o mouse em cima do telefone2 pode ser vistos os valores associados.
}

// abaixo eu não precisei declarar o telefone2 por que utilizei a "?" após a variável e com isso ela pode ser string e undefined. 
const contact: contato = {
    nome: 'Wilson',
    telefone1: '22223333'
}