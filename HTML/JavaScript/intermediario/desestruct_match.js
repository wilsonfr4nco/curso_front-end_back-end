// primeiro criar um objeto
const pessoa = {
    nome: 'Wilson',
    sobrenome: 'Franco',
    idade: 43,
    profissao: 'desenvolvedor'
};

// ver o objeto
console.log(pessoa);

// se pedir para tratar cada intem desse objeto normalmente seria feito como abaixo:

// let nome = pessoa.nome;
// let sobrenome = pessoa.sobrenome;
// ... acima se repetiria cada item do objeto para depois ser utilizado.

// para usar o desestruct basta fazer como abaixo

let {nome, sobrenome, idade, profissao, outravariavel} = pessoa;

// a 'outravarivael' foi colocada para ilustar o que ocorre quando for utilizada uma veriável não definida.
console.log(nome, sobrenome, idade, profissao, outravariavel);


// -----------------------------------MATCH ------------------------------

const cpf = 'Meu cpf é 123.456.789-12';

const regex = new RegExp('[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}');

console.log(cpf.match(regex));