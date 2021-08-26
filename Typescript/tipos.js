// boolean
// var é uma declaração global de variáveis que não 
// é recomendado de ser usado, normalmente se utiliza let
// variável const para não pudar o valor
// variável let para valores que mudam
var contaPaga = false;
// number (com ou sem vírgula é tipo number)
var idade = 23;
var avaliacoes = 4.3;
// string
var nome = 'Wilson Franco';
// array de números
var idades = [23, 28, 45];
var idades2 = [23, 345, 456, 46];
// Tuple
var jogadores;
jogadores = ['Wilson', 'Fulano', 'Ciclano', 5, true];
// Enum (mapear informações)
var statusAprovacao;
(function (statusAprovacao) {
    statusAprovacao["Aprovado"] = "001";
    statusAprovacao["Pedente"] = "002";
    statusAprovacao["Rejeitado"] = "003";
})(statusAprovacao || (statusAprovacao = {}));
var statusDaAprovacao = statusAprovacao.Aprovado;
//Any (tipo para qualquer coisa) - so utilizado em situacoes epeciais.
var retornoDaApi = [123, 'Wilson', false];
var retornoDaApi2 = [];
// Void para dizer quando uma funcao não retorna nada.
function printarNaTela(msg) {
    console.log(msg);
}
// Null e Undefined
var u = undefined;
var n = null;
// Object
function criar(objecto) {
    // ...
}
criar({
    propriedade: 1
});
// Never - algo que nunca ocorrre, pode ser algo que nunca acontece.
function loopInfinito() {
    while (true) { }
}
function erro(mensagem) {
    throw new Error(mensagem);
}
function falha() {
    return erro('Algo falhou');
}
// Union Types: como definir que tem um tipo ou outro tipo
// abaixo aceita número ou string
function exibirNota(nota) {
    console.log("A nota \u00E9  + " + nota);
}
exibirNota('10');
exibirNota(10);
// type Funcionarios = Array<string>; // ou string[]
// type Funcionarios = Array<Funcionario>; 
// abaixo estava antes "const funcionarios: Funcionarios ..."
// o tipo abaixo pode ser escrito também dessa forma: Funcionario[]
var funcionarios = [{
        nome: 'Wilson',
        sobrenome: 'Franco',
        dataNascimento: new Date()
    }];
function tratarFuncionarios(funcionarios) {
    for (var _i = 0, funcionarios_1 = funcionarios; _i < funcionarios_1.length; _i++) {
        var funcionario = funcionarios_1[_i];
        console.log('Nome do funcionário: ', funcionario.nome);
    }
    // ...
}
