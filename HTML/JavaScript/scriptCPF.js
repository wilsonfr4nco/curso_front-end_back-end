console.log("JavaScript Carregado");

// A mensagem abaixo não aparece no html pois está encapsulada pela função.
// Vamos ensinar ao html usar a função

function validaCPF(cpf) {

    if(cpf.length != 11) {
        return false;
    } else {
        // o '.substring' abaixo você pode selecionar uma parte de seu texto dado (numero_inicial, numero_final), se colocar apenas um número
        // se colocar apenas um número no parênteses 
        var numeros = cpf.substring(0, 9);
        var digitos = cpf.substring(9);
        
        var soma = 0;
            for(var i = 10; i > 1; i--) {
                soma += numeros.charAt(10 - i) * i;
        }
        
        // o sinal % é o resto de uma divisão
        // abaixo temos, se o resto da soma dividido por 11 for menor do que 2 vem uma pergunta "?" para confirmar essa questão
        // caso seja menor do que 2 o valor a ser colocado na variável resultado será o zero, caso contrário será o próximo calculo
        // abaixo temos o operador ternário
        var resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11)
        
        // validação do primeiro dígito do CPF
        if(resultado != digitos.charAt(0)) {
            return false;
        }

        // reset da variável soma logo abaixo. Não precisa colocar var pois já foi declarada.
        soma = 0;
        numeros = cpf.substring(0,10);

        for(var k = 11; k > 1; k--){
            soma += numeros.charAt(11 - k) * k;
        }

        resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
        
        // validação do segundo dígito
        if(resultado != digitos.charAt(1)){
            return false;
        }

        return true;
    }
}


function validacao() {
    console.log('Iniciando validação de CPF');
    // ensinando o javaScript pegar informações dentro do HTML
    var cpf = document.getElementById('cpf_digitado').value;
    // abaixo sempre que eu clicar no botão de verificar o código vai colocar esses valores no sytles para "resetar" a página.
    document.getElementById('success').style.display = 'none';
    document.getElementById('error').style.display = 'none';
    
    var resuldadoValidacao = validaCPF(cpf);
    //  abaixo poderia ser "resuldadoValidacao == true" mas se apenas colocar o nome ele pode ser utilizado como booleano conforme abaixo.
    if (resuldadoValidacao) {
        // não é recomendado manipular o style via javaScript em aplicações mais robustas, mas vamos fazer para esse exemplo.
        document.getElementById('success').style.display = 'block';
    } else {
        document.getElementById('error').style.display = 'block';
    }
}
