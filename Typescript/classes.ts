// Classe já existe no javascript
// classes foi introduzida em 2015 no javascript em nem todos os navegadores suportam.
// Ao adicionar classes no typescript se ele for trasnpilado para uma versão do javascritp que não suportava classes, será um código legível para a maioria dos navegadores
// pesquisar ferramenta typescript playground: escrever em typescritp e ver como fica em javascript

class Data {
    //public dia: number; // essas propriedades são publicas, pode ser acessado. Ela é pública por padrão
    mes: number; 
    ano: number;
    private hora?: number; // só consegue ser utilizado dentro da classe.

    // as variáveis acima ficam com sinal de erro até serem inicializadas.
    // as variáveis serão inicializadas com o construtor abaixo

    // se abaixo eu colocar a propriedade public ou private eu não preciso declarar acima a classe e abaixo o this, pois o typescript já interpreta esses dados e organiza tudo quando for transpilado para o javascript
    constructor(public dia: number, mes: number, ano: number, hora: number = 2) { // o último valor é padrão igual a 2, eu não sou forçado a colocar ele no const abaixo.
        // this.dia = dia; // quando se fala "this" está se referindo a classe acima.
        this.mes = mes;
        this.ano = ano;
        this.hora = hora;

    }


}

const data = new Data(1, 1, 2020);

console.log(data.dia);
console.log(data.mes);