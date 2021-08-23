// Quando crio classe, não preciso declarar as funções dentro da classe, pois o javaSript já entende.
class Matematica {

    soma(valorA, valorB) {
        return valorA + valorB;
    }
    subtracao(valorA, valorB) {
        return valorA - valorB;
    }
}

var instanciaMatematica = new Matematica();

var resultado = instanciaMatematica.soma(4, 7);

console.log(resultado);