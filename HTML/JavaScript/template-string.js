// O var pode utilizar muita memória
// o javascript moderno pode utilizar variável chamada let
//var nome = 'WF';
let nome = 'Wilson';
let meuSobrenome = 'Franco';
let minhaProfissao = 'IT Coordinator';

console.log(
    'Olá eu sou ' + 
    nome + 
    '' + 
    meuSobrenome + 
    'minha profissão é ' +
    minhaProfissao
    );

//Escrever o mesmo texto com template string utiliza-se crase ` 

console.log(`Olá, meu nome é ${nome} ${meuSobrenome} e minha profissão é ${minhaProfissao}`
);

console.log(`O resultado da soma de 1 + 1 é = ${1 + 1}`);
console.log(`O objeto json ${{chave: 'valor'}}`);