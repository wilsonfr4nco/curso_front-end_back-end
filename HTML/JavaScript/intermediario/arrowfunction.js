// abstração de função
 function soma(x, y) {
     return x + y;
 }

 console.log(soma(3, 5))

/*  é  importante utilizar constante para a função não ser sobrescrita por conta de erros no código.
é bom colocar função dentro de constantes 
*/
 const multiplicacao = function(x, y) {
     return x * y;
 }

console.log(multiplicacao(3, 9));


// arrow function

const dividir = (x, y) => {
    return x / y;

}
console.log(dividir(5, 2));

// construção dinâmica de objetos, o objeto precisa ser encapsulado entre parênteses
// se fosse só uma funçao eu não precisaria fazer isso abaixo.

const objeto = () => ({nome: 'Wilson', sobrenome: 'Franco'});