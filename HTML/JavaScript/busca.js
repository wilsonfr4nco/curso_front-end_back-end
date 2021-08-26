let valores = [5, 8, 10, 22, 45, 38];


// na busca o valor que não for encontrado deve retornar -1
function busca(numero) {
    for (i = 0; i < 6; i++) {
        if (numero == valores[i]) {
            return 1;
        }
    }
    return -1;

}

console.log(busca(10));
console.log(busca(100));