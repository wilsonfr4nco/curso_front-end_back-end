var numeroSorteado = 9;

let tabuada = 7

// Variável acima declarada, o valor "i" está sendo utilizado apenas para o for 
// o "i++" soma + 1 ao valor em "i"
for (var i = 0; i < 10; i++) {
    console.log(i);
}

// Tabuada de 7 abaixo
for (var i = 0; i <= 10; i++) {
    console.log('Valor de ' + tabuada + ' x ' + i + ' = ' + tabuada*i);
}


// numero sorteado
for (var i = 0; i < 100; i++) {
    if (numeroSorteado === i) {
        console.log('seu numero foi encontrado');
        break; // estamos utilizando o break nesse caso, mas ele não é o mais recomendado nesse contexto.
    }
}