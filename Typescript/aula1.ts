// digiar no terminal "tsc --init"
// o comando acima cria o arquivo tsconfig.json 
// que possui as configurações do typescript
// por padrão o esse arquivo de configuração acima habilida o strict = true
// que checa vários elementos do código.
// o typescritp auxilia a trabalhar de uma maneira que evitamos uma série de
// erros no meio do caminho
function somar(numero1:number, numero2:number){
    return numero1 + numero2;
}

const meuNumero1 = 10;
const meuNumero2 = 5;

const resultado = somar(meuNumero1, meuNumero2);
console.log(resultado);
// quando eu concluir meu código eu digito o comando tsc que ele criar um arquivo 
// javaScript a partir do meu typescript