// boolean
// var é uma declaração global de variáveis que não 
// é recomendado de ser usado, normalmente se utiliza let
// variável const para não pudar o valor
// variável let para valores que mudam
const contaPaga: boolean = false;


// number (com ou sem vírgula é tipo number)
const idade: number = 23;
const avaliacoes: number  = 4.3;

// string
const nome: string =  'Wilson Franco';

// array de números

const idades: number[] = [23, 28, 45];
const idades2: Array<number> = [23, 345, 456, 46];

// Tuple
let jogadores: [string, string, string, number, boolean];
jogadores = ['Wilson', 'Fulano', 'Ciclano', 5, true];

// Enum (mapear informações)
enum statusAprovacao {
    Aprovado = '001',
    Pedente = '002', 
    Rejeitado = '003'
}

const statusDaAprovacao: statusAprovacao = statusAprovacao.Aprovado;


//Any (tipo para qualquer coisa) - so utilizado em situacoes epeciais.
const retornoDaApi: any[] = [123, 'Wilson', false];
const retornoDaApi2: any[] = []


// Void para dizer quando uma funcao não retorna nada.
function printarNaTela(msg: string) {
    console.log(msg);
}

// Null e Undefined
const u: undefined = undefined;
const n: null = null;

// Object
function criar(objecto: object) {
    // ...
}
criar ({
    propriedade: 1,
})

// Never - algo que nunca ocorrre, pode ser algo que nunca acontece.

function loopInfinito(): never {
    while (true) { }
}

function erro(mensagem: string): never {
    throw new Error(mensagem);
}

function falha() {
    return erro('Algo falhou');
}

// Union Types: como definir que tem um tipo ou outro tipo

// abaixo aceita número ou string
function exibirNota(nota: number | string) {
    console.log(`A nota é  + ${nota}`);
}

exibirNota('10');
exibirNota(10);

// Alias: criar atalhos para seus tipos.
type Funcionario = {
    nome: string;
    sobrenome : string;
    dataNascimento: Date;
}

// type Funcionarios = Array<string>; // ou string[]
// type Funcionarios = Array<Funcionario>; 
// abaixo estava antes "const funcionarios: Funcionarios ..."
// o tipo abaixo pode ser escrito também dessa forma: Funcionario[]
const funcionarios: Array<Funcionario> = [{
    nome: 'Wilson',
    sobrenome: 'Franco',
    dataNascimento: new Date()
}];
function tratarFuncionarios(funcionarios: Funcionario[]) {
    for(let funcionario of funcionarios) {
        console.log('Nome do funcionário: ', funcionario.nome);
    }
    // ...
}


