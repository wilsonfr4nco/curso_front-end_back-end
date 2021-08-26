// Utilizando spread colocando uma lista dentro da outra.
let lista = [1, 2, 5];
let listaIncluir = [3, 4];

for (let i = 0; i < listaIncluir.length; i++) {
    for (let j = 0; j < lista.length; j++) {
        if (lista[j] >= listaIncluir[i]) {
            lista.splice(j, 0, listaIncluir[i]);
            j++;
        }
    }
}
console.log(lista);

// agora sim utilizando o spread

let lista1 = ['a', 'b', 'c'];

// A maneira como foi feito abaixo é apenas uma referência para o valor inicial e não uma nova lista
// let lista2 = lista1;

// dessa maneira fizemos uma cópia utilizando o spread
let lista2 = [...lista1];


lista2.push('d');

console.log(`Lista1 =  ${lista1}`);
console.log(`Lista2 =  ${lista2}`)