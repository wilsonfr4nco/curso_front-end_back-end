var achou = false;

// se utilizar a "!" antes da variável ela inverte o valor
while (achou) {
    console.log('achou');
}

var numeroSorteado = 9;
var possivelValor = 0;

while (!achou) {
    possivelValor += 1;
    if (numeroSorteado === possivelValor) {
        console.log('O número sorteado é: ' + possivelValor)
        achou = true;
    } else {
        console.log(
            'Possível valor não corresponde ao número sorteado: ' + possivelValor 
        );

    }
}